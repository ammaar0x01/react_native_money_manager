// import React, { useState } from 'react';
// import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// // ---------------------------------------------

// import { stylesStores as styles } from '@/styles/stores.styles';
// // ---------------------------------------------


// interface StoreLocation {
//   id: string;
//   name: string;
//   street: string;
//   suburb: string;
//   city: string;
//   code: string;
//   hasImage?: boolean;
// }

// const STORES_DATA: StoreLocation[] = [
//   {
//     id: '1',
//     name: 'Adderley',
//     street: '108 Adderley Street',
//     suburb: 'Cape Town City Centre',
//     city: 'Cape Town',
//     code: '8000',
//   },
//   {
//     id: '2',
//     name: 'Adderley',
//     street: '108 Adderley Street',
//     suburb: 'Cape Town City Centre',
//     city: 'Cape Town',
//     code: '8000',
//   },
//   {
//     id: '3',
//     name: 'Adderley',
//     street: '108 Adderley Street',
//     suburb: 'Cape Town City Centre',
//     city: 'Cape Town',
//     code: '8000',
//     hasImage: true,
//   },
//   {
//     id: '4',
//     name: 'Claremont',
//     street: 'Main Road',
//     suburb: 'Claremont',
//     city: 'Cape Town',
//     code: '7700',
//   },
// ];

// export default function StoresView() {
//   const router = useRouter();
//   const { width } = useWindowDimensions();
//   const [searchQuery, setSearchQuery] = useState('');

//   const isDesktop = Platform.OS === 'web' && width >= 768;

//   const filteredStores = STORES_DATA.filter((store) =>
//     store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     store.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     store.city.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.outerContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         <View style={styles.contentWrapper}>
          
//           {/* Header Title */}
//           <Text style={styles.pageTitle}>Locations</Text>

//           {/* Search Location Input Bar */}
//           <View style={styles.searchBarContainer}>
//             <Ionicons name="search-outline" size={20} color="#6B7280" style={styles.searchIcon} />
//             <TextInput
//               placeholder="Search locations"
//               placeholderTextColor="#9CA3AF"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//               style={[
//                 styles.searchInput,
//                 ...Platform.select({
//                   web: [{ outlineStyle: 'none' as any }],
//                   default: [],
//                 }),
//               ]}
//             />
//           </View>

//           {/* Show Result Near Me Button */}
//           <TouchableOpacity style={styles.nearMeButton} activeOpacity={0.85}>
//             <Text style={styles.nearMeButtonText}>Show result near to me</Text>
//           </TouchableOpacity>

//           {/* Results Count Header */}
//           <Text style={styles.resultsCountText}>
//             Number of results: {filteredStores.length}
//           </Text>

//           {/* Store Cards Grid / List */}
//           <View style={[styles.storesGrid, isDesktop && styles.storesGridDesktop]}>
//             {filteredStores.map((store, index) => (
//               <View key={`${store.id}-${index}`} style={[styles.storeCard, isDesktop && styles.storeCardDesktop]}>
                
//                 {/* Left side details */}
//                 <View style={styles.storeDetailsContainer}>
//                   <View style={styles.storeHeaderRow}>
//                     <Text style={styles.storeName}>{store.name}</Text>
//                     {!store.hasImage && (
//                       <TouchableOpacity style={styles.directionsButtonTop}>
//                         <Text style={styles.directionsButtonTopText}>Directions</Text>
//                       </TouchableOpacity>
//                     )}
//                   </View>

//                   <Text style={styles.storeAddressLine}>{store.street}</Text>
//                   <Text style={styles.storeAddressLine}>{store.suburb}</Text>
//                   <Text style={styles.storeAddressLine}>{store.city}</Text>
//                   <Text style={styles.storeAddressLine}>{store.code}</Text>

//                   <TouchableOpacity style={styles.viewStoreDetailsButton}>
//                     <Text style={styles.viewStoreDetailsText}>View store details</Text>
//                   </TouchableOpacity>
//                 </View>

