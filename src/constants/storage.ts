/**
 * AsyncStorage keys shared across the app.
 *
 * Keep these in one place so pages always read and write the same entries.
 */
export const STORAGE_KEYS = {
  expenses: "@expenses_storage",
  monthlyBudget: "@expenses_monthly_budget",
  currency: "@app_currency_setting",
  profile: "@user_profile",
  firstUsed: "@profile_first_used",
  monthlyDummySeeded: "@monthly_expenses_dummy_seeded_v1",
  shoppingLists: "@shopping_lists_storage",
  notes: "@notes_app_data",
} as const;
