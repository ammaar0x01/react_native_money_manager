
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
// ---------------------------------------

import { stylesCart as styles } from "@/styles/cart.styles"; 
// ---------------------------------------


interface CartItem {
  id: string;
  name: string;
  price: number;
}

export default function CartView() {
  const router = useRouter();

  // Initial cart items based on the reference design
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: '1', name: 'Asus laptop', price: 4400 },
    { id: '2', name: 'Asus laptop', price: 4400 },
    { id: '3', name: 'Asus laptop', price: 4400 },
  ]);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const removeAll = () => {
    setCartItems([]);
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.whiteCardContainer}>
          
          {/* Page Title */}
          <Text style={styles.pageTitle}>Shopping Cart</Text>

          {/* Main Layout Grid (Cart Items Left, Summary Right) */}
          <View style={styles.cartContentLayout}>
            
            {/* Left Column: Items List */}
            <View style={styles.itemsColumn}>
              {cartItems.length === 0 ? (
                <View style={styles.emptyContainer}>
                  <Ionicons name="cart-outline" size={64} color="#9CA3AF" />
                  <Text style={styles.emptyText}>Your cart is empty</Text>
                </View>
              ) : (
                cartItems.map((item, index) => (
                  <View key={`${item.id}-${index}`} style={styles.cartItemCard}>
                    {/* Product Image / Placeholder */}
                    <View style={styles.productImagePlaceholder}>
                      <Ionicons name="laptop-outline" size={32} color="#111827" />
                    </View>

                    {/* Product Details */}
                    <View style={styles.productInfo}>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text style={styles.productPrice}>R{item.price}</Text>
                    </View>

                    {/* Remove Button */}
                    <TouchableOpacity
                      onPress={() => removeItem(item.id)}
                      style={styles.removeButton}
                    >
                      <Text style={styles.removeButtonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                ))
              )}

              {/* Bottom Actions for Items */}
              {cartItems.length > 0 && (
                <View style={styles.bottomActionsRow}>
                  <View>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalValue}>R {totalAmount}</Text>
                  </View>

                  <View style={styles.actionButtonsGroup}>
                    <TouchableOpacity onPress={removeAll} style={styles.secondaryActionButton}>
                      <Text style={styles.secondaryActionText}>Remove All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => router.push('/')}
                      style={styles.secondaryActionButton}
                    >
                      <Text style={styles.secondaryActionText}>Continue Shopping</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>

            {/* Right Column: Order Summary Card */}
            <View style={styles.summaryColumn}>
              <View style={styles.orderSummaryCard}>
                <Text style={styles.summaryTitle}>Order Summary</Text>

                <View style={styles.summaryDivider} />

                <View style={styles.summaryRow}>
                  <Text style={styles.summaryKey}>Delivery:</Text>
                  <Text style={styles.summaryVal}>n/a</Text>
                </View>

                <View style={styles.summaryRow}>
                  <Text style={styles.summaryKey}>Order Total:</Text>
                  <Text style={styles.summaryValBold}>R{totalAmount}</Text>
                </View>

                <TouchableOpacity style={styles.checkoutButton}>
                  <Text style={styles.checkoutButtonText}>Secure Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

        </View>
      </ScrollView>
    </View>
  );
}
