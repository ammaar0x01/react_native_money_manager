import type { ComponentProps } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

import { getCurrencySymbol } from "@/constants/currencies";
import { STORAGE_KEYS } from "@/constants/storage";

// ----------------------------------
export type IconName = ComponentProps<typeof Ionicons>["name"];

export type CategoryKey =
  | "Food"
  | "Transport"
  | "Shopping"
  | "Bills"
  | "Health"
  | "Entertainment"
  | "Other";

export type CategoryFilter = CategoryKey | "All";

export interface CategoryMeta {
  key: CategoryKey;
  label: string;
  icon: IconName;
  color: string;
  background: string;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: CategoryKey;
  date: string;
  note?: string;
}

export interface MonthOption {
  key: string;
  label: string;
  shortLabel: string;
  year: number;
  monthIndex: number;
}

export const DEFAULT_MONTHLY_BUDGET = 5000;

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CATEGORIES: CategoryMeta[] = [
  { key: "Food", label: "Food", icon: "fast-food-outline", color: "#B45309", background: "#FEF3C7" },
  { key: "Transport", label: "Transport", icon: "car-outline", color: "#1D4ED8", background: "#DBEAFE" },
  { key: "Shopping", label: "Shopping", icon: "bag-handle-outline", color: "#BE185D", background: "#FCE7F3" },
  { key: "Bills", label: "Bills", icon: "receipt-outline", color: "#6D28D9", background: "#EDE9FE" },
  { key: "Health", label: "Health", icon: "medkit-outline", color: "#047857", background: "#D1FAE5" },
  {
    key: "Entertainment",
    label: "Fun",
    icon: "game-controller-outline",
    color: "#B91C1C",
    background: "#FEE2E2",
  },
  { key: "Other", label: "Other", icon: "pricetag-outline", color: "#374151", background: "#F3F4F6" },
];

export const getCategoryMeta = (key: CategoryKey): CategoryMeta =>
  CATEGORIES.find((category) => category.key === key) ?? CATEGORIES[CATEGORIES.length - 1];

const padNumber = (value: number): string => String(value).padStart(2, "0");

export const getMonthKey = (date: Date = new Date()): string =>
  `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}`;

export const toDateInput = (date: Date): string =>
  `${getMonthKey(date)}-${padNumber(date.getDate())}`;

export const getTodayInput = (): string => toDateInput(new Date());

/**
 * Returns the current month plus `count - 1` previous months, newest first.
 * With count = 13 and a current month of October 2026, this returns:
 * October 2026 ... October 2025.
 */
export const getMonthOptions = (count = 13): MonthOption[] => {
  const today = new Date();

  return Array.from({ length: count }, (_, offset) => {
    const date = new Date(today.getFullYear(), today.getMonth() - offset, 1);
    const key = getMonthKey(date);
    const monthName = MONTH_NAMES[date.getMonth()];

    return {
      key,
      label: `${monthName} ${date.getFullYear()}`,
      shortLabel: `${monthName.slice(0, 3)} ${date.getFullYear()}`,
      year: date.getFullYear(),
      monthIndex: date.getMonth(),
    };
  });
};

export const getDaysInMonth = (monthKey: string): number => {
  const [year, month] = monthKey.split("-").map(Number);
  return new Date(year, month, 0).getDate();
};

export const getDefaultDateForMonth = (month: MonthOption): string => {
  const today = new Date();
  const daysInMonth = getDaysInMonth(month.key);
  const day = month.key === getMonthKey(today) ? today.getDate() : Math.min(today.getDate(), daysInMonth);

  return `${month.key}-${padNumber(Math.max(day, 1))}`;
};

export const formatDateLabel = (isoDate: string): string => {
  if (isoDate === getTodayInput()) return "Today";

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (isoDate === toDateInput(yesterday)) return "Yesterday";

  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;

  return `${MONTH_NAMES[month - 1].slice(0, 3)} ${day}`;
};

export const formatLongDate = (value: string): string => {
  if (!value) return "—";

  const date = new Date(value.length === 10 ? `${value}T00:00:00` : value);
  if (Number.isNaN(date.getTime())) return value;

  return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
};

export const formatAmount = (amount: number): string => {
  const [whole, decimals] = Math.abs(amount).toFixed(2).split(".");
  return `${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimals}`;
};

export const formatCompactAmount = (amount: number): string =>
  Math.round(Math.abs(amount))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// ----------------------------------
// Demo data for the previous 12 months
// ----------------------------------
interface DummyTemplate {
  title: string;
  amount: number;
  category: CategoryKey;
  day: number;
  note?: string;
}

