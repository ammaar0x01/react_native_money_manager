import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, ImageBackground, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { stylesIndex as styles } from '@/styles/index.style';
import img1 from '@/images/products/product1.jpeg';

const ALL_CATEGORIES = [
  { 
    id: 'computers', 
    name: 'Computers', 
    count: '34 items', 
    image: { uri: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'gaming', 
    name: 'Gaming', 
    count: '42 items', 
    image: { uri: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'electronics', 
    name: 'Electronics', 
    count: '56 items', 
    image: { uri: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'kitchen', 
    name: 'Kitchen', 
    count: '28 items', 
    image: { uri: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'audio', 
    name: 'Audio', 
    count: '19 items', 
    image: { uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'home-office', 
    name: 'Home Office', 
    count: '22 items', 
    image: { uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'new', 
    name: 'New Arrivals', 
    count: '15 items', 
    image: { uri: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'used', 
    name: 'Certified Used', 
    count: '31 items', 
    image: { uri: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'promotions', 
    name: 'Promotions', 
    count: '48 items', 
    image: { uri: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'phones', 
    name: 'Phones & Tablets', 
    count: '39 items', 
    image: { uri: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'tvs', 
    name: 'TVs & Displays', 
    count: '18 items', 
    image: { uri: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80' } 
  },
  { 
    id: 'tools', 
    name: 'Tools & DIY', 
    count: '25 items', 
    image: { uri: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' } 
  },
];

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Acer Aspire Gaming Laptop', price: 'R 6,499', rating: '4.8', tag: 'Best Seller', image: img1 },
  { id: '2', name: 'Sony WH-1000XM4 Headphones', price: 'R 2,999', rating: '4.9', tag: 'Top Rated', image: img1 },
  { id: '3', name: 'Logitech Mechanical Keyboard', price: 'R 1,299', rating: '4.7', tag: 'Popular', image: img1 },
  { id: '4', name: 'Instant Vortex Air Fryer', price: 'R 1,899', rating: '4.8', tag: 'Sale', image: img1 },
  { id: '5', name: 'PlayStation 5 DualSense Controller', price: 'R 1,199', rating: '4.9', tag: 'Gaming', image: img1 },
  { id: '6', name: 'Dell 27" 4K Monitor', price: 'R 4,500', rating: '4.6', tag: 'Pro', image: img1 },
];

export default function HomeView() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [isFeaturedHovered, setIsFeaturedHovered] = useState(false);

  const { width } = useWindowDimensions();

  // Determine card width percentage based on screen width thresholds
  let cardWidthPercentage = '48%'; // Medium / Small width -> 2 columns
  if (width >= 1200) {
    cardWidthPercentage = '23%'; // Extreme width -> 4 columns
  } else if (width >= 900) {
    cardWidthPercentage = '31%'; // Large width -> 3 columns
  }

  const horizontalPadding = width >= 768 ? 40 : 20;

  const handleCategoryPress = (category: typeof ALL_CATEGORIES[0]) => {
    setSelectedCategory(category.name);
    router.push({
      pathname: '/product/products',
      params: { category: category.name },
    } as any);
  };

  // Determine if the screen is narrow (e.g., mobile screens under 600px wide)
  const isNarrow = width < 600;

  return (
    <View style={[styles.outerContainer, { paddingHorizontal: horizontalPadding }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header & Subtitle */}
        {/* <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerTitle}>Explore Categories</Text>
            <Text style={styles.headerSubtitle}>Select a category to discover curated products and promotions.</Text>
          </View>
          <View style={styles.badgeContainer}>
            <Ionicons name="layers-outline" size={14} color="#E59400" />
            <Text style={styles.badgeText}>{ALL_CATEGORIES.length} Categories</Text>
          </View>
        </View> */}

<View style={[styles.headerContainer]}>
{/* <View style={[styles.headerContainer, isNarrow ? styles.headerNarrow : styles.headerWide]}> */}

      <View>
        <Text style={[styles.headerTitle, { fontSize: isNarrow ? 30 : 44 }]}>
          Explore Categories
        </Text>
        <Text style={[styles.headerSubtitle, { fontSize: isNarrow ? 13 : 15 }]}>
          Select a category to discover curated products and promotions.
        </Text>
      </View>
      
      <View style={styles.badgeContainer}>
        <Ionicons name="layers-outline" size={14} color="#E59400" />
        <Text style={styles.badgeText}>{ALL_CATEGORIES.length} Categories</Text>
      </View>
    </View>


        {/* Responsive Categories Grid */}
        <View style={styles.categoryContainer}>
          <View style={styles.categoryGrid}>
            {ALL_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              const isHovered = hoveredCardId === cat.id;

              return (
                <Pressable
                  key={cat.id}
                  style={[
                    styles.categoryCard, 
                    { width: cardWidthPercentage as any },
                    isSelected && styles.selectedCategoryCard,
                    isHovered && styles.hoveredCategoryCard,
                  ]}
                  onHoverIn={() => setHoveredCardId(cat.id)}
                  onHoverOut={() => setHoveredCardId(null)}
                  onPress={() => handleCategoryPress(cat)}
                >
                  <ImageBackground 
                    source={cat.image} 
                    style={styles.categoryBgImage} 
                    imageStyle={styles.categoryImageStyle}
                  >
                    <View style={[styles.categoryOverlay, isHovered && styles.categoryOverlayHover]}>
                      <View style={styles.countBadge}>
                        <Text style={styles.countText}>{cat.count}</Text>
                      </View>

                      <View style={styles.categoryInfo}>
                        <Text style={[styles.categoryText, isHovered && styles.categoryTextHover]} numberOfLines={1}>
                          {cat.name}
                        </Text>
                        <View style={styles.browseRow}>
                          <Text style={styles.browseText}>Browse items</Text>
                          <Ionicons 
                            name="chevron-forward" 
                            size={12} 
                            color="#FDE68A" 
                            style={[styles.chevronIcon, isHovered && styles.chevronIconHover]} 
                          />
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Featured Products Section Header */}
        <View style={styles.sectionHeaderRow}>
          <View>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <Text style={styles.sectionSubtitle}>Handpicked top quality tech & gear</Text>
          </View>
          <Pressable onPress={() => router.push('/product/products' as any)} style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See all</Text>
            <Ionicons name="arrow-forward" size={13} color="#E59400" />
          </Pressable>
        </View>

        {/* Featured Products Horizontal Scroll with Hover Scrollbar Effect */}
        {/* <View 
      
          onHoverIn={() => setIsFeaturedHovered(true)}
          onHoverOut={() => setIsFeaturedHovered(false)}
          style={styles.horizontalScrollWrapper}
        >
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={true} 
            style={[
              styles.horizontalScroll,
              {
                ...( {
                  scrollbarWidth: 'thin',
                  scrollbarColor: isFeaturedHovered ? '#E59400 transparent' : 'transparent transparent',
                } as any),
              }
            ]} 
            contentContainerStyle={{ paddingBottom: 12 }}
          >
            {FEATURED_PRODUCTS.map((item) => (
              <Pressable 
                key={item.id} 
                style={styles.productCard}
                onPress={() => router.push('/product/products' as any)}
              >
                <View style={styles.productTagBadge}>
                  <Text style={styles.productTagText}>{item.tag}</Text>
                </View>

                <View style={styles.productImagePlaceholder}>
                  <Image source={item.image} style={styles.productImage} resizeMode="cover" />
                </View>

                <View style={styles.productMetaRow}>
                  <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={11} color="#F59E0B" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>

                <View style={styles.productFooterRow}>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <View style={styles.quickAddButton}>
                    <Ionicons name="cart-outline" size={14} color="#FFFFFF" />
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View> */}

{/* Featured Products Horizontal Scroll with Hover Scrollbar Effect */}
        <Pressable 
          onHoverIn={() => setIsFeaturedHovered(true)}
          onHoverOut={() => setIsFeaturedHovered(false)}
          style={styles.horizontalScrollWrapper}
        >
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={true} 
            style={[
              styles.horizontalScroll,
              {
                ...( {
                  scrollbarWidth: 'thin',
                  scrollbarColor: isFeaturedHovered ? '#E59400 transparent' : 'transparent transparent',
                } as any),
              }
            ]} 
            contentContainerStyle={{ paddingBottom: 12 }}
          >
            {FEATURED_PRODUCTS.map((item) => (
              <Pressable 
                key={item.id} 
                style={styles.productCard}
                onPress={() => router.push('/product/products' as any)}
              >
                <View style={styles.productTagBadge}>
                  <Text style={styles.productTagText}>{item.tag}</Text>
                </View>

                <View style={styles.productImagePlaceholder}>
                  <Image source={item.image} style={styles.productImage} resizeMode="cover" />
                </View>

                <View style={styles.productMetaRow}>
                  <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={11} color="#F59E0B" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>

                <View style={styles.productFooterRow}>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <View style={styles.quickAddButton}>
                    <Ionicons name="cart-outline" size={14} color="#FFFFFF" />
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </Pressable>
        
      </ScrollView>
    </View>
  );
}
