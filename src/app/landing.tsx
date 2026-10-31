// // import React from 'react';
// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   ScrollView,
// //   Pressable,
// //   Image,
// //   useWindowDimensions,
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { router } from 'expo-router';

// // const HERO_IMAGE = require('@/images/hero.jpg');

// // export default function LandingScreen() {
// //   const { width } = useWindowDimensions();
// //   const isDesktop = width >= 768;

// //   return (
// //     <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
// //       {/* Navbar */}
// //       <View style={[styles.navbar, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
// //         <View style={styles.brandContainer}>
// //           {/* <View style={styles.brandIconBox}>
// //             <Ionicons name="wallet-outline" size={22} color="#FFFFFF" />
// //           </View> */}

// //           <View>
// //             <Text style={styles.brandText}>Money Manager</Text>
// //             <Text style={styles.brandSubText}>Expense tracker</Text>
// //           </View>
// //         </View>

// //         <Pressable
// //           style={styles.navLaunchButton}
// //           onPress={() => router.replace('/' as any)}
// //         >
// //           <Text style={styles.navLaunchButtonText}>Open App</Text>
// //           <Ionicons name="arrow-forward" size={16} color="#FFFFFF" style={{ marginLeft: 6 }} />
// //         </Pressable>
// //       </View>

// //       {/* Hero Section */}
// //       <View style={[styles.heroSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
// //         <View style={[styles.heroContent, isDesktop && styles.heroContentDesktop]}>
// //           <View style={styles.pillBadge}>
// //             {/* <Ionicons name="shield-checkmark" size={14} color="#15803D" style={{ marginRight: 6 }} /> */}
// //             <Text style={styles.pillBadgeText}>Private, offline-first expense tracking</Text>
// //           </View>

// //           <Text style={styles.heroTitle}>
// //             Know where your money goes.
// //             <br />
// //             <Text style={styles.heroTitleHighlight}>Every month.</Text>
// //           </Text>

// //           <Text style={styles.heroDescription}>
// //             Log daily expenses, set monthly budgets, and browse a full year of spending
// //             history. Money Manager keeps your finances organized — with everything stored
// //             privately on your device.
// //           </Text>

// //           <View style={styles.heroButtonsRow}>
// //             <Pressable
// //               style={styles.primaryButton}
// //               onPress={() => router.replace('/' as any)}
// //             >
// //               <Text style={styles.primaryButtonText}>Start Tracking Free</Text>
// //               <Ionicons name="arrow-forward" size={18} color="#2e2d01" style={{ marginLeft: 8 }} />
// //             </Pressable>

// //             <Pressable
// //               style={styles.secondaryButton}
// //               onPress={() => router.replace('/monthly-expenses' as any)}
// //             >
// //               <Ionicons name="calendar-outline" size={18} color="#1F2937" style={{ marginRight: 8 }} />
// //               <Text style={styles.secondaryButtonText}>Monthly Report</Text>
// //             </Pressable>

// //               <Pressable
// //               style={styles.secondaryButton}
// //               onPress={() => router.navigate('https://drive.google.com/file/d/1hgvogx96te_PFWREDEVsA9MonQcxkLPn/view?usp=drive_link' as any)}
// //             >
// //               <Ionicons name="calendar-outline" size={18} color="#1F2937" style={{ marginRight: 8 }} />
// //               <Text style={styles.secondaryButtonText}>Download Android App</Text>
// //             </Pressable>
// //           </View>

// //           <View style={styles.heroTrustRow}>
// //             <View style={styles.heroTrustItem}>
// //               <Ionicons name="checkmark-circle" size={15} color="#1aaa00" />
// //               <Text style={styles.heroTrustText}>No account needed</Text>
// //             </View>
// //             <View style={styles.heroTrustItem}>
// //               <Ionicons name="checkmark-circle" size={15} color="#1aaa00" />
// //               <Text style={styles.heroTrustText}>Works offline</Text>
// //             </View>
// //           </View>
// //         </View>

// //         {/* Hero Image with app preview card */}
// //         <View
// //           style={[
// //             styles.heroImageContainer,
// //             isDesktop && styles.heroImageContainerDesktop,
// //           ]}
// //         >
// //           <Image source={HERO_IMAGE} style={styles.heroImage} resizeMode="cover" />
// //         </View>
// //       </View>

// //       {/* Quick stats */}
// //       {/* <View style={[styles.statsSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
// //         <View style={styles.statsCard}>
// //           <View style={styles.statItem}>
// //             <Text style={styles.statValue}>13</Text>
// //             <Text style={styles.statLabel}>months of history</Text>
// //           </View>

// //           <View style={styles.statDivider} />

// //           <View style={styles.statItem}>
// //             <Text style={styles.statValue}>7</Text>
// //             <Text style={styles.statLabel}>spending categories</Text>
// //           </View>

// //           <View style={styles.statDivider} />

// //           <View style={styles.statItem}>
// //             <Text style={styles.statValue}>100%</Text>
// //             <Text style={styles.statLabel}>stored on your device</Text>
// //           </View>
// //         </View>
// //       </View> */}

// //       {/* Features Grid Section */}
// //       <View style={[styles.featuresSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
// //         <Text style={styles.sectionCategory}>BUILT FOR BETTER SPENDING</Text>
// //         <Text style={styles.sectionTitle}>Everything you need to stay on budget</Text>

