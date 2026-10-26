import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// -----------------------------------------------

import { stylesProductDetails as styles } from "@/styles/productDetails.styles"

import img1 from '../../images/products/product4.jpg';
import img10 from '../../images/products/product1.jpeg';
import img11 from '../../images/products/product3.jpeg';
import img12 from '../../images/products/product5.jpeg';
// -----------------------------------------------


const RELATED_PRODUCTS = [
  { id: '1', name: 'Phone cover', price: 'R 100', location: 'Atlantis', image: img10 },
  { id: '2', name: 'Phone cover', price: 'R 100', location: 'Atlantis',  image: img11 },
  { id: '3', name: 'Phone cover', price: 'R 100', location: 'Atlantis',  image: img12 },
];

export default function ProductDetailsView() {
  const router = useRouter();

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.whiteCardContainer}>
          
          {/* Breadcrumb Navigation */}
          <View style={styles.breadcrumbContainer}>
            <Text style={styles.breadcrumbText}>Pre-owned / Computers / Asus laptop</Text>
          </View>

          {/* Top Section: Image & Purchase Details */}
          <View style={styles.productMainRow}>
            
            {/* --- Adding conditional rendering? --- */}
            {/* Product Image Placeholder */}
            {/* <View style={styles.imagePreviewBox}>
              <Ionicons name="laptop-outline" size={72} color="#111827" />
              <Text style={styles.imagePreviewSub}>ASUS ZenBook 14</Text>
            </View> */}

        <View style={styles.productImagePlaceholder}>
            {/* <View style={styles.imagePreviewBox}> */}

                    {/* <Ionicons name="laptop-outline" size={40} color="#111827" /> */}

                  <Image 
                    source={img1} 
                    style={styles.productImage}
                    resizeMode="cover" 
                    />

                    {/* <Image source={img0x00} />  */}
                  </View>


            {/* Product Details & Purchase Controls */}
            <View style={styles.productInfoColumn}>
              <Text style={styles.productTitle}>
                ASUS ZenBook S14 UX3405 Intel® Core™ Ultra 9 285H 16GB RAM 1TB SSD Laptop
              </Text>

              <Text style={styles.productPrice}>R 4400</Text>

              <TouchableOpacity
                onPress={() => router.push('/cart' as any)}
                style={styles.addToCartButton}
              >
                <Text style={styles.addToCartText}>Add to cart</Text>
              </TouchableOpacity>

              {/* Selected Store Info */}
              <View style={styles.storeContainer}>
                <Text style={styles.storeLabel}>Selected store</Text>
                <Text style={styles.storeName}>Cash Crusaders, Pretoria CBD</Text>
                <TouchableOpacity>
                  <Text style={styles.viewLocationLink}>View location</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

          {/* More Details Box */}
          <View style={styles.specsBox}>
            <Text style={styles.specsTitle}>More Details</Text>
            <View style={styles.specsDivider} />
            <Text style={styles.specItem}>• Windows 11 Pro</Text>
            <Text style={styles.specItem}>• 14 Inch 3K (2880 × 1800) OLED display</Text>
            <Text style={styles.specItem}>• 16GB RAM, 1 TB SSD ROM</Text>
          </View>

          {/* You May Also Like Section */}
          <View style={styles.recommendationsSection}>
            <Text style={styles.sectionHeading}>You may also like</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {RELATED_PRODUCTS.map((prod) => (
                <View key={prod.id} style={styles.recommendationCard}>
                  <View style={styles.recImagePlaceholder}>
                    {/* <Ionicons name="laptop-outline" size={32} color="#111827" /> */}

                     <Image 
                    source={prod.image} 
                    style={styles.productImageMore}
                    resizeMode="cover" 
                    />

                  </View>
                  <Text numberOfLines={1} style={styles.recName}>{prod.name}</Text>
                  <Text style={styles.recPrice}>{prod.price}</Text>
                  <Text style={styles.recLocation}>Location: {prod.location}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