const DUMMY_TEMPLATES: DummyTemplate[] = [
  {
    title: "Weekly groceries",
    amount: 760,
    category: "Food",
    day: 3,
    note: "Groceries and household items",
  },
  { title: "Fuel top-up", amount: 560, category: "Transport", day: 8 },
  {
    title: "Electricity & water",
    amount: 1180,
    category: "Bills",
    day: 12,
    note: "Municipal bill",
  },
  { title: "Weekend shopping", amount: 460, category: "Shopping", day: 17 },
  { title: "Movie & takeaway", amount: 310, category: "Entertainment", day: 23 },
  {
    title: "Pharmacy",
    amount: 185,
    category: "Health",
    day: 26,
    note: "Monthly essentials",
  },
];

const buildDummyExpenses = (): Expense[] => {
  const previousMonths = getMonthOptions(13).slice(1);

  return previousMonths.flatMap((month, monthIndex) =>
    DUMMY_TEMPLATES.map((template, templateIndex) => {
      const daysInMonth = getDaysInMonth(month.key);
      const variation = 1 + (((monthIndex * 11 + templateIndex * 7) % 19) - 9) / 100;
      const amount = Math.round(template.amount * variation * 100) / 100;
      const day = Math.min(template.day + (monthIndex % 3), daysInMonth);

      return {
        id: `monthly-dummy-${month.key}-${templateIndex}`,
        title: template.title,
        amount,
        category: template.category,
        date: `${month.key}-${padNumber(day)}`,
        note: template.note,
      };
    })
  );
};

const createCurrentMonthSeed = (): Expense[] => {
  const today = new Date();
  const monthKey = getMonthKey(today);
  const day = (offset: number) =>
    `${monthKey}-${padNumber(Math.min(offset, today.getDate()))}`;

  return [
    {
      id: `monthly-current-${monthKey}-groceries`,
      title: "Weekly groceries",
      amount: 842.5,
      category: "Food",
      date: day(3),
      note: "Pick n Pay",
    },
    {
      id: `monthly-current-${monthKey}-fuel`,
      title: "Fuel top-up",
      amount: 650,
      category: "Transport",
      date: day(8),
    },
    {
      id: `monthly-current-${monthKey}-internet`,
      title: "Internet bill",
      amount: 799,
      category: "Bills",
      date: day(12),
    },
  ];
};

const parseExpenses = (value: string | null): Expense[] => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? (parsed as Expense[]) : [];
  } catch {
    return [];
  }
};

const ensureCurrentMonthData = (expenses: Expense[]): Expense[] => {
  const currentMonthKey = getMonthKey();
  if (expenses.some((expense) => expense.date.startsWith(currentMonthKey))) {
    return expenses;
  }

  return [...createCurrentMonthSeed(), ...expenses];
};

/**
 * Loads expenses from the shared storage key.
 *
 * On first use it also adds 12 months of demo expenses (previous months only)
 * and seed data for the current month, so every month in the picker has data.
 */
export const loadExpensesWithHistory = async (): Promise<Expense[]> => {
  const [storedExpenses, seededFlag] = await Promise.all([
    AsyncStorage.getItem(STORAGE_KEYS.expenses),
    AsyncStorage.getItem(STORAGE_KEYS.monthlyDummySeeded),
  ]);

  let expenses = parseExpenses(storedExpenses);

  if (!seededFlag) {
    const existingIds = new Set(expenses.map((expense) => expense.id));
    const dummyExpenses = buildDummyExpenses().filter(
      (expense) => !existingIds.has(expense.id)
    );

    expenses = ensureCurrentMonthData([...expenses, ...dummyExpenses]);

    await AsyncStorage.multiSet([
      [STORAGE_KEYS.expenses, JSON.stringify(expenses)],
      [STORAGE_KEYS.monthlyDummySeeded, "true"],
    ]);
  }

  return expenses;
};

export const persistExpenses = async (expenses: Expense[]): Promise<void> => {
  await AsyncStorage.setItem(STORAGE_KEYS.expenses, JSON.stringify(expenses));
};

export const loadMonthlyBudget = async (): Promise<number> => {
  const storedBudget = await AsyncStorage.getItem(STORAGE_KEYS.monthlyBudget);
  const parsedBudget = Number(storedBudget);

  return Number.isFinite(parsedBudget) && parsedBudget > 0
    ? parsedBudget
    : DEFAULT_MONTHLY_BUDGET;
};

export const loadCurrencySymbol = async (): Promise<string> => {
  const storedCurrency = await AsyncStorage.getItem(STORAGE_KEYS.currency);
  return getCurrencySymbol(storedCurrency);
};