// //         <View style={[styles.featuresGrid, isDesktop && styles.featuresGridDesktop]}>
// //           {/* Feature 1 */}
// //           <View style={styles.featureCard}>
// //             {/* <View style={[styles.featureIconBox, { backgroundColor: '#DCFCE7' }]}>
// //               <Ionicons name="pie-chart-outline" size={24} color="#15803D" />
// //             </View> */}
// //             <Text style={styles.featureCardTitle}>Monthly budgets</Text>
// //             <Text style={styles.featureCardDesc}>
// //               Set a spending limit for the month, then watch the progress bar show exactly
// //               how much is left — or how far over budget you are.
// //             </Text>
// //           </View>

// //           {/* Feature 2 */}
// //           <View style={styles.featureCard}>
// //             {/* <View style={[styles.featureIconBox, { backgroundColor: '#DBEAFE' }]}>
// //               <Ionicons name="calendar-outline" size={24} color="#1D4ED8" />
// //             </View> */}
// //             <Text style={styles.featureCardTitle}>13-month history</Text>
// //             <Text style={styles.featureCardDesc}>
// //               Switch between this month and the previous 12. Compare totals, spot trends,
// //               and review past purchases month by month.
// //             </Text>
// //           </View>

// //           {/* Feature 3 */}
// //           <View style={styles.featureCard}>
// //             {/* <View style={[styles.featureIconBox, { backgroundColor: '#FEF3C7' }]}>
// //               <Ionicons name="shield-checkmark-outline" size={24} color="#B45309" />
// //             </View> */}
// //             <Text style={styles.featureCardTitle}>Private by design</Text>
// //             <Text style={styles.featureCardDesc}>
// //               Your expenses, budgets, and profile stay saved locally on your device.
// //               No sign-up, no cloud sync, and no fuss.
// //             </Text>
// //           </View>
// //         </View>
// //       </View>

// //       {/* Footer */}
// //       <View style={styles.footer}>
// //         <Text style={styles.footerText}>
// //           © 2026 Money Manager. Built with React Native & Expo.
// //         </Text>
// //       </View>
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#FFFFFF',
// //   },
// //   scrollContent: {
// //     flexGrow: 1,
// //   },

// //   // --- NAVBAR
// //   navbar: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingVertical: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#E5E7EB',

// //     // backgroundColor: '#FFFFFF',
// //     // backgroundColor: '#95f376',
// //     backgroundColor: '#b4ff9b',

// //   },
// //   brandContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   brandIconBox: {
// //     width: 42,
// //     height: 42,
// //     borderRadius: 12,
// //     backgroundColor: '#1aaa00',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   brandText: {
// //     fontSize: 19,
// //     fontWeight: '800',
// //     color: '#111827',
// //   },
// //   brandSubText: {
// //     fontSize: 11,
// //     fontWeight: '600',
// //     color: '#6B7280',
// //     letterSpacing: 0.4,
// //     textTransform: 'uppercase',
// //     marginTop: 1,
// //   },
// //   navLaunchButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#111827',
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     borderRadius: 10,
// //   },
// //   navLaunchButtonText: {
// //     color: '#FFFFFF',
// //     fontWeight: '600',
// //     fontSize: 14,
// //   },

// //   // --- HERO
// //   heroSection: {
// //     paddingVertical: 50,
// //     flexDirection: 'column',
// //     minHeight: 500,
// //   },

// //   // -- left
// //   heroContent: {
// //     alignItems: 'flex-start',
// //     marginBottom: 40,
// //     marginTop: 20,
// //   },
// //   heroContentDesktop: {
// //     maxWidth: '52%',
// //     paddingRight: 20,
// //     marginTop: 60,
// //   },

// //   // -- right
// //   heroImageContainer: {
// //     width: '100%',
// //     aspectRatio: 1.45,
// //     borderRadius: 20,
// //     overflow: 'hidden',
// //     backgroundColor: '#F3F4F6',
// //   },
// //   heroImageContainerDesktop: {
// //     position: 'absolute',
// //     right: 60,
// //     top: 50,
// //     width: '40%',
// //     height: 430,
// //   },
// //   heroImage: {
// //     width: '100%',
// //     height: '100%',
// //   },

// //   pillBadge: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#DCFCE7',
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 20,
// //     marginBottom: 16,
// //   },
// //   pillBadgeText: {
// //     color: '#15803D',
// //     fontWeight: '700',
// //     fontSize: 12,
// //   },
// //   heroTitle: {
// //     fontSize: 38,
// //     fontWeight: '900',
// //     color: '#111827',
// //     lineHeight: 46,
// //     marginBottom: 16,
// //   },
// //   heroTitleHighlight: {
// //     color: '#1aaa00',
// //   },
// //   heroDescription: {
// //     fontSize: 16,
// //     color: '#4B5563',
// //     lineHeight: 25,
// //     marginBottom: 24,
// //     maxWidth: 560,
// //   },
// //   heroButtonsRow: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     gap: 12,
// //   },
// //   primaryButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#95f376',
// //     paddingHorizontal: 22,
// //     paddingVertical: 14,
// //     borderRadius: 12,
// //   },
// //   primaryButtonText: {
// //     color: '#2e2d01',
// //     fontWeight: '700',
// //     fontSize: 15,
// //   },
// //   secondaryButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#F3F4F6',
// //     paddingHorizontal: 22,
// //     paddingVertical: 14,
// //     borderRadius: 12,
// //     borderWidth: 1,
// //     borderColor: '#E5E7EB',
// //   },
// //   secondaryButtonText: {
// //     color: '#1F2937',
// //     fontWeight: '700',
// //     fontSize: 15,
// //   },
// //   heroTrustRow: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     gap: 16,
// //     marginTop: 22,
// //   },
// //   heroTrustItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     gap: 6,
// //   },
// //   heroTrustText: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //     color: '#6B7280',
// //   },

