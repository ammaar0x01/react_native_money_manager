/*
global.styles.ts 
================
*/

import { TextStyle } from "react-native";
import { ColorsThemeDefault } from "./themeDefault.styles";
// -----------------------------------

// --- Change the theme here --- 
export const themeName = ColorsThemeDefault

// --- SETUP ---
const backgroundColor = themeName.background
const textColor = themeName.text
const pageHeadingColor = themeName.pageHeading 
const pageSubheadingColor = themeName.pageSubheading 
// --------------------------------------


export const GlobalStyles = {
  // === PAGE LAYOUT ===
  mainContainer: {
    flex: 1,
    backgroundColor: backgroundColor, 
    textColor: textColor, 
    padding: 40,
    paddingBottom: 0,
    paddingTop: 0,
  },
  scrollContent: {
    paddingBottom: 40,
    paddingTop: 40,
  },
  contentWrapper: {
    width: "100%",
    alignSelf: "center",
  },
  contentWrapperDesktop: {
    maxWidth: 700,
  },

  // === HEADER ===
  pageTitle: {
    fontSize: 44,
    fontWeight: "800" as TextStyle["fontWeight"],
    color: pageHeadingColor, 
    marginBottom: 20,
  },
  pageSubtitle: {
    fontSize: 13,
    color: pageSubheadingColor, 
    marginTop: 4,
  } as const,
};
