
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

export default function AccountView() {
  // const router = useRouter();
  const { width } = useWindowDimensions();
  const [searchOptionsQuery, setSearchOptionsQuery] = useState('');

  const isDesktop = Platform.OS === 'web' && width >= 768;

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[styles.contentWrapper, isDesktop && styles.contentWrapperDesktop]}>
          
          {/* Header Title */}
          <Text style={styles.pageTitle}>My Account</Text>

          {/* Search Options Input Bar */}
          <View style={styles.searchBarContainer}>
            <TextInput
              placeholder="Search options"
              placeholderTextColor="#9CA3AF"
              value={searchOptionsQuery}
              onChangeText={setSearchOptionsQuery}
              style={[
                styles.searchInput,
                ...Platform.select({
                  web: [{ outlineStyle: 'none' as any }],
                  default: [],
                }),
              ]}
            />
          </View>

          {/* Profile Options List */}
          <View style={styles.optionsContainer}>
            
            {/* My Orders Button */}
            <TouchableOpacity style={styles.optionCard} activeOpacity={0.8}>
              <Text style={styles.optionCardText}>My Orders</Text>
            </TouchableOpacity>

            {/* Saved Products Button */}
            <TouchableOpacity style={styles.optionCard} activeOpacity={0.8}>
              <Text style={styles.optionCardText}>Saved Products</Text>
            </TouchableOpacity>

            {/* Personal Information Button */}
            <TouchableOpacity style={styles.optionCard} activeOpacity={0.8}>
              <Text style={styles.optionCardText}>Personal Information</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.optionCard} activeOpacity={0.8}>
              <Text style={styles.optionCardText}>Log Out</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}
// =========================================================

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    // backgroundColor: '#FFE8B6', // Warm cream background matching image
    backgroundColor: '#ffffff', // Warm cream background matching image

    // padding: 16,
    padding: 40,

  },
  scrollContent: {
    paddingBottom: 60,
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    paddingTop: 12,
  },
  contentWrapperDesktop: {
    maxWidth: 700,
  },
  pageTitle: {
    // fontSize: 32,
    fontSize: 44,

    // fontWeight: '800',
    fontWeight: '900',

    color: '#111827',
    marginBottom: 24,
    textAlign: 'center',
  
    // fontFamily: 'serif',
  },

  searchBarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 28,
    
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    fontSize: 18, 
    // fontSize: 15,
    
    color: '#111827',
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 16,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  optionCardText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
});