// //   // --- QUICK STATS
// //   statsSection: {
// //     paddingBottom: 10,
// //   },
// //   statsCard: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#0B1F16',
// //     borderRadius: 18,
// //     paddingVertical: 22,
// //     paddingHorizontal: 16,
// //   },
// //   statItem: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   statValue: {
// //     fontSize: 24,
// //     fontWeight: '800',
// //     color: '#95F376',
// //   },
// //   statLabel: {
// //     fontSize: 11,
// //     color: '#9CA3AF',
// //     marginTop: 4,
// //     textAlign: 'center',
// //   },
// //   statDivider: {
// //     width: 1,
// //     height: 32,
// //     backgroundColor: 'rgba(255, 255, 255, 0.12)',
// //   },

// //   // --- FEATURE SECTION
// //   featuresSection: {
// //     minHeight: 300,
// //     paddingVertical: 50,
// //     backgroundColor: '#F9FAFB',
// //     borderTopWidth: 1,
// //     borderTopColor: '#F3F4F6',
// //     marginTop: 40,
// //   },
// //   sectionCategory: {
// //     fontSize: 12,
// //     fontWeight: '800',
// //     color: '#1aaa00',
// //     letterSpacing: 1.2,
// //     marginBottom: 8,
// //   },
// //   sectionTitle: {
// //     fontSize: 28,
// //     fontWeight: '800',
// //     color: '#111827',
// //     marginBottom: 30,
// //   },
// //   featuresGrid: {
// //     flexDirection: 'column',
// //     gap: 20,
// //   },
// //   featuresGridDesktop: {
// //     flexDirection: 'row',
// //     gap: 20,
// //   },
// //   featureCard: {
// //     flex: 1,
// //     backgroundColor: '#FFFFFF',
// //     padding: 24,
// //     borderRadius: 16,
// //     borderWidth: 1,
// //     borderColor: '#E5E7EB',
// //   },
// //   featureIconBox: {
// //     width: 48,
// //     height: 48,
// //     borderRadius: 12,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   featureCardTitle: {
// //     fontSize: 18,
// //     fontWeight: '700',
// //     color: '#111827',
// //     marginBottom: 8,
// //   },
// //   featureCardDesc: {
// //     fontSize: 14,
// //     color: '#4B5563',
// //     lineHeight: 21,
// //   },

// //   // --- FOOTER
// //   footer: {
// //     paddingVertical: 30,
// //     alignItems: 'center',
// //     borderTopWidth: 1,
// //     borderTopColor: '#E5E7EB',
// //     backgroundColor: '#FFFFFF',
// //   },
// //   footerText: {
// //     fontSize: 13,
// //     color: '#6B7280',
// //   },
// // });


// // newer
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Pressable,
//   Image,
//   useWindowDimensions,
//   Platform,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// const HERO_IMAGE = require('@/images/hero.jpg');

// export default function LandingScreen() {
//   const { width } = useWindowDimensions();
//   const isDesktop = width >= 768;

//   return (
//     <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
//       {/* Navbar */}
//       <View style={[styles.navbar, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
//         <View style={styles.brandContainer}>
//           <View>
//             <Text style={styles.brandText}>Money Manager</Text>
//             <Text style={styles.brandSubText}>Expense tracker</Text>
//           </View>
//         </View>

//         <Pressable
//           style={styles.navLaunchButton}
//           onPress={() => router.replace('/' as any)}
//         >
//           <Text style={styles.navLaunchButtonText}>Open App</Text>
//           <Ionicons name="arrow-forward" size={16} color="#FFFFFF" style={{ marginLeft: 6 }} />
//         </Pressable>
//       </View>

//       {/* Hero Section */}
//       <View style={[styles.heroSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
//         <View style={[styles.heroContent, isDesktop && styles.heroContentDesktop]}>
//           <View style={styles.pillBadge}>
//             <Text style={styles.pillBadgeText}>Private, offline-first expense tracking</Text>
//           </View>

//           <Text style={styles.heroTitle}>
//             Know where your money goes.
//             {'\n'}
//             <Text style={styles.heroTitleHighlight}>Every month.</Text>
//           </Text>

//           <Text style={styles.heroDescription}>
//             Log daily expenses, set monthly budgets, and browse a full year of spending
//             history. Money Manager keeps your finances organized — with everything stored
//             privately on your device.
//           </Text>

//           <View style={styles.heroButtonsRow}>
//             <Pressable
//               style={styles.primaryButton}
//               onPress={() => router.replace('/' as any)}
//             >
//               <Text style={styles.primaryButtonText}>Start Tracking Free</Text>
//               <Ionicons name="arrow-forward" size={18} color="#2e2d01" style={{ marginLeft: 8 }} />
//             </Pressable>

//             <Pressable
//               style={styles.secondaryButton}
//               onPress={() => router.replace('/monthly-expenses' as any)}
//             >
//               <Ionicons name="calendar-outline" size={18} color="#1F2937" style={{ marginRight: 8 }} />
//               <Text style={styles.secondaryButtonText}>Monthly Report</Text>
//             </Pressable>

