import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  Pressable, 
  Image,
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  useWindowDimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface ShoppingItem {
  id: string;
  name: string;
  price: string;
  image: string;
  completed: boolean;
  category: string;
}

const INITIAL_ITEMS: ShoppingItem[] = [
  { 
    id: '1', 
    name: 'Acer Aspire Gaming Laptop', 
    price: 'R 6,499', 
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    completed: false, 
    category: 'Computers' 
  },
  { 
    id: '2', 
    name: 'Sony WH-1000XM4 Headphones', 
    price: 'R 2,999', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    completed: true, 
    category: 'Audio' 
  },
  { 
    id: '3', 
    name: 'Logitech Mechanical Keyboard', 
    price: 'R 1,299', 
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    completed: false, 
    category: 'Home Office' 
  },
];

export default function ShoppingListTodoView() {
  const [items, setItems] = useState<ShoppingItem[]>(INITIAL_ITEMS);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemImage, setNewItemImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('General');
  
  const { width } = useWindowDimensions();
  const horizontalPadding = width >= 768 ? 40 : 20;

  // Add new item with price and image
  const handleAddItem = () => {
    if (!newItemName.trim()) return;
    
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: newItemName.trim(),
      price: newItemPrice.trim() ? newItemPrice.trim() : 'R 0.00',
      image: newItemImage.trim() ? newItemImage.trim() : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      completed: false,
      category: selectedCategory,
    };

    setItems([newItem, ...items]);
    setNewItemName('');
    setNewItemPrice('');
    setNewItemImage('');
  };

  // Toggle checkbox state (complete/incomplete)
  const handleToggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete item from list
  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Calculate progress
  const completedCount = items.filter((i) => i.completed).length;
  const progressPercent = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.outerContainer, { paddingHorizontal: horizontalPadding }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerTitle}>Shopping List</Text>
            <Text style={styles.headerSubtitle}>Add items, track estimated prices, and check off as you go.</Text>
          </View>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={18} color="#E59400" />
          </Pressable>
        </View>

        {/* Progress Summary Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressInfo}>
            <Text style={styles.progressTitle}>Cart Progress</Text>
            <Text style={styles.progressCount}>{completedCount} of {items.length} items purchased</Text>
          </View>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{progressPercent}%</Text>
          </View>
        </View>

        {/* Add Item Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.formSectionTitle}>Add New Product</Text>
          
          <TextInput
            style={styles.textInput}
            placeholder="Product name (e.g. Air Fryer)"
            placeholderTextColor="#9CA3AF"
            value={newItemName}
            onChangeText={setNewItemName}
          />

          <View style={styles.rowInputs}>
            <TextInput
              style={[styles.textInput, { flex: 1, marginRight: 8 }]}
              placeholder="Estimated Price (e.g. R 1,899)"
              placeholderTextColor="#9CA3AF"
              value={newItemPrice}
              onChangeText={setNewItemPrice}
            />
            <TextInput
              style={[styles.textInput, { flex: 1, marginLeft: 8 }]}
              placeholder="Image URL (optional)"
              placeholderTextColor="#9CA3AF"
              value={newItemImage}
              onChangeText={setNewItemImage}
            />
          </View>

          <Pressable style={styles.addButton} onPress={handleAddItem}>
            <Ionicons name="add-circle-outline" size={18} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.addButtonText}>Add to Shopping List</Text>
          </Pressable>
        </View>

        {/* Todo Items List */}
        <View style={styles.listSection}>
          <Text style={styles.formSectionTitle}>Items to Buy ({items.length})</Text>

          {items.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons name="cart-outline" size={48} color="#D1D5DB" />
              <Text style={styles.emptyText}>Your shopping list is empty.</Text>
            </View>
          ) : (
            items.map((item) => (
              <Pressable
                key={item.id}
                style={[styles.todoCard, item.completed && styles.todoCardCompleted]}
                onPress={() => handleToggleItem(item.id)}
              >
                {/* Checkbox */}
                <View style={[styles.checkbox, item.completed && styles.checkboxChecked]}>
                  {item.completed && <Ionicons name="checkmark" size={14} color="#FFFFFF" />}
                </View>

                {/* Product Thumbnail */}
                <Image source={{ uri: item.image }} style={styles.productThumbnail} resizeMode="cover" />

                {/* Item Details */}
                <View style={styles.itemDetails}>
                  <Text 
                    style={[styles.itemName, item.completed && styles.itemNameCompleted]} 
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <View style={styles.itemMetaRow}>
                    <Text style={styles.itemCategory}>{item.category}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                </View>

                {/* Delete Button */}
                <Pressable 
                  onPress={(e) => {
                    e.stopPropagation();
                    handleDeleteItem(item.id);
                  }} 
                  style={styles.deleteButton}
                >
                  <Ionicons name="trash-outline" size={16} color="#9CA3AF" />
                </Pressable>
              </Pressable>
            ))
          )}
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingTop: 20,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FEF3C7',
  },
  progressCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  progressInfo: {
    flex: 1,
  },
  progressTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  progressCount: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  badgeContainer: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: '#D97706',
    fontWeight: 'bold',
    fontSize: 14,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  formSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  textInput: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 46,
    fontSize: 14,
    color: '#111827',
    marginBottom: 12,
  },
  rowInputs: {
    flexDirection: 'row',
  },
  addButton: {
    backgroundColor: '#E59400',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    marginTop: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  listSection: {
    marginTop: 4,
  },
  todoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  todoCardCompleted: {
    backgroundColor: '#F3F4F6',
    borderColor: '#E5E7EB',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  productThumbnail: {
    width: 44,
    height: 44,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#E5E7EB',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  itemNameCompleted: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  itemMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  itemCategory: {
    fontSize: 12,
    color: '#6B7280',
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 12,
    fontWeight: '600',
    color: '#D97706',
  },
  deleteButton: {
    padding: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  emptyText: {
    marginTop: 10,
    fontSize: 14,
    color: '#9CA3AF',
  },
});
