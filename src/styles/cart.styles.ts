import { StyleSheet } from "react-native";


export const stylesCart = StyleSheet.create({
  outerContainer: {
    flex: 1,
    // backgroundColor: '#E59400',
    backgroundColor: '#ffffff',

    // padding: 16,
    padding: 40, 

  },
  scrollContent: {
    // paddingBottom: 40,
  },
  whiteCardContainer: {
    backgroundColor: '#FFFFFF',
    // borderRadius: 32,
    // padding: 32,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,

    // minHeight: '100%', 
    minHeight: '100vh' as any, 

  },
  pageTitle: {
    fontSize: 44,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 24,
  },
  cartContentLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  },
  itemsColumn: {
    flex: 2,
    minWidth: 300,
  },
  summaryColumn: {
    flex: 1,
    minWidth: 260,
  },
  cartItemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  productImagePlaceholder: {
    width: 80,
    height: 60,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  removeButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  removeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  bottomActionsRow: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 20,
    gap: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: '#4B5563',
    fontWeight: '500',
  },
  totalValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },
  actionButtonsGroup: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  secondaryActionButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryActionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  orderSummaryCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryKey: {
    fontSize: 15,
    color: '#4B5563',
  },
  summaryVal: {
    fontSize: 15,
    color: '#111827',
  },
  summaryValBold: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  checkoutButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  checkoutButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
});