//             <Pressable
//               style={styles.secondaryButton}
//               onPress={() => router.navigate('https://drive.google.com/file/d/1hgvogx96te_PFWREDEVsA9MonQcxkLPn/view?usp=drive_link' as any)}
//             >
//               <Ionicons name="download-outline" size={18} color="#1F2937" style={{ marginRight: 8 }} />
//               <Text style={styles.secondaryButtonText}>Download Android App</Text>
//             </Pressable>
//           </View>

//           <View style={styles.heroTrustRow}>
//             <View style={styles.heroTrustItem}>
//               <Ionicons name="checkmark-circle" size={15} color="#1aaa00" />
//               <Text style={styles.heroTrustText}>No account needed</Text>
//             </View>
//             <View style={styles.heroTrustItem}>
//               <Ionicons name="checkmark-circle" size={15} color="#1aaa00" />
//               <Text style={styles.heroTrustText}>Works offline</Text>
//             </View>
//           </View>
//         </View>

//         {/* Hero Image */}
//         <View
//           style={[
//             styles.heroImageContainer,
//             isDesktop && styles.heroImageContainerDesktop,
//           ]}
//         >
//           <Image source={HERO_IMAGE} style={styles.heroImage} resizeMode="cover" />
//         </View>
//       </View>

//       {/* Features Grid Section */}
//       <View style={[styles.featuresSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
//         <Text style={styles.sectionCategory}>BUILT FOR BETTER SPENDING</Text>
//         <Text style={styles.sectionTitle}>Everything you need to stay on budget</Text>

//         <View style={[styles.featuresGrid, isDesktop && styles.featuresGridDesktop]}>
//           {/* Feature 1 */}
//           <View style={styles.featureCard}>
//             <Text style={styles.featureCardTitle}>Monthly budgets</Text>
//             <Text style={styles.featureCardDesc}>
//               Set a spending limit for the month, then watch the progress bar show exactly
//               how much is left — or how far over budget you are.
//             </Text>
//           </View>

//           {/* Feature 2 */}
//           <View style={styles.featureCard}>
//             <Text style={styles.featureCardTitle}>13-month history</Text>
//             <Text style={styles.featureCardDesc}>
//               Switch between this month and the previous 12. Compare totals, spot trends,
//               and review past purchases month by month.
//             </Text>
//           </View>

//           {/* Feature 3 */}
//           <View style={styles.featureCard}>
//             <Text style={styles.featureCardTitle}>Private by design</Text>
//             <Text style={styles.featureCardDesc}>
//               Your expenses, budgets, and profile stay saved locally on your device.
//               No sign-up, no cloud sync, and no fuss.
//             </Text>
//           </View>
//         </View>
//       </View>

//       {/* NEW SECTION: How to Convert & Import Expenses via JSON */}
//       <View style={[styles.importSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
//         <Text style={styles.sectionCategory}>SEAMLESS MIGRATION</Text>
//         <Text style={styles.sectionTitle}>How to convert and import your expenses</Text>
//         <Text style={styles.importSubtitle}>
//           Have your historical financial data in a spreadsheet or another tool? You can effortlessly load your past records into Money Manager by formatting them into a standard JSON backup file.
//         </Text>

//         <View style={[styles.importStepsGrid, isDesktop && styles.importStepsGridDesktop]}>
//           {/* Step 1 */}
//           <View style={styles.importCard}>
//             <View style={styles.importStepBadge}>
//               <Text style={styles.importStepBadgeText}>01</Text>
//             </View>
//             <Text style={styles.importCardTitle}>Structure your data</Text>
//             <Text style={styles.importCardDesc}>
//               Organize each transaction with the required keys: <Text style={styles.codeText}>id</Text>, <Text style={styles.codeText}>title</Text>, <Text style={styles.codeText}>amount</Text> (number), <Text style={styles.codeText}>category</Text>, and <Text style={styles.codeText}>date</Text> (in <Text style={styles.codeText}>YYYY-MM-DD</Text> format).
//             </Text>
//           </View>

//           {/* Step 2 */}
//           <View style={styles.importCard}>
//             <View style={styles.importStepBadge}>
//               <Text style={styles.importStepBadgeText}>02</Text>
//             </View>
//             <Text style={styles.importCardTitle}>Wrap in JSON format</Text>
//             <Text style={styles.importCardDesc}>
//               Nest your array of expenses inside a <Text style={styles.codeText}>data.expenses</Text> property along with app metadata (<Text style={styles.codeText}>"app": "Money Manager"</Text>) for full parser compatibility.
//             </Text>
//           </View>

//           {/* Step 3 */}
//           <View style={styles.importCard}>
//             <View style={styles.importStepBadge}>
//               <Text style={styles.importStepBadgeText}>03</Text>
//             </View>
//             <Text style={styles.importCardTitle}>Import into the app</Text>
//             <Text style={styles.importCardDesc}>
//               Save your file as a <Text style={styles.codeText}>.json</Text> file and use the app's backup or import option in settings to upload it. Your complete history will populate instantly!
//             </Text>
//           </View>
//         </View>

//         {/* Code Example Box */}
//         <View style={styles.codeBoxContainer}>
//           <View style={styles.codeBoxHeader}>
//             <Ionicons name="code-slash" size={16} color="#95F376" />
//             <Text style={styles.codeBoxHeaderText}>Example JSON Backup Schema</Text>
//           </View>
//           <Text style={styles.codeBoxContent}>{`{
//   "app": "Money Manager",
//   "version": "2.0",
//   "data": {
//     "expenses": [
//       {
//         "id": "1793460547593",
//         "title": "Groceries",
//         "amount": 650.00,
//         "category": "Food",
//         "date": "2026-10-31"
//       },
//       {
//         "id": "1793460538617",
//         "title": "Haircut",
//         "amount": 100.00,
//         "category": "Shopping",
//         "date": "2026-10-31"
//       }
//     ],
//     "monthlyBudget": 1500
//   }
// }`}</Text>
//         </View>
//       </View>