//                 {/* Right side image placeholder (matching bottom card reference) */}
//                 {store.hasImage && (
//                   <View style={styles.storeImageSection}>
//                     <View style={styles.imagePlaceholderBox} />
//                     <TouchableOpacity style={styles.directionsButtonBottom}>
//                       <Text style={styles.directionsButtonBottomText}>Directions</Text>
//                     </TouchableOpacity>
//                   </View>
//                 )}

//               </View>
//             ))}
//           </View>

//         </View>
//       </ScrollView>
//     </View>
//   );
// }



// newer1
// import React, { useState } from 'react';
// import { View, Text, ScrollView, TextInput, TouchableOpacity, Platform, useWindowDimensions, Linking } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// // ---------------------------------------------

// import { stylesStores as styles } from '@/styles/stores.styles';
// // ---------------------------------------------


// interface StoreLocation {
//   id: string;
//   name: string;
//   street: string;
//   suburb: string;
//   city: string;
//   code: string;
//   imageUrl: string;
//   mapsUrl: string;
// }

// const STORES_DATA: StoreLocation[] = [
//   {
//     id: '1',
//     name: 'Adderley',
//     street: '108 Adderley Street',
//     suburb: 'Cape Town City Centre',
//     city: 'Cape Town',
//     code: '8000',
//     imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=108+Adderley+Street+Cape+Town',
//   },
//   {
//     id: '2',
//     name: 'Claremont',
//     street: 'Main Road',
//     suburb: 'Claremont',
//     city: 'Cape Town',
//     code: '7700',
//     imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Main+Road+Claremont+Cape+Town',
//   },
//   {
//     id: '3',
//     name: 'Century City',
//     street: 'Century Boulevard',
//     suburb: 'Century City',
//     city: 'Cape Town',
//     code: '7441',
//     imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Century+City+Cape+Town',
//   },
//   {
//     id: '4',
//     name: 'Bellville',
//     street: 'Tygervalley Centre, Bill Bezuidenhout Ave',
//     suburb: 'Bellville',
//     city: 'Cape Town',
//     code: '7530',
//     imageUrl: 'https://images.unsplash.com/photo-1567449303078-57ad9952309a?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Tygervalley+Centre+Bellville',
//   },
//   {
//     id: '5',
//     name: 'Parow',
//     street: 'Voortrekker Road',
//     suburb: 'Parow',
//     city: 'Cape Town',
//     code: '7500',
//     imageUrl: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Voortrekker+Road+Parow+Cape+Town',
//   },
//   {
//     id: '6',
//     name: 'Green Point',
//     street: 'Frere Street',
//     suburb: 'Green Point',
//     city: 'Cape Town',
//     code: '8001',
//     imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19caf7bc2d0?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Green+Point+Cape+Town',
//   },
//   {
//     id: '7',
//     name: 'Sea Point',
//     street: 'Regent Road',
//     suburb: 'Sea Point',
//     city: 'Cape Town',
//     code: '8060',
//     imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Regent+Road+Sea+Point+Cape+Town',
//   },
//   {
//     id: '8',
//     name: 'Constantia',
//     street: 'Main Road',
//     suburb: 'Constantia',
//     city: 'Cape Town',
//     code: '7806',
//     imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Constantia+Cape+Town',
//   },
//   {
//     id: '9',
//     name: 'Somerset West',
//     street: 'De Beers Avenue',
//     suburb: 'Somerset West',
//     city: 'Cape Town',
//     code: '7130',
//     imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Somerset+West+Cape+Town',
//   },
//   {
//     id: '10',
//     name: 'Stellenbosch',
//     street: 'Bird Street',
//     suburb: 'Central Stellenbosch',
//     city: 'Stellenbosch',
//     code: '7600',
//     imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Bird+Street+Stellenbosch',
//   },
//   {
//     id: '11',
//     name: 'Table View',
//     street: 'Bayside Mall, Blaauwberg Road',
//     suburb: 'Table View',
//     city: 'Cape Town',
//     code: '7441',
//     imageUrl: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Bayside+Mall+Table+View',
//   },
//   {
//     id: '12',
//     name: 'Milnerton',
//     street: 'Pienaar Road',
//     suburb: 'Milnerton',
//     city: 'Cape Town',
//     code: '7441',
//     imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Milnerton+Cape+Town',
//   },
//   {
//     id: '13',
//     name: 'Woodstock',
//     street: 'Albert Road',
//     suburb: 'Woodstock',
//     city: 'Cape Town',
//     code: '7925',
//     imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Albert+Road+Woodstock+Cape+Town',
//   },
//   {
//     id: '14',
//     name: 'Rondebosch',
//     street: 'Main Road',
//     suburb: 'Rondebosch',
//     city: 'Cape Town',
//     code: '7700',
//     imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=60',
//     mapsUrl: 'https://maps.google.com/?q=Rondebosch+Cape+Town',
//   },
// ];

