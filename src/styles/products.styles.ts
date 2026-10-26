import { StyleSheet } from "react-native";


export const stylesProducts = StyleSheet.create({
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
    marginBottom: 20,
  },
  breadcrumbText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
  pageTitle: {
    // fontSize: 36,
    fontSize: 56,

    fontWeight: '800',
    
    // color: '#2E7D32', // Green accent matching reference
    // color: '#ef8206', 
    color: '#0a0500', 


    textAlign: 'center',
    marginBottom: 14,

    // newer
    marginTop: 24,
    // fontFamily: "Serif", // use a custom font? 
  },
  filterBar: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flexWrap: 'wrap',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  filterDropdown: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
  },
  filterDropdownText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },

  // === PRODUCTS ===
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'flex-start',
    marginBottom: 40,
  },
  // ----
  productImage: {
    // width: '100%',
    // height: '100%',
    // borderRadius: 12,
  },
  // ---
  productCard: {
    // width: '30%',
    width: '20%', // adaptable width dependent on number of images? 

    // height: '60%',

    minWidth: 220,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
  },
  productCardHovered: {
    // borderColor: '#6366F1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  hoverOverlay: {
    // ...StyleSheet.absoluteFillObject,
    ...StyleSheet.absoluteFill,

    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  hoverOverlayContent: {
    alignItems: 'center',
  },
  hoverOverlayText: {
    color: '#FFFFFF',
    // fontSize: 16,
    fontSize: 27,

    // fontWeight: '700',
    fontWeight: '500',

    textAlign: 'center',

    // lineHeight: 22,
    lineHeight: 35,

    // fontFamily: 'serif', 

  },
  productImagePlaceholder: {
    width: '100%',
    height: 140,
    // backgroundColor: '#F3F4F6',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    height: 38,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  productLocation: {
    fontSize: 12,
    color: '#6B7280',
  },

  // === PAGE related === 
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  pageButton: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 9999,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  pageButtonActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  pageButtonActiveFirst: {
    backgroundColor: '#65A30D',
    borderRadius: 9999,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  pageButtonActiveText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  // more -----------------
  resultsCount: {
    fontSize: 16,

    // fontWeight: '600',
    fontWeight: '700',

    // color: '#4B5563',
    color: '#d25b00',

      textAlign: 'center',
    marginBottom: 24,
  },
});