//       {/* Footer */}
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>
//           © 2026 Money Manager. Built with React Native & Expo.
//         </Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContent: {
//     flexGrow: 1,
//   },

//   // --- NAVBAR
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//     backgroundColor: '#b4ff9b',
//   },
//   brandContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   brandText: {
//     fontSize: 19,
//     fontWeight: '800',
//     color: '#111827',
//   },
//   brandSubText: {
//     fontSize: 11,
//     fontWeight: '600',
//     color: '#6B7280',
//     letterSpacing: 0.4,
//     textTransform: 'uppercase',
//     marginTop: 1,
//   },
//   navLaunchButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#111827',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   navLaunchButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 14,
//   },

//   // --- HERO
//   heroSection: {
//     paddingVertical: 50,
//     flexDirection: 'column',
//     minHeight: 500,
//   },
//   heroContent: {
//     alignItems: 'flex-start',
//     marginBottom: 40,
//     marginTop: 20,
//   },
//   heroContentDesktop: {
//     maxWidth: '52%',
//     paddingRight: 20,
//     marginTop: 60,
//   },
//   heroImageContainer: {
//     width: '100%',
//     aspectRatio: 1.45,
//     borderRadius: 20,
//     overflow: 'hidden',
//     backgroundColor: '#F3F4F6',
//   },
//   heroImageContainerDesktop: {
//     position: 'absolute',
//     right: 60,
//     top: 50,
//     width: '40%',
//     height: 430,
//   },
//   heroImage: {
//     width: '100%',
//     height: '100%',
//   },
//   pillBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#DCFCE7',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//     marginBottom: 16,
//   },
//   pillBadgeText: {
//     color: '#15803D',
//     fontWeight: '700',
//     fontSize: 12,
//   },
//   heroTitle: {
//     fontSize: 38,
//     fontWeight: '900',
//     color: '#111827',
//     lineHeight: 46,
//     marginBottom: 16,
//   },
//   heroTitleHighlight: {
//     color: '#1aaa00',
//   },
//   heroDescription: {
//     fontSize: 16,
//     color: '#4B5563',
//     lineHeight: 25,
//     marginBottom: 24,
//     maxWidth: 560,
//   },
//   heroButtonsRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 12,
//   },
//   primaryButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#95f376',
//     paddingHorizontal: 22,
//     paddingVertical: 14,
//     borderRadius: 12,
//   },
//   primaryButtonText: {
//     color: '#2e2d01',
//     fontWeight: '700',
//     fontSize: 15,
//   },
//   secondaryButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F3F4F6',
//     paddingHorizontal: 22,
//     paddingVertical: 14,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//   },
//   secondaryButtonText: {
//     color: '#1F2937',
//     fontWeight: '700',
//     fontSize: 15,
//   },
//   heroTrustRow: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 16,
//     marginTop: 22,
//   },
//   heroTrustItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//   },
//   heroTrustText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#6B7280',
//   },

//   // --- FEATURE SECTION
//   featuresSection: {
//     minHeight: 300,
//     paddingVertical: 50,
//     backgroundColor: '#F9FAFB',
//     borderTopWidth: 1,
//     borderTopColor: '#F3F4F6',
//     marginTop: 40,
//   },
//   sectionCategory: {
//     fontSize: 12,
//     fontWeight: '800',
//     color: '#1aaa00',
//     letterSpacing: 1.2,
//     marginBottom: 8,
//   },
//   sectionTitle: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#111827',
//     marginBottom: 16,
//   },
//   featuresGrid: {
//     flexDirection: 'column',
//     gap: 20,
//     marginTop: 14,
//   },
//   featuresGridDesktop: {
//     flexDirection: 'row',
//     gap: 20,
//   },
//   featureCard: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     padding: 24,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//   },
//   featureCardTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#111827',
//     marginBottom: 8,
//   },
//   featureCardDesc: {
//     fontSize: 14,
//     color: '#4B5563',
//     lineHeight: 21,
//   },

//   // --- IMPORT GUIDE SECTION
//   importSection: {
//     paddingVertical: 60,
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#F3F4F6',
//   },
//   importSubtitle: {
//     fontSize: 15,
//     color: '#4B5563',
//     lineHeight: 24,
//     marginBottom: 36,
//     maxWidth: 700,
//   },
//   importStepsGrid: {
//     flexDirection: 'column',
//     gap: 20,
//     marginBottom: 30,
//   },
//   importStepsGridDesktop: {
//     flexDirection: 'row',
//     gap: 20,
//   },
//   importCard: {
//     flex: 1,
//     backgroundColor: '#F9FAFB',
//     padding: 24,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//   },
//   importStepBadge: {
//     width: 32,
//     height: 32,
//     borderRadius: 8,
//     backgroundColor: '#DCFCE7',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   importStepBadgeText: {
//     color: '#15803D',
//     fontWeight: '800',
//     fontSize: 13,
//   },
//   importCardTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#111827',
//     marginBottom: 8,
//   },
//   importCardDesc: {
//     fontSize: 14,
//     color: '#4B5563',
//     lineHeight: 21,
//   },
//   codeText: {
//     fontWeight: '700',
//     color: '#1F2937',
//     backgroundColor: '#E5E7EB',
//     paddingHorizontal: 4,
//     borderRadius: 4,
//   },
//   codeBoxContainer: {
//     backgroundColor: '#0B1F16',
//     borderRadius: 16,
//     padding: 20,
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: 'rgba(149, 243, 118, 0.2)',
//   },
//   codeBoxHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     marginBottom: 12,
//   },
//   codeBoxHeaderText: {
//     color: '#95F376',
//     fontWeight: '700',
//     fontSize: 13,
//   },
//   codeBoxContent: {
//     fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
//     color: '#E5E7EB',
//     fontSize: 12,
//     lineHeight: 18,
//   },

