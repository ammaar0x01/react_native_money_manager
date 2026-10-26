// // import React, { useRef, useState } from "react";
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   TextInput,
// //   Pressable,
// //   StyleSheet,
// //   Linking,
// //   useWindowDimensions,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import { router } from "expo-router";
// // // -----------------------------------

// // import { stylesLanding as styles } from "@/styles/landing.styles";
// // // -----------------------------------


// // const CATEGORIES = [
// //   "Jewellery",
// //   "Computers",
// //   "Appliances",
// //   "Gaming",
// //   "Hair",
// //   "Gold",
// //   "Promotions",
// //   "Best Prices",
// //   "Phones",
// //   "TVs",
// // ];

// // export type SocialPlatform =
// //   | "email"
// //   | "facebook"
// //   | "instagram"
// //   | "twitter"
// //   | "youtube";

// // const SOCIAL_URLS: Record<SocialPlatform, string> = {
// //   email: "mailto:support@thepawnshop.co.za",
// //   facebook: "https://www.facebook.com",
// //   instagram: "https://www.instagram.com",
// //   twitter: "https://www.twitter.com",
// //   youtube: "https://www.youtube.com",
// // };

// // export default function LandingView() {
// //   const { width } = useWindowDimensions();
// //   const isSmallScreen = width < 768;
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const scrollViewRef = useRef<ScrollView>(null);

// //   // Contact form state
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [message, setMessage] = useState("");

// //   // Search input focus states
// //   const [focusedInput, setFocusedInput] = useState<"product" | "store" | null>(
// //     null,
// //   );

// //   // Hover states for web interactivity
// //   const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
// //   const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
// //   const [hoveredFooterLink, setHoveredFooterLink] = useState<string | null>(
// //     null,
// //   );
// //   const [isSearchHovered, setIsSearchHovered] = useState(false);
// //   const [isSubmitHovered, setIsSubmitHovered] = useState(false);
// //   const [isTopHovered, setIsTopHovered] = useState(false);

// //   // Responsive category grid column sizing
// //   let categoryChipWidth = "48%"; // 2 columns for mobile
// //   if (width >= 1024) {
// //     categoryChipWidth = "23%"; // 4 columns for desktop
// //   } else if (width >= 768) {
// //     categoryChipWidth = "31%"; // 3 columns for tablet
// //   }

// //   const handleSocialPress = (platform: SocialPlatform) => {
// //     Linking.openURL(SOCIAL_URLS[platform]);
// //   };

// //   const handleSendMessage = () => {
// //     if (!email || !message) {
// //       alert("Please fill in your email and message.");
// //       return;
// //     }
// //     alert("Your message has been sent successfully!");
// //     setEmail("");
// //     setPhone("");
// //     setMessage("");
// //   };

// //   const scrollToTop = () => {
// //     scrollViewRef.current?.scrollTo({ y: 0, animated: true });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       {/* Sticky Top Navbar */}
// //       <View style={styles.stickyNavBar}>
// //         {isSmallScreen ? (
// //           <View style={styles.mobileNavRow}>
// //             <Text style={styles.navBrand}>
// //               The <Text style={styles.brandAccent}>PawnShop</Text>
// //             </Text>
// //             <Pressable
// //               onPress={() => setMenuOpen(!menuOpen)}
// //               style={styles.hamburgerBtn}
// //             >
// //               <Ionicons
// //                 name={menuOpen ? "close" : "menu"}
// //                 size={26}
// //                 color="#FFFFFF"
// //               />
// //             </Pressable>
// //           </View>
// //         ) : (
// //           <View style={styles.desktopNavContainer}>
// //             <Text style={styles.navBrand}>
// //               The <Text style={styles.brandAccent}>PawnShop</Text>
// //             </Text>
// //             <View style={styles.navLinksRight}>
// //               <Pressable onPress={() => router.push("/" as any)}>
// //                 <Text style={styles.navLink}>Home</Text>
// //               </Pressable>
// //               <Pressable onPress={() => router.push("/stores" as any)}>
// //                 <Text style={styles.navLink}>All Stores</Text>
// //               </Pressable>
// //               <Pressable onPress={() => router.push("/sell" as any)}>
// //                 <Text style={styles.navLink}>Sell</Text>
// //               </Pressable>
// //               <Pressable onPress={() => router.push("/cart" as any)}>
// //                 <Text style={styles.navLink}>Cart</Text>
// //               </Pressable>
// //               {/* <Pressable onPress={() => router.push('/pings' as any)}>
// //                 <Text style={styles.navLink}>Pings</Text>
// //               </Pressable> */}
// //               <Pressable onPress={() => router.push("/(auth)/signup" as any)}>
// //                 <Text style={styles.navLinkAccent}>Sign Up</Text>
// //               </Pressable>
// //                 <Pressable onPress={() => router.push("/(auth)/login" as any)}>
// //                 <Text style={styles.navLinkAccent}>Log In</Text>
// //               </Pressable>
// //             </View>
// //           </View>
// //         )}
// //       </View>

// //       {/* Collapsible Mobile Menu Dropdown */}
// //       {isSmallScreen && menuOpen && (
// //         <View style={styles.mobileDropdownMenu}>
// //           <Pressable
// //             onPress={() => {
// //               router.push("/" as any);
// //               setMenuOpen(false);
// //             }}
// //             style={styles.dropdownItem}
// //           >
// //             <Text style={styles.dropdownText}>Home</Text>
// //           </Pressable>
// //           <Pressable
// //             onPress={() => {
// //               router.push("/stores" as any);
// //               setMenuOpen(false);
// //             }}
// //             style={styles.dropdownItem}
// //           >
// //             <Text style={styles.dropdownText}>All Stores</Text>
// //           </Pressable>
// //           <Pressable
// //             onPress={() => {
// //               router.push("/sell" as any);
// //               setMenuOpen(false);
// //             }}
// //             style={styles.dropdownItem}
// //           >
// //             <Text style={styles.dropdownText}>Sell</Text>
// //           </Pressable>
// //           <Pressable
// //             onPress={() => {
// //               router.push("/cart" as any);
// //               setMenuOpen(false);
// //             }}
// //             style={styles.dropdownItem}
// //           >
// //             <Text style={styles.dropdownText}>Cart</Text>
// //           </Pressable>
// //           {/* <Pressable onPress={() => { router.push('/pings' as any); setMenuOpen(false); }} style={styles.dropdownItem}>
// //             <Text style={styles.dropdownText}>Pings</Text>
// //           </Pressable> */}
// //           <Pressable
// //             onPress={() => {
// //               router.push("/(auth)/signup" as any);
// //               setMenuOpen(false);
// //             }}
// //             style={styles.dropdownItem}
// //           >
// //             <Text style={styles.dropdownTextAccent}>Sign Up</Text>
// //           </Pressable>
// //                 <Pressable
// //             onPress={() => {
// //               router.push("/(auth)/login" as any);
// //               setMenuOpen(false);
// //             }}
// //             style={styles.dropdownItem}
// //           >
// //             <Text style={styles.dropdownTextAccent}>Log In</Text>
// //           </Pressable>