// export default function StoresView() {
//   const router = useRouter();
//   const { width } = useWindowDimensions();
//   const [searchQuery, setSearchQuery] = useState('');

//   const isDesktop = Platform.OS === 'web' && width >= 768;

//   const filteredStores = STORES_DATA.filter((store) =>
//     store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     store.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     store.city.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleOpenMaps = (url: string) => {
//     Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
//   };

//   return (
//     <View style={styles.outerContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         <View style={styles.contentWrapper}>
          
//           {/* Header Title */}
//           <Text style={styles.pageTitle}>Locations</Text>

//           {/* Search Location Input Bar */}
//           <View style={styles.searchBarContainer}>
//             <Ionicons name="search-outline" size={20} color="#6B7280" style={styles.searchIcon} />
//             <TextInput
//               placeholder="Search locations"
//               placeholderTextColor="#9CA3AF"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//               style={[
//                 styles.searchInput,
//                 ...Platform.select({
//                   web: [{ outlineStyle: 'none' as any }],
//                   default: [],
//                 }),
//               ]}
//             />
//           </View>

//           {/* Show Result Near Me Button */}
//           <TouchableOpacity style={styles.nearMeButton} activeOpacity={0.85}>
//             <Text style={styles.nearMeButtonText}>Show result near to me</Text>
//           </TouchableOpacity>

//           {/* Results Count Header */}
//           <Text style={styles.resultsCountText}>
//             Number of results: {filteredStores.length}
//           </Text>

//           {/* Store Cards Grid / List */}
//           <View style={[styles.storesGrid, isDesktop && styles.storesGridDesktop]}>
//             {filteredStores.map((store, index) => (
//               <View key={`${store.id}-${index}`} style={[styles.storeCard, isDesktop && styles.storeCardDesktop]}>
                
//                 {/* Left side details */}
//                 <View style={styles.storeDetailsContainer}>
//                   <View style={styles.storeHeaderRow}>
//                     <Text style={styles.storeName}>{store.name}</Text>
//                     <TouchableOpacity 
//                       style={styles.directionsButtonTop}
//                       onPress={() => handleOpenMaps(store.mapsUrl)}
//                     >
//                       <Text style={styles.directionsButtonTopText}>Directions</Text>
//                     </TouchableOpacity>
//                   </View>

//                   <Text style={styles.storeAddressLine}>{store.street}</Text>
//                   <Text style={styles.storeAddressLine}>{store.suburb}</Text>
//                   <Text style={styles.storeAddressLine}>{store.city}</Text>
//                   <Text style={styles.storeAddressLine}>{store.code}</Text>

//                   <TouchableOpacity style={styles.viewStoreDetailsButton}>
//                     <Text style={styles.viewStoreDetailsText}>View store details</Text>
//                   </TouchableOpacity>
//                    <TouchableOpacity style={styles.viewStoreDetailsButton}>
//                     <Text style={styles.viewStoreDetailsText}>View store details</Text>
//                   </TouchableOpacity>
//                 </View>

