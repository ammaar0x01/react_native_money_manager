// import React, { useEffect, useState } from "react";
// import {
//   Tabs,
//   ThemeProvider,
//   DarkTheme,
//   DefaultTheme,
//   useRouter,
//   usePathname,
// } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
// import {
//   useColorScheme,
//   Platform,
//   useWindowDimensions,
//   View,
//   TouchableOpacity,
//   Text,
//   Pressable,
//   TextInput,
// } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
// import { useFonts } from "expo-font";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// // ----------------------------------

// import { AnimatedSplashOverlay } from "@/components/animated-icon";
// import { STORAGE_KEYS } from "@/constants/storage";
// import { stylesLayout as styles } from "../_layout.styles";
// // import '@/global.css';
// // ----------------------------------

// SplashScreen.preventAutoHideAsync();

// interface NavItemProps {
//   icon: React.ReactNode;
//   label: string;
//   path: string;
//   activePath: string;
//   onPress: () => void;
// }

// // backgroundColor: '#95f376',

// function SidebarIcon({ icon, label, path, activePath, onPress }: NavItemProps) {
//   const [hovered, setHovered] = useState(false);
//   const isActive = activePath === path;

//   return (
//     <View style={{ position: "relative", alignItems: "center" }}>
//       <Pressable
//         onPress={onPress}
//         onHoverIn={() => setHovered(true)}
//         onHoverOut={() => setHovered(false)}
//         style={({ pressed }) => [
//           {
//             padding: 10,
//             borderRadius: 12,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: pressed
//               ? "rgba(255, 255, 255, 0.25)"
//               : hovered
//                 ? "rgba(255, 255, 255, 0.15)"
//                 : isActive
//                   ? "rgba(255, 255, 255, 0.1)"
//                   : "transparent",
//           },
//         ]}
//       >
//         {icon}
//       </Pressable>

//       {hovered && (
//         <View
//           style={{
//             position: "absolute",
//             left: 70,
//             top: "50%",
//             transform: [{ translateY: -14 }],
//             backgroundColor: "#1f2937",
//             paddingHorizontal: 8,
//             paddingVertical: 4,
//             borderRadius: 6,
//             zIndex: 100,
//             shadowColor: "#000",
//             shadowOffset: { width: 0, height: 2 },
//             shadowOpacity: 0.2,
//             shadowRadius: 3,
//           }}
//         >
//           <Text style={{ color: "#ffffff", fontSize: 12, fontWeight: "600" }}>
//             {label}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }

// export default function Layout() {
//   const colorScheme = useColorScheme();
//   const insets = useSafeAreaInsets();
//   const { width } = useWindowDimensions();
//   const router = useRouter();
//   const pathname = usePathname();

//   const islandingPage = pathname === "/landing";

//   // const isLoginScreen = pathname === '/login';
//   // const isLoginScreen1 = pathname === '/login1';
//   // const isSignUpScreen = pathname === '/signup';
//   // const isForgotPassword = pathname === '/forgot-password'

//   const isWeb = Platform.OS === "web";
//   const isDesktop = isWeb && width >= 768;
//   const isWebMobile = isWeb && width < 768;
//   const isMobileApp = !isWeb; // Native iOS / Android app version

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   // const [isSearching, setIsSearching] = useState(false);
//   // const [searchQuery, setSearchQuery] = useState("");

//   const bottomPadding = isWeb ? 8 : Math.max(insets.bottom, 12);
//   const totalBarHeight = 60 + bottomPadding;

//   // Record the first time the app was opened, for the profile page.
//   useEffect(() => {
//     const recordFirstUse = async () => {
//       try {
//         const firstUsed = await AsyncStorage.getItem(STORAGE_KEYS.firstUsed);
//         if (!firstUsed) {
//           await AsyncStorage.setItem(
//             STORAGE_KEYS.firstUsed,
//             new Date().toISOString(),
//           );
//         }
//       } catch (error) {
//         console.error("Failed to record first use date", error);
//       }
//     };

//     recordFirstUse();
//   }, []);

