import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  Pressable, 
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
  completed: boolean;
  category: string;
}

const INITIAL_ITEMS: ShoppingItem[] = [
  { id: '1', name: 'Acer Aspire Gaming Laptop', completed: false, category: 'Computers' },
  { id: '2', name: 'Sony WH-1000XM4 Headphones', completed: true, category: 'Audio' },
  { id: '3', name: 'Logitech Mechanical Keyboard', completed: false, category: 'Home Office' },
  { id: '4', name: 'Instant Vortex Air Fryer', completed: false, category: 'Kitchen' },
];

export default function ShoppingListTodoView() {
  const [items, setItems] = useState<ShoppingItem[]>(INITIAL_ITEMS);
  const [newItemText, setNewItemText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('General');
  const { width } = useWindowDimensions();

  const horizontalPadding = width >= 768 ? 40 : 20;

  // Add new item to the shopping list (to-do style)
  const handleAddItem = () => {
    if (!newItemText.trim()) return;
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: newItemText.trim(),
      completed: false,
      category: selectedCategory,
    };
    setItems([newItem, ...items]);
    setNewItemText('');
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
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerTitle}>Shopping List</Text>
          <Text style={styles.headerSubtitle}>Check off items as you grab them in-store.</Text>
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

      {/* Add Item Input Section */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new item to buy..."
          placeholderTextColor="#9CA3AF"
          value={newItemText}
          onChangeText={setNewItemText}
          onSubmitEditing={handleAddItem}
        />
        <Pressable style={styles.addButton} onPress={handleAddItem}>
          <Ionicons name="add" size={20} color="#FFFFFF" />
        </Pressable>
      </View>

      {/* Todo Items List */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
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

              {/* Item Details */}
              <View style={styles.itemDetails}>
                <Text 
                  style={[styles.itemName, item.completed && styles.itemNameCompleted]} 
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <Text style={styles.itemCategory}>{item.category}</Text>
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
    marginBottom: 16,
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
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 48,
    fontSize: 15,
    color: '#111827',
  },
  addButton: {
    backgroundColor: '#E59400',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 10,
    marginLeft: 8,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  todoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
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
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937',
  },
  itemNameCompleted: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  itemCategory: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  deleteButton: {
    padding: 6,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 14,
    color: '#9CA3AF',
  },
});

