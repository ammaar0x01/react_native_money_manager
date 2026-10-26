/*
main.ts
=======
*/
import { StyleSheet } from "react-native";


// === GLOBAL =======================================
const globalStyles = {
  outerContainer: {
    flex: 1,
    backgroundColor: "#FFE8B6",
    // padding: 16,
    padding: 40,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // === PAGE HEADING === 
    pageTitle: {
    // fontSize: 32,
    fontSize: 44,

    // fontWeight: '800',
    fontWeight: '900',

    color: '#111827',
    marginBottom: 20,

    // fontFamily: 'serif', 
  },
};

// --- styles that are used in a view tag/element --- 
const ViewStyles = {
  flex: 1,
  flexDirection: "row",
  width: "100%",
  height: "100%",
  backgroundColor: "#E59400",
};

export const Colors = {
  background: "#121212",
  surface: "#FFFFFF",
  primary: "#E59400",
  textPrimary: "#111827",
  textSecondary: "#6B7280",
};

// newer
// export const Colors = {
//   primary: '#E59400',
//   primaryLight: '#FEF3C7',
//   primaryBorder: '#FDE68A',
//   textMain: '#111827',
//   textMuted: '#6B7280',
//   white: '#FFFFFF',
//   background: '#FFFFFF',
//   cardBg: '#F9FAFB',
//   border: '#E5E7EB',
// };

export const Spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};



export const Shadows = {
  card: {
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
};

//  pageHeading: {
//  pageTitle: {
//     // fontSize: 40,
//     fontSize: 50,

//     fontWeight: '800',
//     color: '#111827',
//     marginBottom: 20,
//     // fontFamily: 'serif', 
//   },

// ============================================

export const stylesLanding = StyleSheet.create(globalStyles);