// //         </View>
// //       )}

// //       <ScrollView
// //         ref={scrollViewRef}
// //         contentContainerStyle={styles.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Full-Height (~100vh) Orange Hero Search Banner */}
// //         <View style={styles.heroSection}>
// //           <View style={styles.searchBoxCard}>
// //             <TextInput
// //               placeholder="Search Products..."
// //               placeholderTextColor="rgba(255, 255, 255, 0.7)"
// //               style={[
// //                 styles.transparentInputField,
// //                 focusedInput === "product" &&
// //                   styles.transparentInputFieldFocused,
// //               ]}
// //               onFocus={() => setFocusedInput("product")}
// //               onBlur={() => setFocusedInput(null)}
// //             />
// //             <TextInput
// //               placeholder="Select a Store..."
// //               placeholderTextColor="rgba(255, 255, 255, 0.7)"
// //               style={[
// //                 styles.transparentInputField,
// //                 focusedInput === "store" && styles.transparentInputFieldFocused,
// //               ]}
// //               onFocus={() => setFocusedInput("store")}
// //               onBlur={() => setFocusedInput(null)}
// //             />
// //             <Pressable
// //               style={[
// //                 styles.searchButton,
// //                 isSearchHovered && styles.searchButtonHover,
// //               ]}
// //               onHoverIn={() => setIsSearchHovered(true)}
// //               onHoverOut={() => setIsSearchHovered(false)}
// //             >
// //               <Text
// //                 style={[
// //                   styles.searchButtonText,
// //                   isSearchHovered && styles.searchButtonTextHover,
// //                 ]}
// //               >
// //                 Search
// //               </Text>
// //             </Pressable>
// //           </View>
// //         </View>

// //         {/* Main White Section */}
// //         <View style={styles.mainWhiteContainer}>
// //           {/* Browse by Category Grid Section */}
// //           <View style={styles.sectionContainer}>
// //             <Text style={styles.sectionTitle}>Browse by Category</Text>
// //             <View style={styles.categoryGrid}>
// //               {CATEGORIES.map((cat, idx) => {
// //                 const isHovered = hoveredCategory === cat;
// //                 return (
// //                   <Pressable
// //                     key={idx}
// //                     style={[
// //                       styles.categoryChip,
// //                       { width: categoryChipWidth as any },
// //                       isHovered && styles.categoryChipHover,
// //                     ]}
// //                     onHoverIn={() => setHoveredCategory(cat)}
// //                     onHoverOut={() => setHoveredCategory(null)}
// //                     onPress={() =>
// //                       router.push({
// //                         pathname: "/product/products",
// //                         params: { category: cat },
// //                       } as any)
// //                     }
// //                   >
// //                     <Text
// //                       style={[
// //                         styles.categoryChipText,
// //                         isHovered && styles.categoryChipTextHover,
// //                       ]}
// //                       numberOfLines={1}
// //                     >
// //                       {cat}
// //                     </Text>
// //                   </Pressable>
// //                 );
// //               })}
// //             </View>
// //           </View>

// //           {/* About Us Section */}
// //           <View style={styles.sectionContainer}>
// //             <Text style={styles.aboutTitle}>About Us</Text>
// //             {/* <Text style={styles.sectionTitle}>About Us</Text> */}

// //             <View style={styles.aboutCard}>
// //               <Text style={styles.aboutText}>
// //                 Need fast cash or looking for a great bargain? At{" "}
// //                 <Text style={{ fontWeight: "800" }}>The PawnShop</Text>, we make
// //                 pawning, buying, and selling simple and secure. Whether you are
// //                 looking to unlock cash value from your pre-owned tools,
// //                 electronics, gaming gear, appliances, or gold and jewellery, or
// //                 looking for certified second-hand deals at unbeatable prices—our
// //                 friendly team is here to help. Visit one of our branches today
// //                 for honest evaluations and quick cash payouts!
// //               </Text>
// //             </View>
// //           </View>

// //           {/* Contact Us Card Section */}
// //           {/* <View style={{ width: '100%'} }> */}
// //           <View style={styles.sectionContainer}>
// //             <View style={styles.contactCard}>
// //               <Text style={styles.contactCardTitle}>Contact Us</Text>

// //               <View style={styles.formGroupRow}>
// //                 {/* <Text style={styles.formLabel}>Email</Text> */}
// //                 <TextInput
// //                   value={email}
// //                   onChangeText={setEmail}
// //                   placeholder="Your Email Address"
// //                   placeholderTextColor="#A1A1AA"
// //                   style={styles.formInput}
// //                 />
// //               </View>

// //               <View style={styles.formGroupRow}>
// //                 <TextInput
// //                   value={email}
// //                   onChangeText={setEmail}
// //                   placeholder="Your Name"
// //                   placeholderTextColor="#A1A1AA"
// //                   style={styles.formInput}
// //                 />
// //               </View>

// //               {/* <View style={styles.formGroupRow}>
// //                 <Text style={styles.formLabel}>Phone</Text>
// //                 <TextInput
// //                   value={phone}
// //                   onChangeText={setPhone}
// //                   placeholder="082 123 4567"
// //                   placeholderTextColor="#A1A1AA"
// //                   style={styles.formInput}
// //                 />
// //               </View> */}

// //               <View style={styles.formGroupColumn}>
// //                 {/* <Text style={styles.formLabel}>Your Message</Text> */}
// //                 <TextInput
// //                   value={message}
// //                   onChangeText={setMessage}
// //                   placeholder="Type your inquiry or item details here..."
// //                   placeholderTextColor="#A1A1AA"
// //                   multiline
// //                   numberOfLines={4}
// //                   style={[
// //                     styles.formInput,
// //                     { height: 110, textAlignVertical: "top" },
// //                   ]}
// //                 />
// //               </View>

