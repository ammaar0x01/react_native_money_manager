import type { Expense } from "../data/expenses";

export type ExportFormat = "json" | "csv" | "xls";

export interface BackupData {
  expenses: Expense[];
  monthlyBudget: number | null;
  currency: string | null;
  profile: Record<string, unknown> | null;
  firstUsed: string | null;
  monthlyDummySeeded: boolean;
  shoppingLists: unknown[];
  notes: unknown[];
}

export interface BackupFile {
  app: "Money Manager";
  version: "2.0";
  exportDate: string;
  data: Record<string, unknown>;
}

export interface ImportData {
  expenses?: Expense[];
  monthlyBudget?: number;
  currency?: string;
  profile?: Record<string, unknown>;
  firstUsed?: string;
  monthlyDummySeeded?: boolean;
  shoppingLists?: unknown[];
  notes?: unknown[];
}

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const isExpense = (value: unknown): value is Expense => {
  if (!isRecord(value)) return false;

  return (
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.amount === "number" &&
    Number.isFinite(value.amount) &&
    typeof value.category === "string" &&
    typeof value.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(value.date) &&
    (value.note === undefined || typeof value.note === "string")
  );
};

export const escapeCsv = (value: unknown): string => {
  const text = value === null || value === undefined ? "" : String(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

export const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

/**
 * Builds the JSON backup file. Empty/unknown values are omitted so a fresh
 * install does not export `null` fields that look like invalid data on import.
 */
export const createBackupFile = (data: BackupData): BackupFile => {
  const payload: Record<string, unknown> = {
    expenses: data.expenses,
    monthlyDummySeeded: data.monthlyDummySeeded,
    shoppingLists: data.shoppingLists,
    notes: data.notes,
  };

  if (data.monthlyBudget !== null) payload.monthlyBudget = data.monthlyBudget;
  if (data.currency !== null) payload.currency = data.currency;
  if (data.profile !== null) payload.profile = data.profile;
  if (data.firstUsed !== null) payload.firstUsed = data.firstUsed;

  return {
    app: "Money Manager",
    version: "2.0",
    exportDate: new Date().toISOString(),
    data: payload,
  };
};

export const buildCsv = (expenses: Expense[], currency: string | null): string => {
  const header = ["Date", "Title", "Category", "Amount", "Currency", "Note"];
  const rows = [...expenses]
    .sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id))
    .map((expense) => [
      expense.date,
      expense.title,
      expense.category,
      expense.amount.toFixed(2),
      currency ?? "",
      expense.note ?? "",
    ]);

  const csv = [header, ...rows]
    .map((row) => row.map(escapeCsv).join(","))
    .join("\r\n");

  // BOM helps Excel detect UTF-8 correctly.
  return `\uFEFF${csv}\r\n`;
};

