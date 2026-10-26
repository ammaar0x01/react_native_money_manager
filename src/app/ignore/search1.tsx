// // import React, { useState, useMemo, useRef, useEffect } from 'react';
// // import { 
// //   View, 
// //   TextInput, 
// //   TouchableOpacity, 
// //   Text, 
// //   StyleSheet, 
// //   FlatList, 
// //   useWindowDimensions 
// // } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// // import { DUMMY_PRODUCTS, Product } from '@/productData'; // Adjust path if needed

// // export default function SearchView() {
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedLocation, setSelectedLocation] = useState('');
// //   const [isSearched, setIsSearched] = useState(false);

// //   // Responsive width tracking
// //   const { width } = useWindowDimensions();

// //   // Refs for keyboard shortcuts focus handling
// //   const searchInputRef = useRef<TextInput>(null);
// //   const locationInputRef = useRef<TextInput>(null);

// //   // Determine items per row based on screen width (2 to 4 items on wide screens)
// //   const numColumns = width > 1024 ? 4 : width > 768 ? 3 : width > 600 ? 2 : 1;

// //   // Global shortcut for '/' to focus search input
// //   useEffect(() => {
// //     const handleGlobalKeyDown = (e: KeyboardEvent) => {
// //       if (
// //         e.key === '/' && 
// //         document.activeElement !== searchInputRef.current && 
// //         document.activeElement !== locationInputRef.current
// //       ) {
// //         e.preventDefault();
// //         searchInputRef.current?.focus();
// //       }
// //     };

// //     window.addEventListener('keydown', handleGlobalKeyDown);
// //     return () => {
// //       window.removeEventListener('keydown', handleGlobalKeyDown);
// //     };
// //   }, []);

// //   // Filter products based on search query and location
// //   const filteredProducts = useMemo(() => {
// //     return DUMMY_PRODUCTS.filter((product) => {
// //       const matchesQuery = 
// //         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         product.category.toLowerCase().includes(searchQuery.toLowerCase());

// //       const matchesLocation = 
// //         selectedLocation.trim() === '' ||
// //         product.locations_available.some((loc) => 
// //           loc.toLowerCase().includes(selectedLocation.toLowerCase())
// //         );

// //       return matchesQuery && matchesLocation;
// //     });
// //   }, [searchQuery, selectedLocation]);

// //   const handleSearch = () => {
// //     setIsSearched(true);
// //   };

// //   const renderProductItem = ({ item }: { item: Product }) => (
// //     <View style={[styles.productCard, numColumns > 1 && styles.gridItem]}>
// //       <View style={styles.productHeader}>
// //         <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
// //         <Text style={styles.productPrice}>{item.price}</Text>
// //       </View>
// //       <Text style={styles.productDesc} numberOfLines={2}>{item.desc}</Text>
// //       <View style={styles.productFooter}>
// //         <Text style={styles.productCategory}>{item.category} • {item.new_or_used}</Text>
// //         <Text style={styles.productLocations} numberOfLines={1}>📍 {item.locations_available.join(', ')}</Text>
// //       </View>
// //     </View>
// //   );

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.cardWrapper}>
// //         <Text style={styles.headerTitle}>Find What You Need</Text>
// //         <Text style={styles.shortcutHint}>
// //           Tip: Press <Text style={styles.keyBadge}>/</Text> to search, <Text style={styles.keyBadge}>Esc</Text> to clear
// //         </Text>
        
// //         {/* Search Products Input */}
// //         <View style={styles.inputPill}>
// //           <TextInput
// //             ref={searchInputRef}
// //             placeholder="Search Products..."
// //             placeholderTextColor="#E0E7FF"
// //             style={styles.textInput}
// //             value={searchQuery}
// //             onChangeText={setSearchQuery}
// //             onKeyPress={(e: any) => {
// //               if (e.nativeEvent.key === 'Escape') {
// //                 setSearchQuery('');
// //               }
// //             }}
// //           />
// //           <Ionicons name="search-outline" size={18} color="white" />
// //         </View>

// //         {/* Select a Store Input */}
// //         <View style={styles.inputPill}>
// //           <TextInput
// //             ref={locationInputRef}
// //             placeholder="Select a Store (e.g., Bellville)..."
// //             placeholderTextColor="#E0E7FF"
// //             style={styles.textInput}
// //             value={selectedLocation}
// //             onChangeText={setSelectedLocation}
// //             onKeyPress={(e: any) => {
// //               if (e.nativeEvent.key === 'Escape') {
// //                 setSelectedLocation('');
// //               }
// //             }}
// //           />
// //           <Ionicons name="location-outline" size={18} color="white" />
// //         </View>

