/**
 * Currency codes used by the Settings page mapped to display symbols.
 *
 * The stored value in AsyncStorage is always an ISO-style code such as "ZAR"
 * or "USD", never the symbol itself.
 */
export const CURRENCY_SYMBOLS: Record<string, string> = {
  ZAR: "R",
  USD: "$",
  EUR: "€",
  GBP: "£",
  AUD: "A$",
  CAD: "C$",
  INR: "₹",
  JPY: "¥",
  CNY: "¥",
  BRL: "R$",
  MXN: "$",
  NZD: "NZ$",
  CHF: "CHF",
  SGD: "S$",
};

export const getCurrencySymbol = (code: string | null | undefined): string => {
  if (!code) return "R";
  return CURRENCY_SYMBOLS[code] ?? "R";
};