//   // --- Sidebar items for desktop web navigation
//   const sidebarNavItems = [
//     {
//       label: "Expenses",
//       path: "/",
//       icon: <Ionicons name="wallet-outline" size={24} color="white" />,
//     },
//     // { label: 'Expenses', path: '/expenses', icon: <Ionicons name="wallet-outline" size={24} color="white" /> },
//     {
//       label: "Monthly",
//       path: "/monthly-expenses",
//       icon: <Ionicons name="calendar-outline" size={24} color="white" />,
//     },
//     {
//       label: "Notes",
//       path: "/notes",
//       icon: <Ionicons name="document-text-outline" size={24} color="white" />,
//     },
//     {
//       label: "Profile",
//       path: "/profile",
//       icon: <Ionicons name="person-circle-outline" size={24} color="white" />,
//     },
//     {
//       label: "Settings",
//       path: "/settings",
//       icon: <Ionicons name="settings-outline" size={24} color="white" />,
//     },
//   ];

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <AnimatedSplashOverlay />

//       <View style={{ flex: 1, width: "100%", height: "100%" }}>
      
//         {/* Phone App Top Header (Native app only) */}
//         {isMobileApp && (
//           <View
//             style={[
//               styles.mobileTopBar,
//               { paddingTop: Math.max(insets.top, 12) },
//             ]}
//           >
//             <View style={styles.topBarDefaultContainer}>
//               <View>
//                 {/* <Text style={styles.brandSub}>The</Text>
//                   <Text style={styles.brandMain}>PawnShop</Text> */}

//                 {/* <Text style={styles.brandSub}>Money Manager</Text> */}
//                 <Text style={styles.brandMain}>Money Manager</Text>
//               </View>

//               <View style={styles.topBarIconsRow}>
//                 <TouchableOpacity
//                   // onPress={() => setIsSearching(true)}
//                   onPress={() => router.push("/settings" as any)}
//                   style={styles.iconButton}
//                 >
//                   <Ionicons name="settings-outline" size={24} color="white" />
//                 </TouchableOpacity>

//                 {/* <TouchableOpacity
//                     onPress={() => router.push('/cart' as any)}
//                     style={styles.iconButton}
//                   >
//                     <Ionicons name="cart-outline" size={24} color="white" />
//                   </TouchableOpacity> */}
//               </View>
//             </View>
//             {/* )} */}
//           </View>
//         )}

//         {/* Web Mobile Top Bar */}
//         {isWebMobile && !islandingPage && (
//           // !isAboutPage && !isLoginScreen && !isLoginScreen1 && !isSignUpScreen && !isForgotPassword
//           <View
//             style={{
//               backgroundColor: "#000000",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//               paddingHorizontal: 20,
//               paddingVertical: 14,
//               zIndex: 50,
//             }}
//           >
//             {/* <View style={{ backgroundColor: '#95f376', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14, zIndex: 50 }}> */}

//             {/* <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 18 }}>Money Manager</Text> */}
//             {/* <Text style={{ color: '#95f376', fontWeight: '700', fontSize: 18 }}>Money Manager</Text> */}

//             <TouchableOpacity
//               // onPress={() => setIsSearching(true)}
//               onPress={() => { 
//                 router.push("/landing" as any)
//                 // setMobileMenuOpen(!mobileMenuOpen)
//                 setMobileMenuOpen(false)

//               }}
//               // onPress={() => setMobileMenuOpen(!mobileMenuOpen)}

//               style={styles.iconButton}
//             >
//               {/* <Ionicons name="settings-outline" size={24} color="white" /> */}

//               {/* <Text style={styles.brandMain}>Money Manager</Text> */}
//               <Text
//                 style={{ color: "#95f376", fontWeight: "700", fontSize: 18 }}
//               >
//                 Money Manager
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
//               style={{ padding: 4 }}
//             >
//               <Ionicons
//                 name={mobileMenuOpen ? "close" : "menu"}
//                 size={28}
//                 color="white"
//               />
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Web Mobile Dropdown Menu */}
//         {isWebMobile && mobileMenuOpen && (
//           <View
//             style={{
//               backgroundColor: "#0a0a0a",
//               paddingHorizontal: 24,
//               paddingVertical: 16,
//               borderBottomWidth: 1,
//               borderBottomColor: "#222222",
//               zIndex: 40,
//             }}
//           >
//             {sidebarNavItems.map((item) => (
//               <TouchableOpacity
//                 key={item.path}
//                 onPress={() => {
//                   router.push(item.path as any);
//                   setMobileMenuOpen(false);
//                 }}
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   paddingVertical: 12,
//                 }}
//               >
//                 {item.icon}
//                 <Text
//                   style={{
//                     color: "white",
//                     fontWeight: "600",
//                     marginLeft: 16,
//                     fontSize: 15,
//                   }}
//                 >
//                   {item.label}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         <View
//           style={{
//             flex: 1,
//             flexDirection: "row",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "#E59400",
//           }}
//         >
//           {/* Desktop Web Sidebar */}
//           {isDesktop && !islandingPage && (
//             // && !isAboutPage && !isLoginScreen && !isLoginScreen1 && !isSignUpScreen && !isForgotPassword
//             <View
//               style={{
//                 width: 76,
//                 backgroundColor: "#000000",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 paddingVertical: 28,
//                 paddingHorizontal: 8,
//                 zIndex: 50,
//                 height: "100%",
//               }}
//             >
//               <View
//                 style={{
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: 18,
//                 }}
//               >
//                 {sidebarNavItems.map((item) => (
//                   <SidebarIcon
//                     key={item.path}
//                     icon={item.icon}
//                     label={item.label}
//                     path={item.path}
//                     activePath={pathname}
//                     onPress={() => router.push(item.path as any)}
//                   />
//                 ))}
//               </View>