// //         {/* Search Action Button */}
// //         <TouchableOpacity activeOpacity={0.85} style={styles.searchButton} onPress={handleSearch}>
// //           <Text style={styles.searchButtonText}>Search</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Results Section */}
// //       {isSearched && (
// //         <View style={styles.resultsContainer}>
// //           <Text style={styles.resultsCount}>
// //             Found {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
// //           </Text>
// //           <FlatList
// //             key={numColumns} // Forces re-render on column layout change
// //             data={filteredProducts}
// //             keyExtractor={(item) => item.id}
// //             renderItem={renderProductItem}
// //             numColumns={numColumns}
// //             columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
// //             contentContainerStyle={styles.listContainer}
// //             showsVerticalScrollIndicator={false}
// //             ListEmptyComponent={
// //               <Text style={styles.emptyText}>No products found matching your criteria.</Text>
// //             }
// //           />
// //         </View>
// //       )}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#E59400',
// //     paddingTop: 40,
// //     paddingHorizontal: 24,
// //   },
// //   cardWrapper: {
// //     width: '100%',
// //     maxWidth: 600,
// //     alignSelf: 'center',
// //     alignItems: 'center',
// //     gap: 12,
// //     marginBottom: 20,
// //   },
// //   headerTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#FFFFFF',
// //   },
// //   shortcutHint: {
// //     fontSize: 12,
// //     color: 'rgba(255, 255, 255, 0.8)',
// //     marginBottom: 4,
// //   },
// //   keyBadge: {
// //     fontWeight: '700',
// //     backgroundColor: 'rgba(0,0,0,0.15)',
// //     paddingHorizontal: 4,
// //     borderRadius: 4,
// //   },
// //   inputPill: {
// //     width: '100%',
// //     backgroundColor: 'transparent',
// //     borderWidth: 1.5,
// //     borderColor: 'rgba(255, 255, 255, 0.6)',
// //     borderRadius: 9999,
// //     paddingHorizontal: 20,
// //     paddingVertical: 12,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   textInput: {
// //     color: '#FFFFFF',
// //     flex: 1,
// //     fontSize: 14,
// //     marginRight: 8,
// //     outlineStyle: 'none' as any,
// //   },
// //   searchButton: {
// //     width: '100%',
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 9999,
// //     paddingVertical: 14,
// //     alignItems: 'center',
// //     marginTop: 4,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 8,
// //     elevation: 4,
// //   },
// //   searchButtonText: {
// //     color: '#505051',
// //     fontWeight: '700',
// //     fontSize: 16,
// //   },
// //   resultsContainer: {
// //     flex: 1,
// //     width: '100%',
// //     maxWidth: 1200,
// //     alignSelf: 'center',
// //   },
// //   resultsCount: {
// //     color: '#FFFFFF',
// //     fontSize: 14,
// //     fontWeight: '600',
// //     marginBottom: 12,
// //   },
// //   listContainer: {
// //     paddingBottom: 40,
// //   },
// //   columnWrapper: {
// //     gap: 12,
// //     marginBottom: 12,
// //   },
// //   productCard: {
// //     flex: 1,
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 12,
// //     padding: 16,
// //     marginBottom: 12,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 2,
// //   },
// //   gridItem: {
// //     marginRight: 12,
// //   },
// //   productHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 6,
// //   },
// //   productName: {
// //     fontSize: 15,
// //     fontWeight: '700',
// //     color: '#333333',
// //     flex: 1,
// //     marginRight: 8,
// //   },
// //   productPrice: {
// //     fontSize: 15,
// //     fontWeight: '700',
// //     color: '#E59400',
// //   },
// //   productDesc: {
// //     fontSize: 13,
// //     color: '#666666',
// //     marginBottom: 10,
// //     height: 36,
// //   },
// //   productFooter: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     borderTopWidth: 1,
// //     borderTopColor: '#F0F0F0',
// //     paddingTop: 8,
// //   },
// //   productCategory: {
// //     fontSize: 11,
// //     color: '#888888',
// //     fontWeight: '500',
// //   },
// //   productLocations: {
// //     fontSize: 11,
// //     color: '#555555',
// //     maxWidth: '50%',
// //   },
// //   emptyText: {
// //     color: '#FFFFFF',
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 14,
// //   },
// // });


// // newer1
// import React, { useState, useMemo, useRef, useEffect } from 'react';
// import { 
//   View, 
//   TextInput, 
//   TouchableOpacity, 
//   Text, 
//   StyleSheet, 
//   FlatList, 
//   useWindowDimensions,
//   ScrollView,
//   Pressable
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { DUMMY_PRODUCTS, Product } from '@/productData'; // Adjust path if needed

// export default function SearchView() {
//   const [searchQuery, setSearchQuery] = useState('');
  
//   // Combobox dropdown states
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [isLocationOpen, setIsLocationOpen] = useState(false);
  
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);

//   const [isSearched, setIsSearched] = useState(false);

//   // Responsive width tracking
//   const { width } = useWindowDimensions();

//   // Refs for keyboard shortcuts focus handling
//   const searchInputRef = useRef<TextInput>(null);

//   // Extract unique locations and categories dynamically from dummy data
//   const allLocations = useMemo(() => {
//     const locSet = new Set<string>();
//     DUMMY_PRODUCTS.forEach((p) => p.locations_available.forEach((loc) => locSet.add(loc)));
//     return Array.from(locSet).sort();
//   }, []);

//   const allCategories = useMemo(() => {
//     const catSet = new Set<string>();
//     DUMMY_PRODUCTS.forEach((p) => catSet.add(p.category));
//     return Array.from(catSet).sort();
//   }, []);

