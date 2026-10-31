import { StyleSheet } from "react-native";

import { GlobalStyles } from "@/global.styles";

export const stylesIndex = StyleSheet.create({
  // === LAYOUT ===
  outerContainer: GlobalStyles.mainContainer,

  scrollContent: GlobalStyles.scrollContent,

  // contentWrapper: GlobalStyles.contentWrapper,

  contentWrapper: {
    width: "100%",
    maxWidth: 900,
    alignSelf: "center",
  },

  // === HEADER ===
  headerContainer: {
    ...GlobalStyles.headerContainer,
    alignItems: "center",
    // marginBottom: 8,
  } as any,

  headerTextGroup: {
    flex: 1,
    paddingRight: 12,
  },
  headerTitle: GlobalStyles.pageHeading,
  headerSubtitle: GlobalStyles.pageSubheading,
  headerAddButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#1aaa00",
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 12,
  },
  headerAddButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  // === SUMMARY CARD ===
  summaryCard: {
    backgroundColor: "#0B1F16",
    borderRadius: 20,
    padding: 20,
    // marginTop: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  summaryTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: {
    color: "#9CA3AF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },
  budgetEditButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  budgetEditText: {
    color: "#D1FAE5",
    fontSize: 12,
    fontWeight: "600",
  },
  summaryAmount: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "800",
    letterSpacing: -1,
    marginTop: 8,
  },
  summaryStatsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  summaryStat: {
    flex: 1,
  },
  summaryStatValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  summaryStatLabel: {
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 2,
  },
  summaryDivider: {
    width: 1,
    height: 32,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    marginHorizontal: 12,
  },
  budgetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 20,
    marginBottom: 8,
  },
  budgetText: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  progressTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 999,
  },

  // === SEARCH ===
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 14,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111827",
    padding: 0,
    // @ts-ignore - web only outline reset
    outlineStyle: "none",
  } as any,

  // === CATEGORY FILTERS ===
  chipsScroll: {
    marginBottom: 8,
  },
  chipsRow: {
    gap: 8,
    paddingVertical: 4,
    paddingRight: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  chipActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4B5563",
  },
  chipTextActive: {
    color: "#FFFFFF",
  },

  // === SPENDING BREAKDOWN ===
  breakdownCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  breakdownHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  sectionHint: {
    fontSize: 12,
    color: "#9CA3AF",
  },
  breakdownRow: {
    marginBottom: 12,
  },
  breakdownLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  breakdownLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#4B5563",
  },
  breakdownValue: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },
  breakdownTrack: {
    height: 6,
    borderRadius: 999,
    backgroundColor: "#F3F4F6",
    overflow: "hidden",
  },
  breakdownFill: {
    height: "100%",
    borderRadius: 999,
  },

  // === EXPENSE LIST ===
  listSection: {
    marginTop: 22,
  },
  listHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionCount: {
    fontSize: 12,
    fontWeight: "600",
    color: "#9CA3AF",
  },
  expenseCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  categoryIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  expenseDetails: {
    flex: 1,
    paddingRight: 8,
  },
  expenseTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  expenseMeta: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  expenseNote: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 2,
  },
  expenseRight: {
    alignItems: "flex-end",
  },
  expenseAmount: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111827",
  },
  deleteButton: {
    padding: 6,
    marginTop: 2,
  },
  emptyCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#374151",
    marginTop: 12,
  },
  emptyText: {
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 4,
    textAlign: "center",
  },

  // === ADD EXPENSE MODAL ===
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
    marginTop: 12,
  },
  textInput: {
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 46,
    fontSize: 15,
    color: "#111827",
  },
  amountInput: {
    fontSize: 20,
    fontWeight: "700",
  },
  categoryPicker: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  categoryOptionActive: {
    backgroundColor: "#FEF3C7",
    borderColor: "#FDE68A",
  },
  categoryOptionText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4B5563",
  },
  categoryOptionTextActive: {
    color: "#B45309",
  },
  modalActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
    marginBottom: 8,
  },
  cancelButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#4B5563",
  },
  saveButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#1aaa00",
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  // === BUDGET MODAL ===
  budgetModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    padding: 20,
  },
  budgetModalCard: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
  },
  budgetHelpText: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 19,
    marginBottom: 8,
  },
});
