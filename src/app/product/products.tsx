import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// -----------------------------------------------

import { stylesProducts as styles } from "@/styles/products.styles"; 

import img1 from '../../images/products/product4.jpg';

// import img1 from '../../images/products/product3.jpeg';
// import img1 from '../../images/products/product1.jpeg';
// -----------------------------------------------


interface ProductItem {
  id: string;
  name: string;
  price: string;
  location: string;
}

const PRODUCTS: ProductItem[] = [
  { id: '1', name: 'Asus laptop', price: 'R 3000', location: 'Grassy Park' },
  { id: '2', name: 'Vodacom Tablet 64GB Storage', price: 'R 2100', location: 'Claremont' },
  { id: '3', name: 'Acer i5 10th Gen 512GB ROM, 8GB RAM', price: 'R 4400', location: 'Sea Point' },
  { id: '4', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
  { id: '5', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
  { id: '6', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
];

export default function ProductsView() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.whiteCardContainer}>
          
          {/* Breadcrumb Navigation */}
          <View style={styles.breadcrumbContainer}>
            <Text style={styles.breadcrumbText}>Pre-owned/Computers</Text>
          </View>

          {/* Section Heading */}
          <Text style={styles.pageTitle}>Computers</Text>
          <Text style={styles.resultsCount}>Number of results: 34</Text>

  {/* <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>Computers</Text>
          <Text style={styles.resultsCount}>Number of results: 34</Text>
        </View>
         */}
          {/* Filter Bar */}
          <View style={styles.filterBar}>
            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>Filter by</Text>
              <View style={styles.filterDropdown}>
                <Text style={styles.filterDropdownText}>Brand ⌄</Text>
              </View>
              <View style={styles.filterDropdown}>
                <Text style={styles.filterDropdownText}>Department ⌄</Text>
              </View>
            </View>
          </View>

          {/* Products Grid */}
          <View style={styles.productsGrid}>
            {PRODUCTS.map((item) => {
              const isHovered = hoveredId === item.id;

              return (
                <Pressable
                  key={item.id}
                  onHoverIn={() => setHoveredId(item.id)}
                  onHoverOut={() => setHoveredId(null)}
                  onPress={() => router.push('/product/details' as any)}
                  style={[
                    styles.productCard,
                    isHovered && styles.productCardHovered,
                  ]}
                >
                  {/* Hover Overlay with "View More Details" */}
                  {isHovered && (
                    <View style={styles.hoverOverlay}>
                      <View style={styles.hoverOverlayContent}>
                        <Text style={styles.hoverOverlayText}>View</Text>
                        <Text style={styles.hoverOverlayText}>More</Text>
                        <Text style={styles.hoverOverlayText}>Details</Text>
                      </View>
                    </View>
                  )}

                  {/* Product Image Placeholder */}
                  <View style={styles.productImagePlaceholder}>
                    {/* <Ionicons name="laptop-outline" size={40} color="#111827" /> */}

                  <Image 
                    source={img1} 
                    style={styles.productImage}
                    resizeMode="cover" />

                    {/* <Image source={img0x00} />  */}
                  </View>

                  <Text numberOfLines={2} style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <Text style={styles.productLocation}>Location: {item.location}</Text>
                </Pressable>
              );
            })}
          </View>

          {/* Pagination Footer */}
          <View style={styles.paginationContainer}>
            <TouchableOpacity style={styles.pageButtonActiveFirst}>
              <Text style={styles.pageButtonActiveText}>First</Text>
            </TouchableOpacity>
            {[1, 2, 3, 4, 5].map((page) => (
              <TouchableOpacity
                key={page}
                onPress={() => setCurrentPage(page)}
                style={[
                  styles.pageButton,
                  currentPage === page && styles.pageButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.pageButtonText,
                    currentPage === page && styles.pageButtonActiveText,
                  ]}
                >
                  {page}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.pageButton}>
              <Text style={styles.pageButtonText}>Last</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