export const buildXls = (backup: BackupData): string => {
  const expenses = [...backup.expenses].sort(
    (a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id)
  );

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const months = new Set(expenses.map((expense) => expense.date.slice(0, 7))).size;
  const profile = backup.profile;

  const cell = (value: string | number, style?: string): string => {
    const isNumber = typeof value === "number" && Number.isFinite(value);
    const styleAttr = style ? ` ss:StyleID="${style}"` : "";

    return `<Cell${styleAttr}><Data ss:Type="${isNumber ? "Number" : "String"}">${escapeXml(
      String(value)
    )}</Data></Cell>`;
  };

  const row = (...cells: string[]): string => `<Row>${cells.join("")}</Row>`;
  const worksheet = (name: string, width: number, rows: string[]): string =>
    `<Worksheet ss:Name="${escapeXml(name)}"><Table><Column ss:Width="${width}"/>${rows.join(
      ""
    )}</Table></Worksheet>`;

  const expenseRows = [
    row(
      cell("Date", "Header"),
      cell("Title", "Header"),
      cell("Category", "Header"),
      cell("Amount", "Header"),
      cell("Currency", "Header"),
      cell("Note", "Header")
    ),
    ...expenses.map((expense) =>
      row(
        cell(expense.date),
        cell(expense.title),
        cell(expense.category),
        cell(expense.amount),
        cell(backup.currency ?? ""),
        cell(expense.note ?? "")
      )
    ),
  ];

  const summaryRows = [
    row(cell("Money Manager export", "Title")),
    row(cell("Exported", "Header"), cell(new Date().toLocaleString())),
    row(cell("Total expenses", "Header"), cell(Number(total.toFixed(2)))),
    row(cell("Transactions", "Header"), cell(expenses.length)),
    row(cell("Months tracked", "Header"), cell(months)),
    row(
      cell("Average per month", "Header"),
      cell(months > 0 ? Number((total / months).toFixed(2)) : 0)
    ),
    row(
      cell("Monthly budget", "Header"),
      cell(backup.monthlyBudget !== null ? backup.monthlyBudget : "")
    ),
    row(cell("Currency", "Header"), cell(backup.currency ?? "")),
  ];

  const profileRows = [
    row(cell("Profile", "Title")),
    row(cell("Username", "Header"), cell(String(profile?.username ?? "Guest User"))),
    row(cell("User ID", "Header"), cell(String(profile?.userId ?? ""))),
    row(cell("First used", "Header"), cell(backup.firstUsed ?? "")),
    row(
      cell("Profile photo", "Header"),
      cell(profile?.imageUri ? "Saved in app backup (JSON)" : "None")
    ),
  ];

  return `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Header">
   <Font ss:Bold="1" ss:Color="#14532D"/>
   <Interior ss:Color="#DCFCE7" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Title">
   <Font ss:Bold="1" ss:Size="14" ss:Color="#111827"/>
  </Style>
 </Styles>
 ${worksheet("Expenses", 180, expenseRows)}
 ${worksheet("Summary", 220, summaryRows)}
 ${worksheet("Profile", 220, profileRows)}
</Workbook>`;
};

/**
 * Accepts the current Money Manager backup format and the older flat format
 * (shoppingLists / notes / currency at the top level).
 */
export const normalizeImport = (parsed: unknown): ImportData => {
  if (!isRecord(parsed)) {
    throw new Error("The selected file does not contain a JSON object.");
  }

  const source = isRecord(parsed.data) ? parsed.data : parsed;
  const knownKeys = [
    "expenses",
    "monthlyBudget",
    "currency",
    "profile",
    "firstUsed",
    "monthlyDummySeeded",
    "shoppingLists",
    "notes",
  ];

  if (!knownKeys.some((key) => key in source)) {
    throw new Error("This does not look like a Money Manager backup.");
  }

  const data: ImportData = {};

  if ("expenses" in source && source.expenses !== null) {
    if (!Array.isArray(source.expenses) || !source.expenses.every(isExpense)) {
      throw new Error("The backup contains invalid expense entries.");
    }
    data.expenses = source.expenses;
  }

  if ("monthlyBudget" in source && source.monthlyBudget !== null) {
    if (
      typeof source.monthlyBudget !== "number" ||
      !Number.isFinite(source.monthlyBudget) ||
      source.monthlyBudget <= 0
    ) {
      throw new Error("The backup contains an invalid monthly budget.");
    }
    data.monthlyBudget = source.monthlyBudget;
  }

  if ("currency" in source && source.currency !== null) {
    if (typeof source.currency !== "string" || !source.currency.trim()) {
      throw new Error("The backup contains an invalid currency setting.");
    }
    data.currency = source.currency;
  }

  if ("profile" in source && source.profile !== null) {
    if (!isRecord(source.profile)) {
      throw new Error("The backup contains an invalid profile.");
    }
    data.profile = source.profile;
  }

  if ("firstUsed" in source && source.firstUsed !== null) {
    if (typeof source.firstUsed !== "string") {
      throw new Error("The backup contains an invalid first-use date.");
    }
    data.firstUsed = source.firstUsed;
  }

  if ("monthlyDummySeeded" in source) {
    data.monthlyDummySeeded = source.monthlyDummySeeded === true;
  }

  if ("shoppingLists" in source && source.shoppingLists !== null) {
    if (!Array.isArray(source.shoppingLists)) {
      throw new Error("The backup contains invalid shopping list data.");
    }
    data.shoppingLists = source.shoppingLists;
  }

  if ("notes" in source && source.notes !== null) {
    if (!Array.isArray(source.notes)) {
      throw new Error("The backup contains invalid notes data.");
    }
    data.notes = source.notes;
  }

  if (Object.keys(data).length === 0) {
    throw new Error("The backup does not contain anything to import.");
  }

  return data;
};
