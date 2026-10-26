// index.style.ts //

import { StyleSheet } from "react-native";


export const stylesIndex = StyleSheet.create({
// export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    // paddingTop: 20,
    padding: 40,

  },
  scrollContent: {
    paddingBottom: 40,
  },


  // === HEADER === 
  // headerContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-start',
  //   marginBottom: 24,
  // },

  // === HEADINGS === 
  // headerTitle: {
  //   // fontSize: 26,
  //   fontSize: 44,
  //   fontWeight: '800',
  //   color: '#111827',
  //   // letterSpacing: -0.5,
  // },
  // //   pageTitle: {
  // //   // fontSize: 32,
  // //   fontSize: 44,

  // //   // fontWeight: '800',
  // //   fontWeight: '900',

  // //   color: '#111827',
  // //   marginBottom: 20,

  // //   // fontFamily: 'serif', 
  // // },

  // headerSubtitle: {
  //   fontSize: 13,
  //   color: '#6B7280',
  //   marginTop: 4,
  // },

  // === BADGES === 
  // badgeContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#ff7403',
  //   paddingHorizontal: 10,
  //   paddingVertical: 6,
  //   borderRadius: 12,
  //   borderWidth: 1,
  //   borderColor: '#FDE68A',
  //   gap: 4,
  // },
  // badgeText: {
  //   fontSize: 16,
  //   fontWeight: '700',
  //   color: '#ffffff',
  // },

  // --- newer ---
  headerContainer: {
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  headerWide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerNarrow: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
  },
  headerTextWrapper: {
    flex: 1,
    marginRight: 16,
  },
  headerTitle: {
    fontWeight: '800',
  //   fontSize: 44,
    color: '#111827',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: '#6B7280',

    // color: 'rgba(255, 255, 255, 0.85)',
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#E59400',
  },



  // === CATEGORY SECTION === 
  categoryContainer: {
    marginBottom: 36,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // --- Category card ---
  categoryCard: {
    height: 165,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    marginBottom: 16,
  },
  hoveredCategoryCard: {
    borderColor: '#E59400',
    transform: [{ translateY: -4 }],
    shadowOpacity: 0.22,
    shadowRadius: 12,
  },
  selectedCategoryCard: {
    borderColor: '#E59400',
  },
  categoryBgImage: {
    width: '100%',
    height: '100%',
  },
  categoryImageStyle: {
    borderRadius: 18,
  },
  categoryOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'space-between',
    padding: 14,
  },
  categoryOverlayHover: {
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },

  // --- card details --- 
  countBadge: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  countText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  categoryInfo: {
    justifyContent: 'flex-end',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  categoryTextHover: {
    color: '#FDE68A',
  },
  browseRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  browseText: {
    color: '#FEF3C7',
    fontSize: 11,
    fontWeight: '500',
  },
  chevronIcon: {
    marginLeft: 4,
  },
  chevronIconHover: {
    transform: [{ translateX: 3 }],
  },

  // === FEATURED PRODUCTS === 
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E59400',
  },
  horizontalScrollWrapper: {
    marginBottom: 16,
  },
  horizontalScroll: {
    marginBottom: 4,
  },

  // --- product card --- 
  productCard: {
    width: 175,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 12,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    position: 'relative',
    justifyContent: 'space-between',
  },
  productTagBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 2,
    backgroundColor: 'rgba(229, 148, 0, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  productTagText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  productImagePlaceholder: {
    width: '100%',
    height: 115,
    backgroundColor: '#FEF3C7',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },

  // --- product card details --- 
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
  productMetaRow: {
    marginBottom: 8,
  },
  productName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4B5563',
  },
  productFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: '#E59400',
  },
  quickAddButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E59400',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

