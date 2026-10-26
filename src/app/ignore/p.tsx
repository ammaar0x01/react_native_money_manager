import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const RELATED_PRODUCTS = [
  { id: '1', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
  { id: '2', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
  { id: '3', name: 'Phone cover', price: 'R 100', location: 'Atlantis' },
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
            
            {/* Product Image Placeholder */}
            <View style={styles.imagePreviewBox}>
              <Ionicons name="laptop-outline" size={72} color="#111827" />
              <Text style={styles.imagePreviewSub}>ASUS ZenBook 14</Text>
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
                    <Ionicons name="laptop-outline" size={32} color="#111827" />
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

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#E59400',
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  whiteCardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  breadcrumbContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  breadcrumbText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
  productMainRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  imagePreviewBox: {
    flex: 1,
    minWidth: 280,
    height: 260,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreviewSub: {
    marginTop: 8,
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  productInfoColumn: {
    flex: 1.2,
    minWidth: 280,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
    lineHeight: 30,
  },
  productPrice: {
    fontSize: 26,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 20,
  },
  addToCartButton: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  addToCartText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  storeContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  storeLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  storeName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginTop: 2,
    marginBottom: 4,
  },
  viewLocationLink: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
  },
  specsBox: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  specsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  specsDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 12,
  },
  specItem: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 6,
  },
  recommendationsSection: {
    marginTop: 10,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  horizontalScroll: {
    paddingBottom: 8,
  },
  recommendationCard: {
    width: 170,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
  },
  recImagePlaceholder: {
    width: '100%',
    height: 100,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  recName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  recPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  recLocation: {
    fontSize: 12,
    color: '#6B7280',
  },
});