// //               <Pressable
// //                 style={[
// //                   styles.sendButton,
// //                   isSubmitHovered && styles.sendButtonHover,
// //                 ]}
// //                 onHoverIn={() => setIsSubmitHovered(true)}
// //                 onHoverOut={() => setIsSubmitHovered(false)}
// //                 onPress={handleSendMessage}
// //               >
// //                 <Text style={styles.sendButtonText}>Send Message</Text>
// //               </Pressable>
// //             </View>
// //           </View>

// //           {/* Download Mobile App Section */}
// //           <View style={styles.sectionContainer}>
// //             <Text style={styles.sectionTitle}>Download the Mobile App</Text>
// //             <View style={styles.appLinksRow}>
// //               <Pressable
// //                 onPress={() => Linking.openURL("https://play.google.com")}
// //               >
// //                 <Text style={styles.appLinkText}>Android</Text>
// //               </Pressable>
// //               <Pressable
// //                 onPress={() =>
// //                   Linking.openURL("https://www.apple.com/app-store/")
// //                 }
// //               >
// //                 <Text style={styles.appLinkText}>iOS</Text>
// //               </Pressable>
// //               <Pressable
// //                 onPress={() => Linking.openURL("https://www.median.co")}
// //               >
// //                 <Text style={styles.appLinkText}>Media.Code</Text>
// //               </Pressable>
// //             </View>
// //           </View>

// //           {/* Connect with us Social Card */}
// //           <View style={styles.socialCardContainer}>
// //             <Text style={styles.socialCardTitle}>Connect with us</Text>
// //             <View style={styles.socialIconsRow}>
// //               <Pressable
// //                 onPress={() => handleSocialPress("email")}
// //                 style={[
// //                   styles.socialIconWrapper,
// //                   hoveredSocial === "email" && styles.socialIconWrapperHover,
// //                 ]}
// //                 onHoverIn={() => setHoveredSocial("email")}
// //                 onHoverOut={() => setHoveredSocial(null)}
// //               >
// //                 <Ionicons name="mail" size={18} color="#000" />
// //               </Pressable>

// //               <Pressable
// //                 onPress={() => handleSocialPress("twitter")}
// //                 style={[
// //                   styles.socialIconWrapper,
// //                   hoveredSocial === "twitter" && styles.socialIconWrapperHover,
// //                 ]}
// //                 onHoverIn={() => setHoveredSocial("twitter")}
// //                 onHoverOut={() => setHoveredSocial(null)}
// //               >
// //                 <Ionicons name="logo-twitter" size={18} color="#000" />
// //               </Pressable>

// //               <Pressable
// //                 onPress={() => handleSocialPress("facebook")}
// //                 style={[
// //                   styles.socialIconWrapper,
// //                   hoveredSocial === "facebook" && styles.socialIconWrapperHover,
// //                 ]}
// //                 onHoverIn={() => setHoveredSocial("facebook")}
// //                 onHoverOut={() => setHoveredSocial(null)}
// //               >
// //                 <Ionicons name="logo-facebook" size={18} color="#000" />
// //               </Pressable>

// //               <Pressable
// //                 onPress={() => handleSocialPress("instagram")}
// //                 style={[
// //                   styles.socialIconWrapper,
// //                   hoveredSocial === "instagram" &&
// //                     styles.socialIconWrapperHover,
// //                 ]}
// //                 onHoverIn={() => setHoveredSocial("instagram")}
// //                 onHoverOut={() => setHoveredSocial(null)}
// //               >
// //                 <Ionicons name="logo-instagram" size={18} color="#000" />
// //               </Pressable>

// //               <Pressable
// //                 onPress={() => handleSocialPress("youtube")}
// //                 style={[
// //                   styles.socialIconWrapper,
// //                   hoveredSocial === "youtube" && styles.socialIconWrapperHover,
// //                 ]}
// //                 onHoverIn={() => setHoveredSocial("youtube")}
// //                 onHoverOut={() => setHoveredSocial(null)}
// //               >
// //                 <Ionicons name="logo-youtube" size={18} color="#000" />
// //               </Pressable>
// //             </View>
// //           </View>

// //           {/* Back to top button */}
// //           <Pressable
// //             onPress={scrollToTop}
// //             style={[
// //               styles.backToTopButton,
// //               isTopHovered && styles.backToTopButtonHover,
// //             ]}
// //             onHoverIn={() => setIsTopHovered(true)}
// //             onHoverOut={() => setIsTopHovered(false)}
// //           >
// //             <Text style={styles.backToTopText}>Back to top</Text>
// //           </Pressable>
// //         </View>

// //         {/* Full-Width Rounded Footer with Working Hover Effects */}
// //         <View style={styles.footer}>
// //           <View style={styles.footerInner}>
// //             <View>
// //               {/* <Text style={styles.footerBrand}>The</Text> */}
// //               {/* <Text style={styles.footerBrand}>Pawn Shop</Text> */}

// //               <Text style={styles.navBrand}>
// //                 The <Text style={styles.brandAccent}>PawnShop</Text>
// //               </Text>
// //             </View>
// //             <View style={styles.footerLinksCol}>
// //               <Pressable
// //                 onPress={() => router.push("/" as any)}
// //                 onHoverIn={() => setHoveredFooterLink("about")}
// //                 onHoverOut={() => setHoveredFooterLink(null)}
// //               >
// //                 <Text
// //                   style={[
// //                     styles.footerItem,
// //                     hoveredFooterLink === "about" && styles.footerItemHover,
// //                   ]}
// //                 >
// //                   About us
// //                 </Text>
// //               </Pressable>

// //               <Pressable
// //                 onPress={() => router.push("/sell" as any)}
// //                 onHoverIn={() => setHoveredFooterLink("pawn")}
// //                 onHoverOut={() => setHoveredFooterLink(null)}
// //               >
// //                 <Text
// //                   style={[
// //                     styles.footerItem,
// //                     hoveredFooterLink === "pawn" && styles.footerItemHover,
// //                   ]}
// //                 >
// //                   Pawn
// //                 </Text>
// //               </Pressable>