//   // Filter locations based on typing in the store combobox
//   const filteredLocations = useMemo(() => {
//     if (!selectedLocation) return allLocations;
//     return allLocations.filter((loc) => 
//       loc.toLowerCase().includes(selectedLocation.toLowerCase())
//     );
//   }, [allLocations, selectedLocation]);

//   // Adjust column count: 3 on wide displays (>1024px), 2 on medium/lg (768px - 1024px), 1 on mobile
//   const numColumns = width > 1024 ? 3 : width > 768 ? 2 : 1;

//   // Global shortcut for '/' to focus search input
//   useEffect(() => {
//     const handleGlobalKeyDown = (e: KeyboardEvent) => {
//       if (
//         e.key === '/' && 
//         document.activeElement !== searchInputRef.current
//       ) {
//         e.preventDefault();
//         searchInputRef.current?.focus();
//       }
//     };

//     window.addEventListener('keydown', handleGlobalKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleGlobalKeyDown);
//     };
//   }, []);

//   // Filter products based on search query, store location, and category
//   const filteredProducts = useMemo(() => {
//     return DUMMY_PRODUCTS.filter((product) => {
//       const matchesQuery = 
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.category.toLowerCase().includes(searchQuery.toLowerCase());

//       const matchesLocation = 
//         selectedLocation.trim() === '' ||
//         product.locations_available.some((loc) => 
//           loc.toLowerCase() === selectedLocation.toLowerCase() ||
//           loc.toLowerCase().includes(selectedLocation.toLowerCase())
//         );

//       const matchesCategory = 
//         selectedCategory.trim() === '' ||
//         product.category.toLowerCase() === selectedCategory.toLowerCase();

//       return matchesQuery && matchesLocation && matchesCategory;
//     });
//   }, [searchQuery, selectedLocation, selectedCategory]);

//   const handleSearch = () => {
//     setIsSearched(true);
//     setIsLocationOpen(false);
//     setIsCategoryOpen(false);
//   };

//   const renderProductItem = ({ item }: { item: Product }) => (
//     <View style={[styles.productCard, numColumns > 1 && styles.gridItem]}>
//       <View style={styles.productHeader}>
//         <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
//         {/* <Text style={styles.productPrice}>{item.price}</Text> */}
//       </View>
//        <View style={styles.productHeader}>
//         {/* <Text style={styles.productName} numberOfLines={1}>{item.name}</Text> */}
//         <Text style={styles.productPrice}>{item.price}</Text>
//       </View>
//       <Text style={styles.productDesc} numberOfLines={2}>{item.desc}</Text>
//       <View style={styles.productFooter}>
//         <Text style={styles.productCategory}>{item.category} • {item.new_or_used}</Text>
//         <Text style={styles.productLocations} numberOfLines={1}>📍 {item.locations_available.join(', ')}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardWrapper}>
//         <Text style={styles.headerTitle}>Find What You Need</Text>
//         <Text style={styles.shortcutHint}>
//           Tip: Press <Text style={styles.keyBadge}>/</Text> to search, <Text style={styles.keyBadge}>Esc</Text> to clear
//         </Text>
        
//         {/* Search Products Input */}
//         <View style={styles.inputPill}>
//           <TextInput
//             ref={searchInputRef}
//             placeholder="Search Products..."
//             placeholderTextColor="#E0E7FF"
//             style={styles.textInput}
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//             onKeyPress={(e: any) => {
//               if (e.nativeEvent.key === 'Escape') {
//                 setSearchQuery('');
//               }
//             }}
//           />
//           <Ionicons name="search-outline" size={18} color="white" />
//         </View>

//         {/* Searchable Store Combobox */}
//         <View style={styles.dropdownContainer}>
//           <View style={styles.inputPill}>
//             <TextInput
//               placeholder="Search or Select a Store..."
//               placeholderTextColor="#E0E7FF"
//               style={styles.textInput}
//               value={selectedLocation}
//               onChangeText={(text) => {
//                 setSelectedLocation(text);
//                 setIsLocationOpen(true);
//               }}
//               onFocus={() => setIsLocationOpen(true)}
//               onKeyPress={(e: any) => {
//                 if (e.nativeEvent.key === 'Escape') {
//                   setSelectedLocation('');
//                   setIsLocationOpen(false);
//                 }
//               }}
//             />
//             <TouchableOpacity onPress={() => setIsLocationOpen(!isLocationOpen)}>
//               <Ionicons name={isLocationOpen ? "chevron-up" : "chevron-down"} size={18} color="white" />
//             </TouchableOpacity>
//           </View>