//   // --- FOOTER
//   footer: {
//     paddingVertical: 30,
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#E5E7EB',
//     backgroundColor: '#FFFFFF',
//   },
//   footerText: {
//     fontSize: 13,
//     color: '#6B7280',
//   },
// });



// newer2
import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

const HERO_IMAGE = require('@/images/hero.jpg');

const CHATBOT_PROMPT = `You are a data transformation assistant for "Money Manager", an offline-first React Native expense tracking app.

Your task is to convert the attached spreadsheet data (e.g., Excel/XLSX/CSV) or raw text into a valid JSON backup file that matches the exact schema and keys of the app's official JSON format.

### 📋 Rules & Constraints:
1. DO NOT add any extra root keys or custom fields to individual expense objects. Every expense entry must only use these exact keys:
   - "id": string (e.g., unique timestamp or sequential string)
   - "title": string (the description of the expense)
   - "amount": number (numeric value, formatted to 2 decimal places where appropriate)
   - "category": string (must be one of: "Food", "Transport", "Bills", "Shopping", "Entertainment", "Health")
   - "date": string in strict "YYYY-MM-DD" format

2. The final JSON output structure must follow this exact top-level wrapper:
{
  "app": "Money Manager",
  "version": "2.0",
  "exportDate": "[Current ISO Timestamp]",
  "data": {
    "expenses": [ ...array of formatted expense objects... ],
    "monthlyDummySeeded": true,
    "notes": [ ... ],
    "monthlyBudget": 1500,
    "profile": { ... }
  }
}

3. If categories are missing or unspecified in the source file, infer the most logical category from the transaction description using the allowed categories list ("Food", "Transport", "Bills", "Shopping", "Entertainment", "Health").
4. Output ONLY valid JSON code inside a code block without any conversational filler or markdown explanations outside the code block.`;