// //               <Pressable
// //                 onPress={() => router.push("/product/products" as any)}
// //                 onHoverIn={() => setHoveredFooterLink("download")}
// //                 onHoverOut={() => setHoveredFooterLink(null)}
// //               >
// //                 <Text
// //                   style={[
// //                     styles.footerItem,
// //                     hoveredFooterLink === "download" && styles.footerItemHover,
// //                   ]}
// //                 >
// //                   Download
// //                 </Text>
// //               </Pressable>

// //               <Pressable
// //                 onPress={() => router.push("/stores" as any)}
// //                 onHoverIn={() => setHoveredFooterLink("locator")}
// //                 onHoverOut={() => setHoveredFooterLink(null)}
// //               >
// //                 <Text
// //                   style={[
// //                     styles.footerItem,
// //                     hoveredFooterLink === "locator" && styles.footerItemHover,
// //                   ]}
// //                 >
// //                   Store Locator
// //                 </Text>
// //               </Pressable>
// //             </View>
// //           </View>
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // }


// // newer1
// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   Pressable,
//   StyleSheet,
//   Linking,
//   useWindowDimensions,
//   ImageBackground,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";

// import { stylesLanding as styles } from "@/styles/landing.styles";

// const CATEGORIES = [
//   "Jewellery",
//   "Computers",
//   "Appliances",
//   "Gaming",
//   "Hair",
//   "Gold",
//   "Promotions",
//   "Best Prices",
//   "Phones",
//   "TVs",
// ];

// export type SocialPlatform =
//   | "email"
//   | "facebook"
//   | "instagram"
//   | "twitter"
//   | "youtube";

// const SOCIAL_URLS: Record<SocialPlatform, string> = {
//   email: "mailto:support@thepawnshop.co.za",
//   facebook: "https://www.facebook.com",
//   instagram: "https://www.instagram.com",
//   twitter: "https://www.twitter.com",
//   youtube: "https://www.youtube.com",
// };

// export default function LandingView() {
//   const { width } = useWindowDimensions();
//   const isSmallScreen = width < 768;
//   const [menuOpen, setMenuOpen] = useState(false);
//   const scrollViewRef = useRef<ScrollView>(null);

//   // Contact form state
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   // Search input focus states
//   const [focusedInput, setFocusedInput] = useState<"product" | "store" | null>(
//     null,
//   );

//   // Hover states for web interactivity
//   const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
//   const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
//   const [hoveredFooterLink, setHoveredFooterLink] = useState<string | null>(
//     null,
//   );
//   const [isSearchHovered, setIsSearchHovered] = useState(false);
//   const [isSubmitHovered, setIsSubmitHovered] = useState(false);
//   const [isTopHovered, setIsTopHovered] = useState(false);

//   // Responsive category grid column sizing
//   let categoryChipWidth = "48%"; // 2 columns for mobile
//   if (width >= 1024) {
//     categoryChipWidth = "23%"; // 4 columns for desktop
//   } else if (width >= 768) {
//     categoryChipWidth = "31%"; // 3 columns for tablet
//   }

//   const handleSocialPress = (platform: SocialPlatform) => {
//     Linking.openURL(SOCIAL_URLS[platform]);
//   };

//   const handleSendMessage = () => {
//     if (!email || !message) {
//       alert("Please fill in your email and message.");
//       return;
//     }
//     alert("Your message has been sent successfully!");
//     setEmail("");
//     setName("");
//     setMessage("");
//   };

//   const scrollToTop = () => {
//     scrollViewRef.current?.scrollTo({ y: 0, animated: true });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Sticky Top Navbar */}
//       <View style={styles.stickyNavBar}>
//         {isSmallScreen ? (
//           <View style={styles.mobileNavRow}>
//             <Text style={styles.navBrand}>
//               The <Text style={styles.brandAccent}>PawnShop</Text>
//             </Text>
//             <Pressable
//               onPress={() => setMenuOpen(!menuOpen)}
//               style={styles.hamburgerBtn}
//             >
//               <Ionicons
//                 name={menuOpen ? "close" : "menu"}
//                 size={26}
//                 color="#FFFFFF"
//               />
//             </Pressable>
//           </View>
//         ) : (
//           <View style={styles.desktopNavContainer}>
//             <Text style={styles.navBrand}>
//               The <Text style={styles.brandAccent}>PawnShop</Text>
//             </Text>
//             <View style={styles.navLinksRight}>
//               <Pressable onPress={() => router.push("/" as any)}>
//                 <Text style={styles.navLink}>Home</Text>
//               </Pressable>
//               <Pressable onPress={() => router.push("/stores" as any)}>
//                 <Text style={styles.navLink}>All Stores</Text>
//               </Pressable>
//               <Pressable onPress={() => router.push("/sell" as any)}>
//                 <Text style={styles.navLink}>Sell</Text>
//               </Pressable>
//               <Pressable onPress={() => router.push("/cart" as any)}>
//                 <Text style={styles.navLink}>Cart</Text>
//               </Pressable>
//               <Pressable onPress={() => router.push("/(auth)/signup" as any)}>
//                 <Text style={styles.navLinkAccent}>Sign Up</Text>
//               </Pressable>
//               <Pressable onPress={() => router.push("/(auth)/login" as any)}>
//                 <Text style={styles.navLinkAccent}>Log In</Text>
//               </Pressable>
//             </View>
//           </View>
//         )}
//       </View>

//       {/* Collapsible Mobile Menu Dropdown */}
//       {isSmallScreen && menuOpen && (
//         <View style={styles.mobileDropdownMenu}>
//           <Pressable
//             onPress={() => {
//               router.push("/" as any);
//               setMenuOpen(false);
//             }}
//             style={styles.dropdownItem}
//           >
//             <Text style={styles.dropdownText}>Home</Text>
//           </Pressable>
//           <Pressable
//             onPress={() => {
//               router.push("/stores" as any);
//               setMenuOpen(false);
//             }}
//             style={styles.dropdownItem}
//           >
//             <Text style={styles.dropdownText}>All Stores</Text>
//           </Pressable>
//           <Pressable
//             onPress={() => {
//               router.push("/sell" as any);
//               setMenuOpen(false);
//             }}
//             style={styles.dropdownItem}
//           >
//             <Text style={styles.dropdownText}>Sell</Text>
//           </Pressable>
//           <Pressable
//             onPress={() => {
//               router.push("/cart" as any);
//               setMenuOpen(false);
//             }}
//             style={styles.dropdownItem}
//           >
//             <Text style={styles.dropdownText}>Cart</Text>
//           </Pressable>
//           <Pressable
//             onPress={() => {
//               router.push("/(auth)/signup" as any);
//               setMenuOpen(false);
//             }}
//             style={styles.dropdownItem}
//           >
//             <Text style={styles.dropdownTextAccent}>Sign Up</Text>
//           </Pressable>
//           <Pressable
//             onPress={() => {
//               router.push("/(auth)/login" as any);
//               setMenuOpen(false);
//             }}
//             style={styles.dropdownItem}
//           >
//             <Text style={styles.dropdownTextAccent}>Log In</Text>
//           </Pressable>
//         </View>
//       )}