//           {isLocationOpen && (
//             <View style={styles.dropdownList}>
//               <ScrollView style={styles.dropdownScroll} nestedScrollEnabled={true}>
//                 <TouchableOpacity 
//                   style={styles.dropdownItem} 
//                   onPress={() => { setSelectedLocation(''); setIsLocationOpen(false); }}
//                 >
//                   <Text style={styles.dropdownItemTextAll}>All Stores</Text>
//                 </TouchableOpacity>
//                 {filteredLocations.length > 0 ? (
//                   filteredLocations.map((loc) => (
//                     <TouchableOpacity 
//                       key={loc} 
//                       style={styles.dropdownItem}
//                       onPress={() => {
//                         setSelectedLocation(loc);
//                         setIsLocationOpen(false);
//                       }}
//                     >
//                       <Text style={styles.dropdownItemText}>{loc}</Text>
//                     </TouchableOpacity>
//                   ))
//                 ) : (
//                   <Text style={styles.noResultText}>No stores found</Text>
//                 )}
//               </ScrollView>
//             </View>
//           )}
//         </View>

//         {/* Non-Searchable Category Combobox */}
//         <View style={styles.dropdownContainer}>
//           <TouchableOpacity 
//             style={styles.inputPill} 
//             activeOpacity={0.9}
//             onPress={() => {
//               setIsCategoryOpen(!isCategoryOpen);
//               setIsLocationOpen(false);
//             }}
//           >
//             <Text style={[styles.textInput, !selectedCategory && styles.placeholderColor]}>
//               {selectedCategory ? `Category: ${selectedCategory}` : 'Filter by Category'}
//             </Text>
//             <Ionicons name={isCategoryOpen ? "chevron-up" : "chevron-down"} size={18} color="white" />
//           </TouchableOpacity>

//           {isCategoryOpen && (
//             <View style={styles.dropdownList}>
//               <ScrollView style={styles.dropdownScroll} nestedScrollEnabled={true}>
//                 <TouchableOpacity 
//                   style={styles.dropdownItem} 
//                   onPress={() => { setSelectedCategory(''); setIsCategoryOpen(false); }}
//                 >
//                   <Text style={styles.dropdownItemTextAll}>All Categories</Text>
//                 </TouchableOpacity>
//                 {allCategories.map((cat) => (
//                   <TouchableOpacity 
//                     key={cat} 
//                     style={styles.dropdownItem}
//                     onPress={() => {
//                       setSelectedCategory(cat);
//                       setIsCategoryOpen(false);
//                     }}
//                   >
//                     <Text style={styles.dropdownItemText}>{cat}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>
//             </View>
//           )}
//         </View>

//         {/* Search Action Button */}
//         <TouchableOpacity activeOpacity={0.85} style={styles.searchButton} onPress={handleSearch}>
//           <Text style={styles.searchButtonText}>Search Inventory</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Results Section */}
//       {isSearched && (
//         <View style={styles.resultsContainer}>
//           <Text style={styles.resultsCount}>
//             Found {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
//           </Text>
//           <FlatList
//             key={numColumns} // Forces re-render on layout column count changes
//             data={filteredProducts}
//             keyExtractor={(item) => item.id}
//             renderItem={renderProductItem}
//             numColumns={numColumns}
//             columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
//             contentContainerStyle={styles.listContainer}
//             showsVerticalScrollIndicator={false}
//             ListEmptyComponent={
//               <Text style={styles.emptyText}>No products found matching your criteria.</Text>
//             }
//           />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E59400',
//     paddingTop: 40,
//     paddingHorizontal: 24,
//   },
//   cardWrapper: {
//     width: '100%',
//     maxWidth: 600,
//     alignSelf: 'center',
//     alignItems: 'center',
//     gap: 12,
//     marginBottom: 20,
//     zIndex: 10,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   shortcutHint: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.8)',
//     marginBottom: 4,
//   },
//   keyBadge: {
//     fontWeight: '700',
//     backgroundColor: 'rgba(0,0,0,0.15)',
//     paddingHorizontal: 4,
//     borderRadius: 4,
//   },
//   inputPill: {
//     width: '100%',
//     backgroundColor: 'transparent',
//     borderWidth: 1.5,
//     borderColor: 'rgba(255, 255, 255, 0.6)',
//     borderRadius: 9999,
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   textInput: {
//     color: '#FFFFFF',
//     flex: 1,
//     fontSize: 14,
//     marginRight: 8,
//     outlineStyle: 'none' as any,
//   },
//   placeholderColor: {
//     color: '#E0E7FF',
//   },
//   dropdownContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   dropdownList: {
//     position: 'absolute',
//     top: 52,
//     left: 0,
//     right: 0,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     maxHeight: 180,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     elevation: 5,
//     zIndex: 100,
//     overflow: 'hidden',
//   },
//   dropdownScroll: {
//     paddingVertical: 4,
//   },
//   dropdownItem: {
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#F0F0F0',
//   },
//   dropdownItemText: {
//     fontSize: 14,
//     color: '#333333',
//   },
//   dropdownItemTextAll: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#E59400',
//   },
//   noResultText: {
//     padding: 12,
//     textAlign: 'center',
//     color: '#888888',
//     fontSize: 13,
//   },
//   searchButton: {
//     width: '100%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 9999,
//     paddingVertical: 14,
//     alignItems: 'center',
//     marginTop: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   searchButtonText: {
//     color: '#505051',
//     fontWeight: '700',
//     fontSize: 16,
//   },
//   resultsContainer: {
//     flex: 1,
//     width: '100%',
//     maxWidth: 1200,
//     alignSelf: 'center',
//   },
//   resultsCount: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '600',
//     marginBottom: 12,
//   },
//   listContainer: {
//     paddingBottom: 40,
//   },
//   columnWrapper: {
//     gap: 12,
//     marginBottom: 12,
//   },
//   productCard: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   gridItem: {
//     marginRight: 12,
//   },
//   productHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333333',
//     flex: 1,
//     marginRight: 8,
//   },
//   productPrice: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#c07d01',
//   },
//   productDesc: {
//     fontSize: 13,
//     color: '#666666',
//     marginBottom: 10,
//     height: 36,
//   },
//   productFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderTopWidth: 1,
//     borderTopColor: '#F0F0F0',
//     paddingTop: 8,
//   },
//   productCategory: {
//     fontSize: 11,
//     color: '#888888',
//     fontWeight: '500',
//   },
//   productLocations: {
//     fontSize: 11,
//     color: '#555555',
//     maxWidth: '50%',
//   },
//   emptyText: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 14,
//   },
// });


// newer2
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  FlatList, 
  useWindowDimensions,
  ScrollView, 
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DUMMY_PRODUCTS, Product } from '../../../_trash/productData'; // Adjust path if needed

