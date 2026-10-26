import { StyleSheet } from "react-native";


export const stylesProductDetails = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#E59400',
    // padding: 16,
  },
  scrollContent: {
    // paddingBottom: 40,
  },
  whiteCardContainer: {
    backgroundColor: '#FFFFFF',
    // borderRadius: 32,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  breadcrumbContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  breadcrumbText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
  productMainRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
    alignItems: 'flex-start',
    marginBottom: 32,
  },

  // ----
    productImagePlaceholder: {
    // width: '100%',
    // height: 140,
    // // backgroundColor: '#F3F4F6',
    // borderRadius: 14,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 12,

      flex: 1,
    minWidth: 280,
    height: 260,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

   productImage: {
    width: '50%',
    height: '100%',
    // borderRadius: 12,
  },


   productImageMore: {
    width: '70%',
    height: '100%',
    // borderRadius: 12,
  },
  // ---

  imagePreviewBox: {
    flex: 1,
    minWidth: 280,
    height: 260,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreviewSub: {
    marginTop: 8,
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  productInfoColumn: {
    flex: 1.2,
    minWidth: 280,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
    lineHeight: 30,
  },
  productPrice: {
    fontSize: 26,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 20,
  },
  addToCartButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  addToCartText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  storeContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  storeLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  storeName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginTop: 2,
    marginBottom: 4,
  },
  viewLocationLink: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
  },
  specsBox: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  specsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  specsDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 12,
  },
  specItem: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 6,
  },
  recommendationsSection: {
    marginTop: 10,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  horizontalScroll: {
    paddingBottom: 8,
  },
  recommendationCard: {
    width: 170,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
  },
  recImagePlaceholder: {
    width: '100%',
    height: 100,
    // backgroundColor: '#F3F4F6',
    backgroundColor: '#ffffff',

    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  recName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  recPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  recLocation: {
    fontSize: 12,
    color: '#6B7280',
  },
});