//       {/* Background Image Container */}
//       <ImageBackground 
//         source={{ uri: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop' }} 
//         style={stylesBackgroundImage.backgroundImage}
//         resizeMode="cover"
//       >
//         {/* Semi-transparent warm dark overlay to keep content readable */}
//         <View style={stylesBackgroundImage.overlay} />

//         <ScrollView
//           ref={scrollViewRef}
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Full-Height (~100vh) Orange Hero Search Banner */}
//           <View style={styles.heroSection}>
//             <View style={styles.searchBoxCard}>
//               <TextInput
//                 placeholder="Search Products..."
//                 placeholderTextColor="rgba(255, 255, 255, 0.7)"
//                 style={[
//                   styles.transparentInputField,
//                   focusedInput === "product" &&
//                     styles.transparentInputFieldFocused,
//                 ]}
//                 onFocus={() => setFocusedInput("product")}
//                 onBlur={() => setFocusedInput(null)}
//               />
//               <TextInput
//                 placeholder="Select a Store..."
//                 placeholderTextColor="rgba(255, 255, 255, 0.7)"
//                 style={[
//                   styles.transparentInputField,
//                   focusedInput === "store" && styles.transparentInputFieldFocused,
//                 ]}
//                 onFocus={() => setFocusedInput("store")}
//                 onBlur={() => setFocusedInput(null)}
//               />
//               <Pressable
//                 style={[
//                   styles.searchButton,
//                   isSearchHovered && styles.searchButtonHover,
//                 ]}
//                 onHoverIn={() => setIsSearchHovered(true)}
//                 onHoverOut={() => setIsSearchHovered(false)}
//               >
//                 <Text
//                   style={[
//                     styles.searchButtonText,
//                     isSearchHovered && styles.searchButtonTextHover,
//                   ]}
//                 >
//                   Search
//                 </Text>
//               </Pressable>
//             </View>
//           </View>

//           {/* Main Content Section */}
//           <View style={styles.mainWhiteContainer}>
//             {/* Browse by Category Grid Section */}
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Browse by Category</Text>
//               <View style={styles.categoryGrid}>
//                 {CATEGORIES.map((cat, idx) => {
//                   const isHovered = hoveredCategory === cat;
//                   return (
//                     <Pressable
//                       key={idx}
//                       style={[
//                         styles.categoryChip,
//                         { width: categoryChipWidth as any },
//                         isHovered && styles.categoryChipHover,
//                       ]}
//                       onHoverIn={() => setHoveredCategory(cat)}
//                       onHoverOut={() => setHoveredCategory(null)}
//                       onPress={() =>
//                         router.push({
//                           pathname: "/product/products",
//                           params: { category: cat },
//                         } as any)
//                       }
//                     >
//                       <Text
//                         style={[
//                           styles.categoryChipText,
//                           isHovered && styles.categoryChipTextHover,
//                         ]}
//                         numberOfLines={1}
//                       >
//                         {cat}
//                       </Text>
//                     </Pressable>
//                   );
//                 })}
//               </View>
//             </View>

//             {/* About Us Section */}
//             <View style={styles.sectionContainer}>
//               <Text style={styles.aboutTitle}>About Us</Text>
//               <View style={styles.aboutCard}>
//                 <Text style={styles.aboutText}>
//                   Need fast cash or looking for a great bargain? At{" "}
//                   <Text style={{ fontWeight: "800" }}>The PawnShop</Text>, we make
//                   pawning, buying, and selling simple and secure. Whether you are
//                   looking to unlock cash value from your pre-owned tools,
//                   electronics, gaming gear, appliances, or gold and jewellery, or
//                   looking for certified second-hand deals at unbeatable prices—our
//                   friendly team is here to help. Visit one of our branches today
//                   for honest evaluations and quick cash payouts!
//                 </Text>
//               </View>
//             </View>

//             {/* Contact Us Card Section */}
//             <View style={styles.sectionContainer}>
//               <View style={styles.contactCard}>
//                 <Text style={styles.contactCardTitle}>Contact Us</Text>

//                 <View style={styles.formGroupRow}>
//                   <TextInput
//                     value={email}
//                     onChangeText={setEmail}
//                     placeholder="Your Email Address"
//                     placeholderTextColor="#A1A1AA"
//                     style={styles.formInput}
//                   />
//                 </View>

//                 <View style={styles.formGroupRow}>
//                   <TextInput
//                     value={name}
//                     onChangeText={setName}
//                     placeholder="Your Name"
//                     placeholderTextColor="#A1A1AA"
//                     style={styles.formInput}
//                   />
//                 </View>

//                 <View style={styles.formGroupColumn}>
//                   <TextInput
//                     value={message}
//                     onChangeText={setMessage}
//                     placeholder="Type your inquiry or item details here..."
//                     placeholderTextColor="#A1A1AA"
//                     multiline
//                     numberOfLines={4}
//                     style={[
//                       styles.formInput,
//                       { height: 110, textAlignVertical: "top" },
//                     ]}
//                   />
//                 </View>

//                 <Pressable
//                   style={[
//                     styles.sendButton,
//                     isSubmitHovered && styles.sendButtonHover,
//                   ]}
//                   onHoverIn={() => setIsSubmitHovered(true)}
//                   onHoverOut={() => setIsSubmitHovered(false)}
//                   onPress={handleSendMessage}
//                 >
//                   <Text style={styles.sendButtonText}>Send Message</Text>
//                 </Pressable>
//               </View>
//             </View>

