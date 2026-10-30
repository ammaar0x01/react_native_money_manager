import { StyleSheet } from "react-native";

export const stylesExpensesHistory = StyleSheet.create({
  // === MONTH SELECTOR ===
  monthSelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 14,
    marginTop: 18,
    marginBottom: 6,
  },
  monthSelectorIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#F0FDF4",
    justifyContent: "center",
    alignItems: "center",
  },
  monthSelectorText: {
    flex: 1,
  },
  monthSelectorLabel: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.8,
    color: "#9CA3AF",
    textTransform: "uppercase",
  },
  monthSelectorValue: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    marginTop: 2,
  },
  monthSelectorBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 999,
  },
  monthSelectorBadgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#B45309",
  },
  rangeHint: {
    fontSize: 12,
    color: "#9CA3AF",
    marginLeft: 4,
    marginBottom: 20,
  },

  // === MONTH PICKER MODAL ===
  monthModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    padding: 20,
  },
  monthModalCard: {
    width: "100%",
    maxWidth: 460,
    maxHeight: "85%",
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
  },
  monthModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  monthModalTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },
  monthModalSubtitle: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 19,
    marginBottom: 14,
  },
  monthOptionsScroll: {
    maxHeight: 430,
    flexGrow: 0,
    flexShrink: 1,
  },
  monthOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 4,
  },
  monthOptionActive: {
    backgroundColor: "#F0FDF4",
  },
  monthOptionLeft: {
    flex: 1,
    paddingRight: 12,
  },
  monthOptionLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  monthOptionLabelActive: {
    color: "#15803D",
    fontWeight: "700",
  },
  monthOptionMeta: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 2,
  },
  monthOptionRight: {
    alignItems: "flex-end",
  },
  monthOptionTotal: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
  monthOptionTotalActive: {
    color: "#15803D",
  },
  monthOptionCheck: {
    marginTop: 3,
  },
});
