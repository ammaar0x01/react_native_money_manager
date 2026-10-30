import { StyleSheet } from "react-native";

import { GlobalStyles } from "@/global.styles";

export const stylesProfile = StyleSheet.create({

  // --------------------------------

  //NEWER

  // Tappable row that wraps the username + pencil icon
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    gap: 8,
  },

  // Text field inside the "Edit username" sheet
  nameInput: {
    marginTop: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
    fontSize: 16,
    color: "#111827",
  },
  nameInputInvalid: {
    borderColor: "#B91C1C",
  },
  nameInputError: {
    marginTop: 6,
    fontSize: 13,
    color: "#B91C1C",
  },

  // Primary "Save name" button in the sheet
  sheetPrimary: {
    marginTop: 16,
    minHeight: 48,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#1aaa00",
    alignItems: "center",
    justifyContent: "center",
  },
  sheetPrimaryDisabled: {
    opacity: 0.7,
  },
  sheetPrimaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  // --------------------------------

  
  // === LAYOUT ===
  outerContainer: GlobalStyles.mainContainer,
  scrollContent: GlobalStyles.scrollContent,
  contentWrapper: {
    width: "100%",
    maxWidth: 900,
    alignSelf: "center",
  },

  // === HEADER ===
  headerContainer: {
    ...GlobalStyles.headerContainer,
    alignItems: "center",
    marginBottom: 8,
  } as any,
  headerTitle: GlobalStyles.pageHeading,
  headerSubtitle: GlobalStyles.pageSubheading,
  
  headerSettingsButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },

  // === PROFILE HERO ===
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 20,
    padding: 24,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  avatarWrapper: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: "#F0FDF4",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 62,
  },
  avatarPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarEditBadge: {
    position: "absolute",
    right: -2,
    bottom: 2,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#1aaa00",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  profileName: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
  },
  userIdPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    marginTop: 8,
  },
  userIdText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4B5563",
  },
  memberSince: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 10,
    textAlign: "center",
  },

  // === YEAR-TO-DATE SPENDING ===
  spendingCard: {
    backgroundColor: "#0B1F16",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  spendingHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  spendingLabel: {
    color: "#9CA3AF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },
  spendingAmount: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "800",
    letterSpacing: -1,
    marginTop: 6,
  },
  yearBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  yearBadgeText: {
    color: "#D1FAE5",
    fontSize: 12,
    fontWeight: "700",
  },
  spendingStatsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  spendingStat: {
    flex: 1,
  },
  spendingStatValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  spendingStatLabel: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 2,
  },
  spendingDivider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    marginHorizontal: 10,
  },
  topCategoryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
  },
  topCategoryLabel: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  topCategoryValue: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: "auto",
  },

  // === PHOTO SECTION ===
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  sectionDescription: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 19,
    marginTop: 6,
    marginBottom: 16,
  },
  photoActionsRow: {
    flexDirection: "row",
    gap: 12,
  },
  primaryAction: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    backgroundColor: "#1aaa00",
    height: 48,
    borderRadius: 12,
  },
  primaryActionText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  secondaryAction: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    backgroundColor: "#FEF2F2",
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FECACA",
  },
  secondaryActionText: {
    color: "#B91C1C",
    fontSize: 15,
    fontWeight: "700",
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 62,
    justifyContent: "center",
    alignItems: "center",
  },

  // === PHOTO ACTION SHEET ===
  sheetOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  sheetCard: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingBottom: 28,
  },
  sheetHandle: {
    alignSelf: "center",
    width: 44,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E5E7EB",
    marginBottom: 18,
  },
  sheetTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#111827",
  },
  sheetSubtitle: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 19,
    marginTop: 6,
    marginBottom: 14,
  },
  sheetOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  sheetOptionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  sheetOptionDangerText: {
    color: "#B91C1C",
  },
  sheetChevron: {
    marginLeft: "auto",
  },
  sheetCancel: {
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    marginTop: 16,
  },
  sheetCancelText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#4B5563",
  },
});