//             {/* Download Mobile App Section */}
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Download the Mobile App</Text>
//               <View style={styles.appLinksRow}>
//                 <Pressable
//                   onPress={() => Linking.openURL("https://play.google.com")}
//                 >
//                   <Text style={styles.appLinkText}>Android</Text>
//                 </Pressable>
//                 <Pressable
//                   onPress={() =>
//                     Linking.openURL("https://www.apple.com/app-store/")
//                   }
//                 >
//                   <Text style={styles.appLinkText}>iOS</Text>
//                 </Pressable>
//                 <Pressable
//                   onPress={() => Linking.openURL("https://www.median.co")}
//                 >
//                   <Text style={styles.appLinkText}>Media.Code</Text>
//                 </Pressable>
//               </View>
//             </View>

//             {/* Connect with us Social Card */}
//             <View style={styles.socialCardContainer}>
//               <Text style={styles.socialCardTitle}>Connect with us</Text>
//               <View style={styles.socialIconsRow}>
//                 <Pressable
//                   onPress={() => handleSocialPress("email")}
//                   style={[
//                     styles.socialIconWrapper,
//                     hoveredSocial === "email" && styles.socialIconWrapperHover,
//                   ]}
//                   onHoverIn={() => setHoveredSocial("email")}
//                   onHoverOut={() => setHoveredSocial(null)}
//                 >
//                   <Ionicons name="mail" size={18} color="#000" />
//                 </Pressable>

//                 <Pressable
//                   onPress={() => handleSocialPress("twitter")}
//                   style={[
//                     styles.socialIconWrapper,
//                     hoveredSocial === "twitter" && styles.socialIconWrapperHover,
//                   ]}
//                   onHoverIn={() => setHoveredSocial("twitter")}
//                   onHoverOut={() => setHoveredSocial(null)}
//                 >
//                   <Ionicons name="logo-twitter" size={18} color="#000" />
//                 </Pressable>

//                 <Pressable
//                   onPress={() => handleSocialPress("facebook")}
//                   style={[
//                     styles.socialIconWrapper,
//                     hoveredSocial === "facebook" && styles.socialIconWrapperHover,
//                   ]}
//                   onHoverIn={() => setHoveredSocial("facebook")}
//                   onHoverOut={() => setHoveredSocial(null)}
//                 >
//                   <Ionicons name="logo-facebook" size={18} color="#000" />
//                 </Pressable>

//                 <Pressable
//                   onPress={() => handleSocialPress("instagram")}
//                   style={[
//                     styles.socialIconWrapper,
//                     hoveredSocial === "instagram" &&
//                       styles.socialIconWrapperHover,
//                   ]}
//                   onHoverIn={() => setHoveredSocial("instagram")}
//                   onHoverOut={() => setHoveredSocial(null)}
//                 >
//                   <Ionicons name="logo-instagram" size={18} color="#000" />
//                 </Pressable>

//                 <Pressable
//                   onPress={() => handleSocialPress("youtube")}
//                   style={[
//                     styles.socialIconWrapper,
//                     hoveredSocial === "youtube" && styles.socialIconWrapperHover,
//                   ]}
//                   onHoverIn={() => setHoveredSocial("youtube")}
//                   onHoverOut={() => setHoveredSocial(null)}
//                 >
//                   <Ionicons name="logo-youtube" size={18} color="#000" />
//                 </Pressable>
//               </View>
//             </View>

//             {/* Back to top button */}
//             <Pressable
//               onPress={scrollToTop}
//               style={[
//                 styles.backToTopButton,
//                 isTopHovered && styles.backToTopButtonHover,
//               ]}
//               onHoverIn={() => setIsTopHovered(true)}
//               onHoverOut={() => setIsTopHovered(false)}
//             >
//               <Text style={styles.backToTopText}>Back to top</Text>
//             </Pressable>
//           </View>

//           {/* Full-Width Rounded Footer */}
//           <View style={styles.footer}>
//             <View style={styles.footerInner}>
//               <View>
//                 <Text style={styles.navBrand}>
//                   The <Text style={styles.brandAccent}>PawnShop</Text>
//                 </Text>
//               </View>
//               <View style={styles.footerLinksCol}>
//                 <Pressable
//                   onPress={() => router.push("/" as any)}
//                   onHoverIn={() => setHoveredFooterLink("about")}
//                   onHoverOut={() => setHoveredFooterLink(null)}
//                 >
//                   <Text
//                     style={[
//                       styles.footerItem,
//                       hoveredFooterLink === "about" && styles.footerItemHover,
//                     ]}
//                   >
//                     About us
//                   </Text>
//                 </Pressable>

//                 <Pressable
//                   onPress={() => router.push("/sell" as any)}
//                   onHoverIn={() => setHoveredFooterLink("pawn")}
//                   onHoverOut={() => setHoveredFooterLink(null)}
//                 >
//                   <Text
//                     style={[
//                       styles.footerItem,
//                       hoveredFooterLink === "pawn" && styles.footerItemHover,
//                     ]}
//                   >
//                     Pawn
//                   </Text>
//                 </Pressable>

//                 <Pressable
//                   onPress={() => router.push("/product/products" as any)}
//                   onHoverIn={() => setHoveredFooterLink("download")}
//                   onHoverOut={() => setHoveredFooterLink(null)}
//                 >
//                   <Text
//                     style={[
//                       styles.footerItem,
//                       hoveredFooterLink === "download" && styles.footerItemHover,
//                     ]}
//                   >
//                     Download
//                   </Text>
//                 </Pressable>

//                 <Pressable
//                   onPress={() => router.push("/stores" as any)}
//                   onHoverIn={() => setHoveredFooterLink("locator")}
//                   onHoverOut={() => setHoveredFooterLink(null)}
//                 >
//                   <Text
//                     style={[
//                       styles.footerItem,
//                       hoveredFooterLink === "locator" && styles.footerItemHover,
//                     ]}
//                   >
//                     Store Locator
//                   </Text>
//                 </Pressable>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </ImageBackground>
//     </View>
//   );
// }

// const stylesBackgroundImage = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   overlay: {
//     ...StyleSheet.absoluteFill,
//     backgroundColor: 'rgba(50, 20, 5, 0.65)', // Consistent warm dark overlay matching the auth screens
//   },
// });



/// newer2 
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  Linking,
  useWindowDimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { stylesLanding as styles } from "@/styles/landing.styles";

const CATEGORIES = [
  "Jewellery",
  "Computers",
  "Appliances",
  "Gaming",
  "Hair",
  "Gold",
  "Promotions",
  "Best Prices",
  "Phones",
  "TVs",
];