//               <TouchableOpacity
//                 // onPress={() => router.back()}
//                 onPress={() => router.push("/landing" as any)}
//                 style={{ padding: 10, borderRadius: 12 }}
//               >
//                 <Octicons name="arrow-left" size={22} color="white" />
//               </TouchableOpacity>

//               {/* <TouchableOpacity onPress={() => router.push('/about' as any)} style={{ padding: 10, borderRadius: 12 }}>
//       <Octicons name="arrow-left" size={22} color="white" />
//     </TouchableOpacity> */}
//             </View>
//           )}

//           {/* === BOTTOM NAVBAR FOR MOBILE APP VERSION === */}
//           {/* Screen Content Wrapper with 4 Main Tabs */}
//           <View
//             style={{
//               flex: 1,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "#E59400",
//             }}
//           >
//             <Tabs
//               screenOptions={{
//                 headerShown: false,
//                 tabBarActiveTintColor: "#FFFFFF",
//                 tabBarInactiveTintColor: "#FFEECB",
//                 tabBarStyle: isWeb
//                   ? { display: "none" }
//                   : {
//                       backgroundColor: "#0e0900",
//                       borderTopWidth: 0,
//                       height: totalBarHeight,
//                       paddingBottom: bottomPadding,
//                       paddingTop: 8,
//                       position: "absolute",
//                       bottom: 0,
//                       left: 0,
//                       right: 0,
//                       elevation: 8,
//                     },
//                 sceneStyle: {
//                   backgroundColor: "#E59400",
//                   paddingTop: isMobileApp ? 65 : 0,
//                   // paddingBottom: 0, // 🚀 Changed from totalBarHeight to 0 to remove the white gap
//                   paddingBottom: isWeb ? 0 : totalBarHeight,
//                 },
//               }}
//             >
//               <Tabs.Screen
//                 name="(tabs)/index"
//                 options={{
//                   title: "Expenses",
//                   tabBarIcon: ({ color }) => (
//                     <Ionicons name="home-outline" size={24} color={color} />
//                     // <Ionicons name="wallet-outline" size={24} color={color} />
//                   ),
//                 }}
//               />

//               <Tabs.Screen
//                 name="(tabs)/monthly-expenses"
//                 options={{
//                   title: "Monthly",
//                   tabBarIcon: ({ color }) => (
//                     <Ionicons name="calendar-outline" size={24} color={color} />
//                   ),
//                 }}
//               />

//               <Tabs.Screen
//                 name="(tabs)/notes"
//                 options={{
//                   title: "Notes",
//                   tabBarIcon: ({ color }) => (
//                     <Ionicons
//                       name="document-text-outline"
//                       size={24}
//                       color={color}
//                     />
//                   ),
//                 }}
//               />

//               <Tabs.Screen
//                 name="(tabs)/profile"
//                 options={{
//                   title: "Profile",
//                   tabBarIcon: ({ color }) => (
//                     <Ionicons
//                       name="person-circle-outline"
//                       size={24}
//                       color={color}
//                     />
//                   ),
//                 }}
//                 />

//                   <Tabs.Screen
//                 name="(tabs)/settings"
//                 options={{
//                   title: "Settings",
//                   tabBarIcon: ({ color }) => (
//                     <Ionicons
//                       name="settings-outline"
//                       size={24}
//                       color={color}
//                     />
//                   ),
//                 }}
//               />

//               {/* === Hidden auxiliary screens so they don't generate bottom tab buttons */}
//               <Tabs.Screen name="landing" options={{ href: null }} />
//               {/* <Tabs.Screen name="settings" options={{ href: null }} />  */}
//             </Tabs>
//           </View>
//         </View>
//       </View>
//     </ThemeProvider>
//   );
// }