//                 {/* Right side image & directions button */}
//                 <View style={styles.storeImageSection}>
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img src={store.imageUrl} alt={store.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
//                   <TouchableOpacity 
//                     style={styles.directionsButtonBottom}
//                     onPress={() => handleOpenMaps(store.mapsUrl)}
//                   >
//                     <Text style={styles.directionsButtonBottomText}>Directions</Text>
//                   </TouchableOpacity>
//                 </View>

//               </View>
//             ))}
//           </View>

//         </View>
//       </ScrollView>
//     </View>
//   );
// }




// newer2
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Platform, useWindowDimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// ---------------------------------------------

import { stylesStores as styles } from '@/styles/stores.styles';
// ---------------------------------------------

interface StoreLocation {
  id: string;
  name: string;
  street: string;
  suburb: string;
  city: string;
  code: string;
  imageUrl: string;
  mapsUrl: string;
}

const STORES_DATA: StoreLocation[] = [
  {
    id: '1',
    name: 'Adderley',
    street: '108 Adderley Street',
    suburb: 'Cape Town City Centre',
    city: 'Cape Town',
    code: '8000',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=108+Adderley+Street+Cape+Town',
  },
  {
    id: '2',
    name: 'Claremont',
    street: 'Main Road',
    suburb: 'Claremont',
    city: 'Cape Town',
    code: '7700',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Main+Road+Claremont+Cape+Town',
  },
  {
    id: '3',
    name: 'Century City',
    street: 'Century Boulevard',
    suburb: 'Century City',
    city: 'Cape Town',
    code: '7441',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Century+City+Cape+Town',
  },
  {
    id: '4',
    name: 'Bellville',
    street: 'Tygervalley Centre, Bill Bezuidenhout Ave',
    suburb: 'Bellville',
    city: 'Cape Town',
    code: '7530',
    imageUrl: 'https://images.unsplash.com/photo-1567449303078-57ad9952309a?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Tygervalley+Centre+Bellville',
  },
  {
    id: '5',
    name: 'Parow',
    street: 'Voortrekker Road',
    suburb: 'Parow',
    city: 'Cape Town',
    code: '7500',
    imageUrl: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Voortrekker+Road+Parow+Cape+Town',
  },
  {
    id: '6',
    name: 'Green Point',
    street: 'Frere Street',
    suburb: 'Green Point',
    city: 'Cape Town',
    code: '8001',
    imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19caf7bc2d0?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Green+Point+Cape+Town',
  },
  {
    id: '7',
    name: 'Sea Point',
    street: 'Regent Road',
    suburb: 'Sea Point',
    city: 'Cape Town',
    code: '8060',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Regent+Road+Sea+Point+Cape+Town',
  },
  {
    id: '8',
    name: 'Constantia',
    street: 'Main Road',
    suburb: 'Constantia',
    city: 'Cape Town',
    code: '7806',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Constantia+Cape+Town',
  },
  {
    id: '9',
    name: 'Somerset West',
    street: 'De Beers Avenue',
    suburb: 'Somerset West',
    city: 'Cape Town',
    code: '7130',
    imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Somerset+West+Cape+Town',
  },
  {
    id: '10',
    name: 'Stellenbosch',
    street: 'Bird Street',
    suburb: 'Central Stellenbosch',
    city: 'Stellenbosch',
    code: '7600',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Bird+Street+Stellenbosch',
  },
  {
    id: '11',
    name: 'Table View',
    street: 'Bayside Mall, Blaauwberg Road',
    suburb: 'Table View',
    city: 'Cape Town',
    code: '7441',
    imageUrl: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Bayside+Mall+Table+View',
  },
  {
    id: '12',
    name: 'Milnerton',
    street: 'Pienaar Road',
    suburb: 'Milnerton',
    city: 'Cape Town',
    code: '7441',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Milnerton+Cape+Town',
  },
  {
    id: '13',
    name: 'Woodstock',
    street: 'Albert Road',
    suburb: 'Woodstock',
    city: 'Cape Town',
    code: '7925',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Albert+Road+Woodstock+Cape+Town',
  },
  {
    id: '14',
    name: 'Rondebosch',
    street: 'Main Road',
    suburb: 'Rondebosch',
    city: 'Cape Town',
    code: '7700',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=60',
    mapsUrl: 'https://maps.google.com/?q=Rondebosch+Cape+Town',
  },
];

export default function StoresView() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState('');

  // const isDesktop = Platform.OS === 'web' && width >= 768;

  const filteredStores = STORES_DATA.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.suburb.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenMaps = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };


  // Wide screen layout triggers at 1024px+ for 3 items per row
  const isDesktop = Platform.OS === 'web' && width >= 1024;
  
  // Hide images when screen is narrow (md or small screens)
  // const showImage = width >= 768;
  const showImage = width >= 1200;



  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          
          {/* Header Title */}
          <Text style={styles.pageTitle}>Stores</Text>
          {/* <Text style={styles.pageTitle}>Locations</Text> */}


          {/* Search Location Input Bar */}
          <View style={styles.searchBarContainer}>
            <Ionicons name="search-outline" size={20} color="#6B7280" style={styles.searchIcon} />
            <TextInput
              placeholder="Search locations"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={[
                styles.searchInput,
                ...Platform.select({
                  web: [{ outlineStyle: 'none' as any }],
                  default: [],
                }),
              ]}
            />
          </View>

          {/* Show Result Near Me Button */}
          <TouchableOpacity style={styles.nearMeButton} activeOpacity={0.85}>
            <Text style={styles.nearMeButtonText}>Search</Text>
            {/* <Text style={styles.nearMeButtonText}>Show result near to me</Text> */}

          </TouchableOpacity>

          {/* Results Count Header */}
          <Text style={styles.resultsCountText}>
            Number of results: {filteredStores.length}
          </Text>

          {/* Store Cards Grid / List */}
          <View style={[styles.storesGrid, isDesktop && styles.storesGridDesktop]}>
            {filteredStores.map((store, index) => (
              <View 
                key={`${store.id}-${index}`} 
                style={[
                  styles.storeCard, 
                  isDesktop && styles.storeCardDesktop,
                  !isDesktop && styles.storeCardMobile,
                  // @ts-ignore - web hover styling support
                  {
                    cursor: 'pointer',
                    transitionProperty: 'transform, box-shadow',
                    transitionDuration: '250ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }
                ]}
                // @ts-ignore - web hover state handlers
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.transform = 'scale(0.95)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)';
                }}
                // @ts-ignore - web hover out handlers
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                
                {/* Card Content Structure */}
                <View style={[styles.storeInnerContainer, isDesktop ? styles.rowLayout : styles.columnLayout]}>
                  
                  {/* Left Section: Name, Address, Details, and Directions */}
                  <View style={styles.storeDetailsContainer}>
                    <Text style={styles.storeName}>{store.name}</Text>

                    <View style={styles.addressBlock}>
                      <Text style={styles.storeAddressLine}>{store.street}</Text>
                      <Text style={styles.storeAddressLine}>{store.suburb}</Text>
                      <Text style={styles.storeAddressLine}>{store.city}</Text>
                      <Text style={styles.storeAddressLine}>{store.code}</Text>
                    </View>

                    <View style={styles.actionsContainer}>
                      <TouchableOpacity style={styles.viewStoreDetailsButton}>
                        <Text style={styles.viewStoreDetailsText}>View store details</Text>
                      </TouchableOpacity>

                      <TouchableOpacity 
                        style={styles.directionsButton}
                        onPress={() => handleOpenMaps(store.mapsUrl)}
                      >
                        <Text style={styles.directionsButtonText}>Directions</Text>
                      </TouchableOpacity>
                    </View>
                  </View>


{/* 
                  <View style={styles.storeImageSection}>
                    <img 
                      src={store.imageUrl} 
                      alt={store.name} 
                      style={{ 
                        width: '100%', 
                        height: '130px', 
                        objectFit: 'cover', 
                        borderRadius: 8 
                      }} 
                    />
                  </View> */}

                  {/* Right Section: Image (Hidden on MD / Small screens) */}
                  {showImage && (
                    <View style={styles.storeImageSection}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={store.imageUrl} 
                        alt={store.name} 
                        style={{ 
                          width: '100%', 
                          height: '110px', 
                          objectFit: 'cover', 
                          borderRadius: 8 
                        }} 
                      />
                    </View>
                  )}

                </View>

              </View>
            ))}
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