export type SocialPlatform =
  | "email"
  | "facebook"
  | "instagram"
  | "twitter"
  | "youtube";

const SOCIAL_URLS: Record<SocialPlatform, string> = {
  email: "mailto:support@thepawnshop.co.za",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  twitter: "https://www.twitter.com",
  youtube: "https://www.youtube.com",
};

export default function LandingView() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  // Contact form state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Search input focus states
  const [focusedInput, setFocusedInput] = useState<"product" | "store" | null>(
    null,
  );

  // Hover states for web interactivity
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredFooterLink, setHoveredFooterLink] = useState<string | null>(
    null,
  );
  const [isSearchHovered, setIsSearchHovered] = useState(false);
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [isTopHovered, setIsTopHovered] = useState(false);

  let categoryChipWidth = "48%";
  if (width >= 1024) {
    categoryChipWidth = "23%";
  } else if (width >= 768) {
    categoryChipWidth = "31%";
  }

  const handleSocialPress = (platform: SocialPlatform) => {
    Linking.openURL(SOCIAL_URLS[platform]);
  };

  const handleSendMessage = () => {
    if (!email || !message) {
      alert("Please fill in your email and message.");
      return;
    }
    alert("Your message has been sent successfully!");
    setEmail("");
    setName("");
    setMessage("");
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Background Image Container wrapping the entire screen */}
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop' }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Semi-transparent warm dark overlay */}
        <View style={styles.overlay} />

        {/* Sticky Top Navbar */}
        <View style={styles.stickyNavBar}>
          {isSmallScreen ? (
            <View style={styles.mobileNavRow}>
              <Text style={styles.navBrand}>
                The <Text style={styles.brandAccent}>PawnShop</Text>
              </Text>
              <Pressable
                onPress={() => setMenuOpen(!menuOpen)}
                style={styles.hamburgerBtn}
              >
                <Ionicons
                  name={menuOpen ? "close" : "menu"}
                  size={26}
                  color="#FFFFFF"
                />
              </Pressable>
            </View>
          ) : (
            <View style={styles.desktopNavContainer}>
              <Text style={styles.navBrand}>
                The <Text style={styles.brandAccent}>PawnShop</Text>
              </Text>
              <View style={styles.navLinksRight}>
                <Pressable onPress={() => router.push("/" as any)}>
                  <Text style={styles.navLink}>Home</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/stores" as any)}>
                  <Text style={styles.navLink}>All Stores</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/sell" as any)}>
                  <Text style={styles.navLink}>Sell</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/cart" as any)}>
                  <Text style={styles.navLink}>Cart</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/(auth)/signup" as any)}>
                  <Text style={styles.navLinkAccent}>Sign Up</Text>
                </Pressable>
                <Pressable onPress={() => router.push("/(auth)/login" as any)}>
                  <Text style={styles.navLinkAccent}>Log In</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>

        {/* Collapsible Mobile Menu Dropdown */}
        {isSmallScreen && menuOpen && (
          <View style={styles.mobileDropdownMenu}>
            <Pressable
              onPress={() => {
                router.push("/" as any);
                setMenuOpen(false);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>Home</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/stores" as any);
                setMenuOpen(false);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>All Stores</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/sell" as any);
                setMenuOpen(false);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>Sell</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/cart" as any);
                setMenuOpen(false);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownText}>Cart</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/(auth)/signup" as any);
                setMenuOpen(false);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownTextAccent}>Sign Up</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/(auth)/login" as any);
                setMenuOpen(false);
              }}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownTextAccent}>Log In</Text>
            </Pressable>
          </View>
        )}

        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Full-Height (~100vh) Orange Hero Search Banner */}
          <View style={styles.heroSection}>
            <View style={styles.searchBoxCard}>
              <TextInput
                placeholder="Search Products..."
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                style={[
                  styles.transparentInputField,
                  focusedInput === "product" &&
                    styles.transparentInputFieldFocused,
                ]}
                onFocus={() => setFocusedInput("product")}
                onBlur={() => setFocusedInput(null)}
              />
              <TextInput
                placeholder="Select a Store..."
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                style={[
                  styles.transparentInputField,
                  focusedInput === "store" && styles.transparentInputFieldFocused,
                ]}
                onFocus={() => setFocusedInput("store")}
                onBlur={() => setFocusedInput(null)}
              />
              <Pressable
                style={[
                  styles.searchButton,
                  isSearchHovered && styles.searchButtonHover,
                ]}
                onHoverIn={() => setIsSearchHovered(true)}
                onHoverOut={() => setIsSearchHovered(false)}
              >
                <Text
                  style={[
                    styles.searchButtonText,
                    isSearchHovered && styles.searchButtonTextHover,
                  ]}
                >
                  Search
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Main Content Section */}
          <View style={styles.mainWhiteContainer}>
            {/* Browse by Category Grid Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Browse by Category</Text>
              <View style={styles.categoryGrid}>
                {CATEGORIES.map((cat, idx) => {
                  const isHovered = hoveredCategory === cat;
                  return (
                    <Pressable
                      key={idx}
                      style={[
                        styles.categoryChip,
                        { width: categoryChipWidth as any },
                        isHovered && styles.categoryChipHover,
                      ]}
                      onHoverIn={() => setHoveredCategory(cat)}
                      onHoverOut={() => setHoveredCategory(null)}
                      onPress={() =>
                        router.push({
                          pathname: "/product/products",
                          params: { category: cat },
                        } as any)
                      }
                    >
                      <Text
                        style={[
                          styles.categoryChipText,
                          isHovered && styles.categoryChipTextHover,
                        ]}
                        numberOfLines={1}
                      >
                        {cat}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* About Us Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.aboutTitle}>About Us</Text>
              <View style={styles.aboutCard}>
                <Text style={styles.aboutText}>
                  Need fast cash or looking for a great bargain? At{" "}
                  <Text style={{ fontWeight: "800" }}>The PawnShop</Text>, we make
                  pawning, buying, and selling simple and secure. Whether you are
                  looking to unlock cash value from your pre-owned tools,
                  electronics, gaming gear, appliances, or gold and jewellery, or
                  looking for certified second-hand deals at unbeatable prices—our
                  friendly team is here to help. Visit one of our branches today
                  for honest evaluations and quick cash payouts!
                </Text>
              </View>
            </View>

            {/* Contact Us Card Section */}
            <View style={styles.sectionContainer}>
              <View style={styles.contactCard}>
                <Text style={styles.contactCardTitle}>Contact Us</Text>

                <View style={styles.formGroupRow}>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Your Email Address"
                    placeholderTextColor="#A1A1AA"
                    style={styles.formInput}
                  />
                </View>

                <View style={styles.formGroupRow}>
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Your Name"
                    placeholderTextColor="#A1A1AA"
                    style={styles.formInput}
                  />
                </View>

                <View style={styles.formGroupColumn}>
                  <TextInput
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type your inquiry or item details here..."
                    placeholderTextColor="#A1A1AA"
                    multiline
                    numberOfLines={4}
                    style={[
                      styles.formInput,
                      { height: 110, textAlignVertical: "top" },
                    ]}
                  />
                </View>

                <Pressable
                  style={[
                    styles.sendButton,
                    isSubmitHovered && styles.sendButtonHover,
                  ]}
                  onHoverIn={() => setIsSubmitHovered(true)}
                  onHoverOut={() => setIsSubmitHovered(false)}
                  onPress={handleSendMessage}
                >
                  <Text style={styles.sendButtonText}>Send Message</Text>
                </Pressable>
              </View>
            </View>

            {/* Download Mobile App Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Download the Mobile App</Text>
              <View style={styles.appLinksRow}>
                <Pressable
                  onPress={() => Linking.openURL("https://play.google.com")}
                >
                  <Text style={styles.appLinkText}>Android</Text>
                </Pressable>
                <Pressable
                  onPress={() =>
                    Linking.openURL("https://www.apple.com/app-store/")
                  }
                >
                  <Text style={styles.appLinkText}>iOS</Text>
                </Pressable>
                <Pressable
                  onPress={() => Linking.openURL("https://www.median.co")}
                >
                  <Text style={styles.appLinkText}>Media.Code</Text>
                </Pressable>
              </View>
            </View>

            {/* Connect with us Social Card */}
            <View style={styles.socialCardContainer}>
              <Text style={styles.socialCardTitle}>Connect with us</Text>
              <View style={styles.socialIconsRow}>
                <Pressable
                  onPress={() => handleSocialPress("email")}
                  style={[
                    styles.socialIconWrapper,
                    hoveredSocial === "email" && styles.socialIconWrapperHover,
                  ]}
                  onHoverIn={() => setHoveredSocial("email")}
                  onHoverOut={() => setHoveredSocial(null)}
                >
                  <Ionicons name="mail" size={18} color="#000" />
                </Pressable>

                <Pressable
                  onPress={() => handleSocialPress("twitter")}
                  style={[
                    styles.socialIconWrapper,
                    hoveredSocial === "twitter" && styles.socialIconWrapperHover,
                  ]}
                  onHoverIn={() => setHoveredSocial("twitter")}
                  onHoverOut={() => setHoveredSocial(null)}
                >
                  <Ionicons name="logo-twitter" size={18} color="#000" />
                </Pressable>

                <Pressable
                  onPress={() => handleSocialPress("facebook")}
                  style={[
                    styles.socialIconWrapper,
                    hoveredSocial === "facebook" && styles.socialIconWrapperHover,
                  ]}
                  onHoverIn={() => setHoveredSocial("facebook")}
                  onHoverOut={() => setHoveredSocial(null)}
                >
                  <Ionicons name="logo-facebook" size={18} color="#000" />
                </Pressable>

                <Pressable
                  onPress={() => handleSocialPress("instagram")}
                  style={[
                    styles.socialIconWrapper,
                    hoveredSocial === "instagram" &&
                      styles.socialIconWrapperHover,
                  ]}
                  onHoverIn={() => setHoveredSocial("instagram")}
                  onHoverOut={() => setHoveredSocial(null)}
                >
                  <Ionicons name="logo-instagram" size={18} color="#000" />
                </Pressable>

                <Pressable
                  onPress={() => handleSocialPress("youtube")}
                  style={[
                    styles.socialIconWrapper,
                    hoveredSocial === "youtube" && styles.socialIconWrapperHover,
                  ]}
                  onHoverIn={() => setHoveredSocial("youtube")}
                  onHoverOut={() => setHoveredSocial(null)}
                >
                  <Ionicons name="logo-youtube" size={18} color="#000" />
                </Pressable>
              </View>
            </View>

            {/* Back to top button */}
            <Pressable
              onPress={scrollToTop}
              style={[
                styles.backToTopButton,
                isTopHovered && styles.backToTopButtonHover,
              ]}
              onHoverIn={() => setIsTopHovered(true)}
              onHoverOut={() => setIsTopHovered(false)}
            >
              <Text style={styles.backToTopText}>Back to top</Text>
            </Pressable>
          </View>

          {/* Full-Width Rounded Footer */}
          <View style={styles.footer}>
            <View style={styles.footerInner}>
              <View>
                <Text style={styles.navBrand}>
                  The <Text style={styles.brandAccent}>PawnShop</Text>
                </Text>
              </View>
              <View style={styles.footerLinksCol}>
                <Pressable
                  onPress={() => router.push("/" as any)}
                  onHoverIn={() => setHoveredFooterLink("about")}
                  onHoverOut={() => setHoveredFooterLink(null)}
                >
                  <Text
                    style={[
                      styles.footerItem,
                      hoveredFooterLink === "about" && styles.footerItemHover,
                    ]}
                  >
                    About us
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => router.push("/sell" as any)}
                  onHoverIn={() => setHoveredFooterLink("pawn")}
                  onHoverOut={() => setHoveredFooterLink(null)}
                >
                  <Text
                    style={[
                      styles.footerItem,
                      hoveredFooterLink === "pawn" && styles.footerItemHover,
                    ]}
                  >
                    Pawn
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => router.push("/product/products" as any)}
                  onHoverIn={() => setHoveredFooterLink("download")}
                  onHoverOut={() => setHoveredFooterLink(null)}
                >
                  <Text
                    style={[
                      styles.footerItem,
                      hoveredFooterLink === "download" && styles.footerItemHover,
                    ]}
                  >
                    Download
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => router.push("/stores" as any)}
                  onHoverIn={() => setHoveredFooterLink("locator")}
                  onHoverOut={() => setHoveredFooterLink(null)}
                >
                  <Text
                    style={[
                      styles.footerItem,
                      hoveredFooterLink === "locator" && styles.footerItemHover,
                    ]}
                  >
                    Store Locator
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