export default function SearchView() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Combobox dropdown states
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // New Filter & Sort States
  const [maxPrice, setMaxPrice] = useState('50000');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [isSearched, setIsSearched] = useState(false);

  // Responsive width tracking
  const { width } = useWindowDimensions();

  // Check if running on desktop web
  const isDesktopWeb = Platform.OS === 'web' && width > 768;

  // Refs for keyboard shortcuts focus handling
  const searchInputRef = useRef<TextInput>(null);

  // Extract unique locations and categories dynamically from dummy data
  const allLocations = useMemo(() => {
    const locSet = new Set<string>();
    DUMMY_PRODUCTS.forEach((p) => p.locations_available.forEach((loc) => locSet.add(loc)));
    return Array.from(locSet).sort();
  }, []);

  const allCategories = useMemo(() => {
    const catSet = new Set<string>();
    DUMMY_PRODUCTS.forEach((p) => catSet.add(p.category));
    return Array.from(catSet).sort();
  }, []);

  // Filter locations based on typing in the store combobox
  const filteredLocations = useMemo(() => {
    if (!selectedLocation) return allLocations;
    return allLocations.filter((loc) => 
      loc.toLowerCase().includes(selectedLocation.toLowerCase())
    );
  }, [allLocations, selectedLocation]);

  // Adjust column count: 3 on wide displays (>1024px), 2 on medium/lg (768px - 1024px), 1 on mobile
  const numColumns = width > 1024 ? 3 : width > 768 ? 2 : 1;

  // Global shortcut for '/' to focus search input
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' && 
        document.activeElement !== searchInputRef.current
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);

  // Helper to parse price string like "R 4,500" into a number
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  // Filter and Sort products
  const filteredProducts = useMemo(() => {
    const result = DUMMY_PRODUCTS.filter((product) => {
      const matchesQuery = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation = 
        selectedLocation.trim() === '' ||
        product.locations_available.some((loc) => 
          loc.toLowerCase() === selectedLocation.toLowerCase() ||
          loc.toLowerCase().includes(selectedLocation.toLowerCase())
        );

      const matchesCategory = 
        selectedCategory.trim() === '' ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const productPriceNum = parsePrice(product.price);
      const maxPriceNum = parseInt(maxPrice, 10) || 50000;
      const matchesPrice = productPriceNum <= maxPriceNum;

      return matchesQuery && matchesLocation && matchesCategory && matchesPrice;
    });

    // Sort results
    return result.sort((a, b) => {
      if (sortBy === 'price-asc') {
        return parsePrice(a.price) - parsePrice(b.price);
      }
      if (sortBy === 'price-desc') {
        return parsePrice(b.price) - parsePrice(a.price);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [searchQuery, selectedLocation, selectedCategory, maxPrice, sortBy]);

  const handleSearch = () => {
    setIsSearched(true);
    setIsLocationOpen(false);
    setIsCategoryOpen(false);
    setIsSortOpen(false);
  };

  // const renderProductItem = ({ item }: { item: Product }) => (
  //   <View style={[styles.productCard, numColumns > 1 && styles.gridItem]}>
  //     <View style={styles.productHeader}>
  //       <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
  //       {/* <Text style={styles.productPrice}>{item.price}</Text> */}
  //     </View>
  //     <View style={styles.productHeader}>
  //       {/* <Text style={styles.productName} numberOfLines={1}>{item.name}</Text> */}
  //       <Text style={styles.productPrice}>{item.price}</Text>
  //     </View>

  //     <Text style={styles.productDesc} numberOfLines={2}>{item.desc}</Text>
  //     <View style={styles.productFooter}>
  //       <Text style={styles.productCategory}>{item.category} • {item.new_or_used}</Text>
  //       <Text style={styles.productLocations} numberOfLines={1}>📍 {item.locations_available.join(', ')}</Text>
  //     </View>
  //   </View>
  // );

  // const renderProductItem = ({ item }: { item: Product }) => (
  //   <View 
  //     style={[
  //       styles.productCard, 
  //       numColumns > 1 && styles.gridItem,
  //       // @ts-ignore - web hover styling support
  //       {
  //         cursor: 'pointer',
  //         // transitionProperty: 'all 0.2s ease-in-out',

  //         transitionProperty: 'all 0.8s ease',
  //       }
  //     ]}
  //     // @ts-ignore - web hover state handlers
  //     onMouseEnter={(e: any) => {
  //       e.currentTarget.style.transform = 'scale(0.9)';
  //       // e.currentTarget.style.transform = 'translateY(-4px)';

  //       e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
  //     }}
  //     // @ts-ignore - web hover out handlers
  //     onMouseLeave={(e: any) => {
  //       e.currentTarget.style.transform = 'scale(1)';
  //       // e.currentTarget.style.transform = 'scale(0.9)';

  //       // e.currentTarget.style.transform = 'translateY(0px)';
  //       e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  //     }}
  //   >
  //     <View style={styles.productHeader}>
  //       <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
  //     </View>
  //     <View style={styles.productHeader}>
  //       <Text style={styles.productPrice}>{item.price}</Text>
  //     </View>

  //     <Text style={styles.productDesc} numberOfLines={2}>{item.desc}</Text>
  //     <View style={styles.productFooter}>
  //       <Text style={styles.productCategory}>{item.category} • {item.new_or_used}</Text>
  //       <Text style={styles.productLocations} numberOfLines={1}>📍 {item.locations_available.join(', ')}</Text>
  //     </View>
  //   </View>
  // );


  // const renderProductItem = ({ item }: { item: Product }) => (
  //   <View 
  //     style={[
  //       styles.productCard, 
  //       numColumns > 1 && styles.gridItem,
  //       // @ts-ignore - web hover styling support
  //       {
  //         cursor: 'pointer',
  //         // transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

  //         transitionProperty: 'transform, box-shadow',
  //         transitionDuration: '500ms',
  //         transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  //         willChange: 'transform, box-shadow',
  //       }
  //     ]}
  //     // @ts-ignore - web hover state handlers
  //     onMouseEnter={(e: any) => {
  //       e.currentTarget.style.transform = ' scale(0.9)';
  //       e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
  //     }}
  //     // @ts-ignore - web hover out handlers
  //     onMouseLeave={(e: any) => {
  //       e.currentTarget.style.transform = ' scale(1)';
  //       e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  //     }}
  //   >
  //     <View style={styles.productHeader}>
  //       <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
  //     </View>
  //     <View style={styles.productHeader}>
  //       <Text style={styles.productPrice}>{item.price}</Text>
  //     </View>

  //     <Text style={styles.productDesc} numberOfLines={2}>{item.desc}</Text>
  //     <View style={styles.productFooter}>
  //       <Text style={styles.productCategory}>{item.category} • {item.new_or_used}</Text>
  //       <Text style={styles.productLocations} numberOfLines={1}>📍 {item.locations_available.join(', ')}</Text>
  //     </View>
  //   </View>
  // );
  

const renderProductItem = ({ item }: { item: Product }) => (
    <View 
      style={[
        styles.productCard, 
        numColumns > 1 && styles.gridItem,
        // @ts-ignore - web hover styling support
        {
          cursor: 'pointer',
          transitionProperty: 'transform, box-shadow, border-color',
          transitionDuration: '300ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform, box-shadow',
        }
      ]}
      // @ts-ignore - web hover state handlers
      onMouseEnter={(e: any) => {
        e.currentTarget.style.transform = 'scale(0.95)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
        e.currentTarget.style.borderColor = '#E59400';
      }}
      // @ts-ignore - web hover out handlers
      onMouseLeave={(e: any) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.borderColor = '#E2E8F0';
      }}
    >
      {/* Header: Name & Price Tag */}
      <View style={styles.productHeader}>
        <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
        {/* <View style={styles.priceBadge}>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View> */}
      </View>

   <View style={styles.productHeader}>
        {/* <Text style={styles.productName} numberOfLines={1}>{item.name}</Text> */}
        <View style={styles.priceBadge}>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.productDesc} numberOfLines={2}>{item.desc}</Text>

      {/* Metadata Footer: Category & Locations */}
      <View style={styles.productMeta}>
        <Text style={styles.productCategory}>
          {item.category} • <Text style={styles.conditionText}>{item.new_or_used}</Text>
        </Text>
        <Text style={styles.productLocations} numberOfLines={1}>📍 {item.locations_available.join(', ')}</Text>
      </View>

      {/* Action Button */}
      <TouchableOpacity 
        style={styles.detailsButton}
        activeOpacity={0.8}
        onPress={() => {
          // TODO: Navigate to product details page using item.id
          console.log(`Navigate to product details for ID: ${item.id}`);
        }}
      >
        <Text style={styles.detailsButtonText}>View Details</Text>
        <Ionicons name="arrow-forward" size={14} color="#E59400" />
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.container}>

      <View style={styles.cardWrapper}>
        <Text style={styles.headerTitle}>Search for products</Text>
        {/* <Text style={styles.headerTitle}>Find What You Need</Text> */}


        {/* Only displays on desktop web */}
        {isDesktopWeb && (
          <Text style={styles.shortcutHint}>
            Tip: Press 
            <Text style={styles.keyBadge}>/</Text> 
            to search, 
            <Text style={styles.keyBadge}>Esc</Text> 
            to clear
          </Text>
        )}

        {/* <Text style={styles.shortcutHint}>
          Tip: Press <Text style={styles.keyBadge}>/</Text> to search, <Text style={styles.keyBadge}>Esc</Text> to clear
        </Text> */}
        
        {/* Search Products Input */}
        <View style={styles.inputPill}>
          <TextInput
            ref={searchInputRef}
            placeholder="Search Products..."
            placeholderTextColor="#E0E7FF"
            style={styles.textInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onKeyPress={(e: any) => {
              if (e.nativeEvent.key === 'Escape') {
                setSearchQuery('');
              }
            }}
          />
          <Ionicons name="search-outline" size={18} color="white" />
        </View>

        {/* Searchable Store Combobox */}
        <View style={[styles.dropdownContainer, { zIndex: isLocationOpen ? 30 : 1 }]}>
          <View style={styles.inputPill}>
            <TextInput
              placeholder="Search or Select a Store..."
              placeholderTextColor="#E0E7FF"
              style={styles.textInput}
              value={selectedLocation}
              onChangeText={(text) => {
                setSelectedLocation(text);
                setIsLocationOpen(true);
              }}
              onFocus={() => {
                setIsLocationOpen(true);
                setIsCategoryOpen(false);
                setIsSortOpen(false);
              }}
              onKeyPress={(e: any) => {
                if (e.nativeEvent.key === 'Escape') {
                  setSelectedLocation('');
                  setIsLocationOpen(false);
                }
              }}
            />
            <TouchableOpacity onPress={() => setIsLocationOpen(!isLocationOpen)}>
              <Ionicons name={isLocationOpen ? "chevron-up" : "chevron-down"} size={18} color="white" />
            </TouchableOpacity>
          </View>

          {isLocationOpen && (
            <View style={styles.dropdownList}>
              <ScrollView style={styles.dropdownScroll} nestedScrollEnabled={true}>
                <TouchableOpacity 
                  style={styles.dropdownItem} 
                  onPress={() => { setSelectedLocation(''); setIsLocationOpen(false); }}
                >
                  <Text style={styles.dropdownItemTextAll}>All Stores</Text>
                </TouchableOpacity>
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((loc) => (
                    <TouchableOpacity 
                      key={loc} 
                      style={styles.dropdownItem}
                      onPress={() => {
                        setSelectedLocation(loc);
                        setIsLocationOpen(false);
                      }}
                    >
                      <Text style={styles.dropdownItemText}>{loc}</Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={styles.noResultText}>No stores found</Text>
                )}
              </ScrollView>
            </View>
          )}
        </View>

        {/* Non-Searchable Category Combobox */}
        <View style={[styles.dropdownContainer, { zIndex: isCategoryOpen ? 30 : 1 }]}>
          <TouchableOpacity 
            style={styles.inputPill} 
            activeOpacity={0.9}
            onPress={() => {
              setIsCategoryOpen(!isCategoryOpen);
              setIsLocationOpen(false);
              setIsSortOpen(false);
            }}
          >
            <Text style={[styles.textInput, !selectedCategory && styles.placeholderColor]}>
              {selectedCategory ? `Category: ${selectedCategory}` : 'Filter by Category'}
            </Text>
            <Ionicons name={isCategoryOpen ? "chevron-up" : "chevron-down"} size={18} color="white" />
          </TouchableOpacity>

          {isCategoryOpen && (
            <View style={styles.dropdownList}>
              <ScrollView style={styles.dropdownScroll} nestedScrollEnabled={true}>
                <TouchableOpacity 
                  style={styles.dropdownItem} 
                  onPress={() => { setSelectedCategory(''); setIsCategoryOpen(false); }}
                >
                  <Text style={styles.dropdownItemTextAll}>All Categories</Text>
                </TouchableOpacity>
                {allCategories.map((cat) => (
                  <TouchableOpacity 
                    key={cat} 
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedCategory(cat);
                      setIsCategoryOpen(false);
                    }}
                  >
                    <Text style={styles.dropdownItemText}>{cat}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}
        </View>

        {/* Max Price Filter Input */}
        <View style={styles.inputPill}>
          <TextInput
            placeholder="Max Price (e.g. 5000)..."
            placeholderTextColor="#E0E7FF"
            style={styles.textInput}
            keyboardType="numeric"
            value={maxPrice}
            onChangeText={setMaxPrice}
            onKeyPress={(e: any) => {
              if (e.nativeEvent.key === 'Escape') {
                setMaxPrice('50000');
              }
            }}
          />
          <Ionicons name="cash-outline" size={18} color="white" />
        </View>

        {/* Sorting Dropdown Combobox */}
        <View style={[styles.dropdownContainer, { zIndex: isSortOpen ? 30 : 1 }]}>
          <TouchableOpacity 
            style={styles.inputPill} 
            activeOpacity={0.9}
            onPress={() => {
              setIsSortOpen(!isSortOpen);
              setIsLocationOpen(false);
              setIsCategoryOpen(false);
            }}
          >
            <Text style={styles.textInput}>
              {sortBy === 'price-asc' ? 'Sort: Price (Low to High)' :
               sortBy === 'price-desc' ? 'Sort: Price (High to Low)' :
               sortBy === 'name' ? 'Sort: Product Name (A-Z)' : 'Sort: Default'}
            </Text>
            <Ionicons name={isSortOpen ? "chevron-up" : "chevron-down"} size={18} color="white" />
          </TouchableOpacity>

          {isSortOpen && (
            <View style={styles.dropdownList}>
              <ScrollView style={styles.dropdownScroll} nestedScrollEnabled={true}>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setSortBy('default'); setIsSortOpen(false); }}>
                  <Text style={styles.dropdownItemTextAll}>Default Sorting</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setSortBy('price-asc'); setIsSortOpen(false); }}>
                  <Text style={styles.dropdownItemText}>Price: Low to High</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setSortBy('price-desc'); setIsSortOpen(false); }}>
                  <Text style={styles.dropdownItemText}>Price: High to Low</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropdownItem} onPress={() => { setSortBy('name'); setIsSortOpen(false); }}>
                  <Text style={styles.dropdownItemText}>Name: A to Z</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
        </View>

        {/* Search Action Button */}
        <TouchableOpacity activeOpacity={0.85} style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search Inventory</Text>
        </TouchableOpacity>
      </View>

      {/* Results Section */}
      {isSearched && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsCount}>
            Found {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'}
          </Text>
          <FlatList
            key={numColumns} 
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            renderItem={renderProductItem}
            numColumns={numColumns}
            columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No products found matching your criteria.</Text>
            }
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E59400',
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
    // zIndex: 10,


        position: 'relative', 
    
    // Your other styles...
    padding: 16,
    backgroundColor: '#fff',
  },

  // === HEADING === 
  headerTitle: {
    // fontSize: 44,
    fontSize: 38,

    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  shortcutHint: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  keyBadge: {
    fontWeight: '700',
    backgroundColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  inputPill: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 9999,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 14,
    marginRight: 8,
    outlineStyle: 'none' as any,
  },
  placeholderColor: {
    color: '#E0E7FF',
  },
  dropdownContainer: {
    width: '100%',
    position: 'relative',
  },
  dropdownList: {
    position: 'absolute',
    top: 52,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    maxHeight: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },
  dropdownScroll: {
    paddingVertical: 4,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  dropdownItemText: {
    fontSize: 14,
    color: '#333333',
  },
  dropdownItemTextAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E59400',
  },
  noResultText: {
    padding: 12,
    textAlign: 'center',
    color: '#888888',
    fontSize: 13,
  },
  searchButton: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 9999,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 1, // Keep button below expanded combobox lists
  },
  searchButtonText: {
    color: '#505051',
    fontWeight: '700',
    fontSize: 16,
  },
  resultsContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  resultsCount: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  listContainer: {
    paddingBottom: 40,
  },
  columnWrapper: {
    gap: 12,
    marginBottom: 12,
  },


  // productCard: {
  //   flex: 1,
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 12,
  //   padding: 16,
  //   marginBottom: 12,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  //   elevation: 2,
  // },
  // gridItem: {
  //   marginRight: 12,
  // },
  // productHeader: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginBottom: 6,
  // },
  // productName: {
  //   fontSize: 18,
  //   fontWeight: '700',
  //   color: '#333333',
  //   flex: 1,
  //   marginRight: 8,
  // },
  // productPrice: {
  //   fontSize: 20,
  //   fontWeight: '700',
  //   color: '#b87700',
  // },
  // productDesc: {
  //   fontSize: 13,
  //   color: '#666666',
  //   marginBottom: 10,
  //   height: 36,
  // },
  // productFooter: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   borderTopWidth: 1,
  //   borderTopColor: '#F0F0F0',
  //   paddingTop: 8,
  // },
  // productCategory: {
  //   fontSize: 11,
  //   color: '#888888',
  //   fontWeight: '500',
  // },
  // productLocations: {
  //   fontSize: 11,
  //   color: '#555555',
  //   maxWidth: '50%',
  // },

  // --- newer ---
  productCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    justifyContent: 'space-between',
  },
  gridItem: {
    marginRight: 16,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    flex: 1,
  },
  priceBadge: {
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  productPrice: {
    fontSize: 18,
    // fontSize: 15,

    fontWeight: '800',
    color: '#D97706',
  },
  productDesc: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
    marginBottom: 14,
    height: 36,
  },
  productMeta: {
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 10,
    marginBottom: 12,
    gap: 4,
  },
  productCategory: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '600',
  },
  conditionText: {
    color: '#475569',
    fontWeight: '700',
  },
  productLocations: {
    fontSize: 12,
    color: '#64748B',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F8FAFC',
    backgroundColor: '#E59400',
    borderRadius: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 6,
  },
  detailsButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
    // color: '#E59400',

  },

  emptyText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
});