export default function LandingScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const params = useLocalSearchParams();
  const [importSectionY, setImportSectionY] = useState(0);

  // Listen for query params when navigating to this page
  useEffect(() => {
    if (params.scrollTo === 'import' && importSectionY > 0) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ y: importSectionY, animated: true });
      }, 150); // slight delay to ensure layout is ready
    }
  }, [params.scrollTo, importSectionY]);
  // ------------------------------

  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyPrompt = () => {
    if (Platform.OS === 'web' && typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(CHATBOT_PROMPT);
    }
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  return (
    // <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>

      <ScrollView 
        style={styles.container}
         ref={scrollViewRef} 
         contentContainerStyle={styles.scrollContent}>

      {/* Navbar */}
      <View style={[styles.navbar, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
        <View style={styles.brandContainer}>
          <View>
            <Text style={styles.brandText}>Money Manager</Text>
            <Text style={styles.brandSubText}>Expense tracker</Text>
          </View>
        </View>

        <Pressable
          style={styles.navLaunchButton}
          onPress={() => router.replace('/' as any)}
        >
          <Text style={styles.navLaunchButtonText}>Go to App</Text>
          <Ionicons name="arrow-forward" size={16} color="#FFFFFF" style={{ marginLeft: 6 }} />
        </Pressable>
      </View>

      {/* Hero Section */}
      <View style={[styles.heroSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
        <View style={[styles.heroContent, isDesktop && styles.heroContentDesktop]}>
          <View style={styles.pillBadge}>
            <Text style={styles.pillBadgeText}>Private, offline-first expense tracking</Text>
          </View>

          <Text style={styles.heroTitle}>
            Know where your money goes.
            {'\n'}
            <Text style={styles.heroTitleHighlight}>Every month.</Text>
          </Text>

          <Text style={styles.heroDescription}>
            Log daily expenses, set monthly budgets, and browse a full year of spending
            history. Money Manager keeps your finances organized — with everything stored
            privately on your device.
          </Text>

          <View style={styles.heroButtonsRow}>
            <Pressable
              style={styles.primaryButton}
              onPress={() => router.replace('/' as any)}
            >
              <Text style={styles.primaryButtonText}>Start Tracking Free</Text>
              <Ionicons name="arrow-forward" size={18} color="#2e2d01" style={{ marginLeft: 8 }} />
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={() => router.replace('/monthly-expenses' as any)}
            >
              <Ionicons name="calendar-outline" size={18} color="#1F2937" style={{ marginRight: 8 }} />
              <Text style={styles.secondaryButtonText}>Monthly Report</Text>
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={() =>
                router.navigate(
                  // 'https://drive.google.com/file/d/1hgvogx96te_PFWREDEVsA9MonQcxkLPn/view?usp=drive_link' as any
                  'https://github.com/ammaar0x01/react_native_money_manager/releases/tag/release-v1-0-0' as any 
                )
              }
            >
              <Ionicons name="download-outline" size={18} color="#1F2937" style={{ marginRight: 8 }} />
              <Text style={styles.secondaryButtonText}>Download Android App</Text>
            </Pressable>
          </View>

          <View style={styles.heroTrustRow}>
            <View style={styles.heroTrustItem}>
              <Ionicons name="checkmark-circle" size={15} color="#1aaa00" />
              <Text style={styles.heroTrustText}>No account needed</Text>
            </View>
            <View style={styles.heroTrustItem}>
              <Ionicons name="checkmark-circle" size={15} color="#1aaa00" />
              <Text style={styles.heroTrustText}>Works offline</Text>
            </View>
          </View>
        </View>

        {/* Hero Image */}
        <View
          style={[
            styles.heroImageContainer,
            isDesktop && styles.heroImageContainerDesktop,
          ]}
        >
          <Image source={HERO_IMAGE} style={styles.heroImage} resizeMode="cover" />
        </View>
      </View>

      {/* Features Grid Section */}
      <View style={[styles.featuresSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
        <Text style={styles.sectionCategory}>BUILT FOR BETTER SPENDING</Text>
        <Text style={styles.sectionTitle}>Everything you need to stay on budget</Text>

        <View style={[styles.featuresGrid, isDesktop && styles.featuresGridDesktop]}>
          {/* Feature 1 */}
          <View style={styles.featureCard}>
            <Text style={styles.featureCardTitle}>Monthly budgets</Text>
            <Text style={styles.featureCardDesc}>
              Set a spending limit for the month, then watch the progress bar show exactly
              how much is left — or how far over budget you are.
            </Text>
          </View>

          {/* Feature 2 */}
          <View style={styles.featureCard}>
            <Text style={styles.featureCardTitle}>13-month history</Text>
            <Text style={styles.featureCardDesc}>
              Switch between this month and the previous 12. Compare totals, spot trends,
              and review past purchases month by month.
            </Text>
          </View>

          {/* Feature 3 */}
          <View style={styles.featureCard}>
            <Text style={styles.featureCardTitle}>Private by design</Text>
            <Text style={styles.featureCardDesc}>
              Your expenses, budgets, and profile stay saved locally on your device.
              No sign-up, no cloud sync, and no fuss.
            </Text>
          </View>
        </View>
      </View>


      {/* ---------------- */}
{/* Import Section
      <View 
        onLayout={(event) => {
          // Capture the exact vertical pixel position of this section
          setImportSectionY(event.nativeEvent.layout.y);
        }}
        style={[styles.importSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}
      >
        <Text style={styles.sectionCategory}>SEAMLESS MIGRATION</Text>
        <Text style={styles.sectionTitle}>How to convert and import your expenses</Text>
  </View>  */}
          
      {/* SECTION: How to Convert & Import Expenses via JSON */}
      <View 
      onLayout={(event) => {
          setImportSectionY(event.nativeEvent.layout.y);
        }}
      style={[styles.importSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
        
        <Text style={styles.sectionCategory}>SEAMLESS MIGRATION</Text>
        <Text style={styles.sectionTitle}>How to convert and import your expenses</Text>
        <Text style={styles.importSubtitle}>
          Have historical financial data in a spreadsheet, CSV, or another app? You can effortlessly load your past records into Money Manager by formatting them into a standard JSON backup file.
        </Text>

        <View style={[styles.importStepsGrid, isDesktop && styles.importStepsGridDesktop]}>
          {/* Step 1 */}
          <View style={styles.importCard}>
            <View style={styles.importStepBadge}>
              <Text style={styles.importStepBadgeText}>01</Text>
            </View>
            <Text style={styles.importCardTitle}>Structure your data</Text>
            <Text style={styles.importCardDesc}>
              Organize each transaction with the required keys: <Text style={styles.codeText}>id</Text>, <Text style={styles.codeText}>title</Text>, <Text style={styles.codeText}>amount</Text> (number), <Text style={styles.codeText}>category</Text>, and <Text style={styles.codeText}>date</Text> (in <Text style={styles.codeText}>YYYY-MM-DD</Text> format).
            </Text>
          </View>

          {/* Step 2 */}
          <View style={styles.importCard}>
            <View style={styles.importStepBadge}>
              <Text style={styles.importStepBadgeText}>02</Text>
            </View>
            <Text style={styles.importCardTitle}>Wrap in JSON format</Text>
            <Text style={styles.importCardDesc}>
              Nest your array of expenses inside a <Text style={styles.codeText}>data.expenses</Text> property along with app metadata (<Text style={styles.codeText}>"app": "Money Manager"</Text>) for full parser compatibility.
            </Text>
          </View>

          {/* Step 3 */}
          <View style={styles.importCard}>
            <View style={styles.importStepBadge}>
              <Text style={styles.importStepBadgeText}>03</Text>
            </View>
            <Text style={styles.importCardTitle}>Import into the app</Text>
            <Text style={styles.importCardDesc}>
              Save your file as a <Text style={styles.codeText}>.json</Text> file and use the app's backup or import option in settings to upload it. Your complete history will populate instantly!
            </Text>
          </View>
        </View>

        {/* Code Example Box */}
        <View style={styles.codeBoxContainer}>
          <View style={styles.codeBoxHeader}>
            <Ionicons name="code-slash" size={16} color="#95F376" />
            <Text style={styles.codeBoxHeaderText}>Example JSON Backup Schema</Text>
          </View>
          <Text style={styles.codeBoxContent}>{`{
  "app": "Money Manager",
  "version": "2.0",
  "data": {
    "expenses": [
      {
        "id": "1793460547593",
        "title": "Groceries",
        "amount": 650.00,
        "category": "Food",
        "date": "2026-10-31"
      },
      {
        "id": "1793460538617",
        "title": "Haircut",
        "amount": 100.00,
        "category": "Shopping",
        "date": "2026-10-31"
      }
    ],
    "monthlyBudget": 1500
  }
}`}</Text>
        </View>

        {/* Chatbot Conversion Prompt with Copy Button */}
        <View style={styles.promptContainer}>
          <View style={styles.promptHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              {/* <Ionicons name="sparkles" size={18} color="#15803D" /> */}
              
              <Text style={styles.promptHeaderTitle}>AI Chatbot Conversion Prompt</Text>
            </View>
          
          </View>
  <Pressable
              style={[
                styles.copyButton,
                copiedPrompt && styles.copyButtonActive,
              ]}
              onPress={handleCopyPrompt}
            >
              <Ionicons
                name={copiedPrompt ? 'checkmark' : 'copy-outline'}
                size={14}
                color={copiedPrompt ? '#FFFFFF' : '#111827'}
              />
              <Text style={[styles.copyButtonText, copiedPrompt && styles.copyButtonTextActive]}>
                {copiedPrompt ? 'Copied!' : 'Copy Prompt'}
              </Text>
            </Pressable>


          <Text style={styles.promptSubtitle}>
            Copy and paste this prompt into ChatGPT, Claude, or Gemini along with your Excel / CSV file to instantly convert your spreadsheets into valid app JSON format.
          </Text>

          <View style={styles.promptCodeBox}>
            <Text style={styles.promptCodeText}>{CHATBOT_PROMPT}</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 Money Manager. Built with React Native & Expo.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },

  // --- NAVBAR
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#b4ff9b',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 19,
    fontWeight: '800',
    color: '#111827',
  },
  brandSubText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    marginTop: 1,
  },
  navLaunchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  navLaunchButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  // --- HERO
  heroSection: {
    paddingVertical: 50,
    flexDirection: 'column',
    minHeight: 500,
  },
  heroContent: {
    alignItems: 'flex-start',
    marginBottom: 40,
    marginTop: 20,
  },
  heroContentDesktop: {
    maxWidth: '52%',
    paddingRight: 20,
    marginTop: 60,
  },
  heroImageContainer: {
    width: '100%',
    aspectRatio: 1.45,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
  },
  heroImageContainerDesktop: {
    position: 'absolute',
    right: 60,
    top: 50,
    width: '40%',
    height: 430,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  pillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  pillBadgeText: {
    color: '#15803D',
    fontWeight: '700',
    fontSize: 12,
  },
  heroTitle: {
    fontSize: 38,
    fontWeight: '900',
    color: '#111827',
    lineHeight: 46,
    marginBottom: 16,
  },
  heroTitleHighlight: {
    color: '#1aaa00',
  },
  heroDescription: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 25,
    marginBottom: 24,
    maxWidth: 560,
  },
  heroButtonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#95f376',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: '#2e2d01',
    fontWeight: '700',
    fontSize: 15,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  secondaryButtonText: {
    color: '#1F2937',
    fontWeight: '700',
    fontSize: 15,
  },
  heroTrustRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 22,
  },
  heroTrustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heroTrustText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },

  // --- FEATURE SECTION
  featuresSection: {
    minHeight: 300,
    paddingVertical: 50,
    backgroundColor: '#F9FAFB',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    marginTop: 40,
  },
  sectionCategory: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1aaa00',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
  },
  featuresGrid: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 14,
  },
  featuresGridDesktop: {
    flexDirection: 'row',
    gap: 20,
  },
  featureCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  featureCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  featureCardDesc: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 21,
  },

  // --- IMPORT GUIDE SECTION
  importSection: {
    paddingVertical: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  importSubtitle: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
    marginBottom: 36,
    maxWidth: 700,
  },
  importStepsGrid: {
    flexDirection: 'column',
    gap: 20,
    marginBottom: 30,
  },
  importStepsGridDesktop: {
    flexDirection: 'row',
    gap: 20,
  },
  importCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  importStepBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  importStepBadgeText: {
    color: '#15803D',
    fontWeight: '800',
    fontSize: 13,
  },
  importCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  importCardDesc: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 21,
  },
  codeText: {
    fontWeight: '700',
    color: '#1F2937',
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  codeBoxContainer: {
    backgroundColor: '#0B1F16',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(149, 243, 118, 0.2)',
  },
  codeBoxHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  codeBoxHeaderText: {
    color: '#95F376',
    fontWeight: '700',
    fontSize: 13,
  },
  codeBoxContent: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: '#E5E7EB',
    fontSize: 12,
    lineHeight: 18,
  },

  // --- PROMPT SECTION
  promptContainer: {
    marginTop: 40,
    backgroundColor: '#F0FDF4',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#DCFCE7',
  },
  promptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  promptHeaderTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  promptSubtitle: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 16,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFFFFF',
    maxWidth: 140, 

    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginBottom: 20, 
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  copyButtonActive: {
    backgroundColor: '#16A34A',
    borderColor: '#16A34A',
  },
  copyButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111827',
  },
  copyButtonTextActive: {
    color: '#FFFFFF',
  },
  promptCodeBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  promptCodeText: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontSize: 12,
    color: '#374151',
    lineHeight: 18,
  },

  // --- FOOTER
  footer: {
    paddingVertical: 30,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  footerText: {
    fontSize: 13,
    color: '#6B7280',
  },
});

