import { StyleSheet } from "react-native";


export const stylesLanding = StyleSheet.create({

  // --- newer 
container: { 
    flex: 1,
    backgroundColor: 'transparent', // Changed from solid #121212 so image shows through
  },

  // === BACKGROUND IMAGE WRAPPER STYLES ===
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(50, 20, 5, 0.65),', // Warm dark overlay for contrast
  },

  // ... (keep all your other existing styles below) ...

  // === SCROLL CONTENT == 
  scrollContent: { 
    flexGrow: 1, 
    backgroundColor: 'transparent', // Changed from solid #ffffff so the background image shows through the scroll view
  },

  // ---


  // container: { 
  //   flex: 1,
  //    backgroundColor: '#121212' 
  //   },
 
 
  // === NAV ===
  stickyNavBar: {
    position: 'sticky' as any,
    top: 0,
    zIndex: 1000,
    // backgroundColor: '#121212',
    backgroundColor: '#000000',

    paddingHorizontal: 40,
    paddingVertical: 16,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  desktopNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  mobileNavRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBrand: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    fontStyle: 'italic',
    letterSpacing: -0.5,
  },
  brandAccent: {
    color: '#E59400',
  },
  hamburgerBtn: {
    padding: 4,
  },
  mobileDropdownMenu: {
    position: 'sticky' as any,
    top: 55,
    zIndex: 999,
    // backgroundColor: '#121212',
    backgroundColor: '#000000',
    // backgroundColor: '#fc9b00',

    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222222',
  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownText: {
    color: '#D1D5DB',
    fontSize: 15,
    fontWeight: '600',
  },
  dropdownTextAccent: {
    color: '#F59E0B',
    fontSize: 15,
    fontWeight: '700',
  },
  navLinksRight: { flexDirection: 'row', gap: 28, alignItems: 'center' },
  navLink: { color: '#E5E7EB', fontSize: 14, fontWeight: '600' },
  navLinkAccent: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
  
  // === SCROLL CONTENT == 
  // scrollContent: { 
  //   flexGrow: 1, 
  //   backgroundColor: '#ffffff' 
  // },
  
  // Hero section (~100vh full height)
  heroSection: { 
    backgroundColor: '#E59400', 
    paddingVertical: 60, 
    paddingHorizontal: 30, 
    width: '100%', 
    // minHeight: '100vh' as any, 
    minHeight: '88vh' as any, 

    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBoxCard: { 
    width: '100%', 
    maxWidth: 550, 
    alignItems: 'center', 
    gap: 14, 
  },
  transparentInputField: {
    width: '100%', 
    backgroundColor: 'rgba(255, 255, 255, 0.08)', 
    borderRadius: 14, 
    paddingHorizontal: 18, 
    paddingVertical: 14, 
    fontSize: 14, 
    color: '#FFFFFF',
    borderWidth: 0,
    ...( { 
      outlineStyle: 'none',
      transition: 'all 0.2s ease',
    } as any),
  },
  transparentInputFieldFocused: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)', // Subtle background highlight effect when focused
  },
  searchButton: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 14, 
    paddingVertical: 14, 
    paddingHorizontal: 40, 
    alignItems: 'center', 
    marginTop: 6,
    ...( { transition: 'all 0.2s ease' } as any),
  },
  searchButtonHover: {
    backgroundColor: '#111827',
  },
  searchButtonText: { 
    color: '#E59400', 
    fontWeight: '900', 
    fontSize: 15 
  },
  searchButtonTextHover: {
    color: '#FFFFFF',
  },

  // Main white section
  mainWhiteContainer: { 
    backgroundColor: '#FFFFFF', 
    borderTopLeftRadius: 28, 
    borderTopRightRadius: 28, 
    marginTop: -24, 
    paddingVertical: 50, 
    paddingHorizontal: 30, 
    width: '100%', 
    alignItems: 'center' 
  },
  sectionContainer: { 
    width: '100%', 
    maxWidth: 850, 
    // minHeight: 200, 
    marginBottom: 45, 
    alignItems: 'center' 
  },
  sectionTitle: { 
    fontSize: 30, 
    // fontSize: 22, 

    fontWeight: '900', 
    color: '#111827', 
    marginBottom: 30, 
    marginTop: 30, 

    textAlign: 'center' 
  },
  categoryGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 12, 
    justifyContent: 'flex-start',
    width: '100%', 

    marginBottom: 60, 
  },
  categoryChip: { 
    backgroundColor: '#F9FAFB', 
    borderRadius: 16, 
    paddingVertical: 14, 
    paddingHorizontal: 8, 
    borderWidth: 1, 
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    ...( { transition: 'all 0.2s ease' } as any ),
  },
  categoryChipHover: {
    backgroundColor: '#E59400',
    borderColor: '#E59400',
    transform: [{ translateY: -2 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  categoryChipText: { 
    color: '#2563EB', 
    fontWeight: '700', 
    fontSize: 13,
    textAlign: 'center',
  },
  categoryChipTextHover: {
    color: '#FFFFFF',
  },
  
  // === ABOUT === 
  aboutCard: {
    // backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 24,
    // borderWidth: 1,
    // borderColor: '#E5E7EB',
    
    // width: '100%',
    width: '80%',

    // marginTop: 40, 
    // marginBottom: 40, 

  },
    aboutTitle: { 
    fontSize: 30, 
    fontWeight: '900', 
    color: '#000000', 
    marginBottom: 2, 
    marginTop: 20, 

    textAlign: 'center' 
  },
  aboutText: { 
    fontSize: 15, 
    color: '#374151', 
    textAlign: 'center', 
    lineHeight: 24, 
  },

  // === CONTACT == 
  contactCard: { 
    backgroundColor: '#E59400', 
    borderRadius: 24, 

    // padding: 32, 
    padding: 50, 

    width: '100%', 
    maxWidth: 850, 
    marginTop:50, 
    marginBottom:50, 

  },
  contactCardTitle: { 
    fontSize: 30, 
    fontWeight: '900', 
    color: '#FFFFFF', 
    marginBottom: 24, 
    marginTop: 2, 

    textAlign: 'center' 
  },
  formGroupRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 16, 
    width: '100%',
    gap: 20 
  },
  formGroupColumn: { 
    marginBottom: 16, 
    width: '100%', 
    height: 150,  
  },
  formLabel: { 
    color: '#FFFFFF', 
    fontSize: 14, 
    fontWeight: '800', 
    width: 110 
  },
  formInput: { 
    flex: 1, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    paddingHorizontal: 16, 
    paddingVertical: 12, 
    fontSize: 14, 
    color: '#111827',
    borderWidth: 0,
    ...( { outlineStyle: 'none' } as any),
  },
  sendButton: { 
    backgroundColor: '#FFFFFF', 
    borderRadius: 12, 
    paddingVertical: 14, 
    alignItems: 'center', 
    marginTop: 10,
    // width: '100%',
    width: 200,  

    ...( { transition: 'all 0.2s ease' } as any),
  },
  sendButtonHover: {
    backgroundColor: '#111827',
  },
  sendButtonText: { 
    color: '#E59400', 
    fontWeight: '900', 
    fontSize: 15, 
  },

  appLinksRow: { 
    flexDirection: 'row', 
    gap: 30, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  appLinkText: { 
    color: '#2563EB', 
    fontWeight: '800', 
    fontSize: 14, 
    textDecorationLine: 'underline' 
  },

  // === SOCIALS === 
  socialCardContainer: { 
    backgroundColor: '#000000', 
    borderRadius: 24, 
    paddingVertical: 32, 
    paddingHorizontal: 40, 
    width: '100%', 
    maxWidth: 850, 
    alignItems: 'center', 

    marginBottom: 60,  
    marginTop: 60,  

  },
  socialCardTitle: { 
    color: '#FFFFFF', 
    fontSize: 18, 
    fontWeight: '800', 
    marginBottom: 16 
  },
  socialIconsRow: { 
    flexDirection: 'row', 
    gap: 20 
  },
  socialIconWrapper: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center', 
    alignItems: 'center',
    ...( { transition: 'all 0.2s ease' } as any),
  },
  socialIconWrapperHover: {
    backgroundColor: '#E59400',
    transform: [{ scale: 1.15 }],
  },

  backToTopButton: { 
    backgroundColor: '#E59400', 
    paddingVertical: 14, 
    paddingHorizontal: 40, 
    borderRadius: 20, 
    marginBottom: 10,
    ...( { transition: 'all 0.2s ease' } as any),
  },
  backToTopButtonHover: {
    backgroundColor: '#111827',
  },
  backToTopText: { 
    color: '#FFFFFF', 
    fontWeight: '900', 
    fontSize: 14 
  },

  // === FOOTER ===
  footer: { 
    backgroundColor: '#000000', 
    paddingVertical: 45, 
    paddingHorizontal: 50, 
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerInner: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    maxWidth: 1100, 
    alignSelf: 'center', 
    width: '100%' 
  },
  footerBrand: { 
    color: '#FFFFFF', 
    fontSize: 15, 
    fontWeight: '900', 
    lineHeight: 20 
  },
  footerLinksCol: { 
    gap: 10, 
    alignItems: 'flex-end' 
  },
  footerItem: { 
    color: '#9CA3AF', 
    fontSize: 13, 
    fontWeight: '600',
    ...( { transition: 'all 0.2s ease' } as any),
  },
  footerItemHover: {
    color: '#E59400',
    transform: [{ translateX: -4 }],
  },
});

