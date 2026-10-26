
import React, { useState, useEffect } from 'react';
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
  useWindowDimensions,
  Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ShoppingItem {
  id: string;
  name: string;
  price: string;
  image: string;
  completed: boolean;
  category: string;
}

interface SavedShoppingList {
  id: string;
  name: string;
  items: ShoppingItem[];
}

const STORAGE_KEY = '@shopping_lists_storage';

const INITIAL_LISTS: SavedShoppingList[] = [
  {
    id: 'list-1',
    name: 'Tech & Gadgets',
    items: [
      { 
        id: '1', 
        name: 'Acer Aspire Gaming Laptop', 
        price: 'R 6,499', 
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        completed: false, 
        category: 'Computers' 
      },
    ]
  }
];

// export default function ShoppingListsManagerView() {

// export default function ShoppingListView() {

export default function ShoppingView() {
  const [lists, setLists] = useState<SavedShoppingList[]>(INITIAL_LISTS);
  const [activeListId, setActiveListId] = useState<string>(INITIAL_LISTS[0].id);
  
  // New List Form State
  const [showNewListInput, setShowNewListInput] = useState(false);
  const [newListName, setNewListName] = useState('');

  // New Item Form State
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemImage, setNewItemImage] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('General');

  const { width } = useWindowDimensions();
  const horizontalPadding = width >= 768 ? 40 : 20;

  // 1. LOAD stored lists from AsyncStorage on component mount (Offline First)
  useEffect(() => {
    loadStoredLists();
  }, []);

  const loadStoredLists = async () => {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const parsedLists: SavedShoppingList[] = JSON.parse(storedData);
        if (parsedLists && parsedLists.length > 0) {
          setLists(parsedLists);
          setActiveListId(parsedLists[0].id);
        }
      } else {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LISTS));
      }
    } catch (error) {
      console.error('Failed to load shopping lists offline', error);
    }
  };

  // Helper function to update state and persist to AsyncStorage simultaneously
  const saveListsToStorage = async (updatedLists: SavedShoppingList[]) => {
    try {
      setLists(updatedLists);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLists));
    } catch (error) {
      console.error('Failed to save shopping lists offline', error);
    }
  };

  // Find the currently selected list
  const activeList = lists.find((l) => l.id === activeListId) || lists[0];

  // Option A: Take a photo with the device camera
  const handleTakePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "Camera access is required to take product photos.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setNewItemImage(result.assets[0].uri);
    }
  };

  // Option B: Upload/Pick an image from the device library
  const handlePickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "Media library access is required to upload product photos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setNewItemImage(result.assets[0].uri);
    }
  };

  // Create a new saved shopping list (CREATE)
  const handleCreateNewList = () => {
    if (!newListName.trim()) return;
    const newList: SavedShoppingList = {
      id: Date.now().toString(),
      name: newListName.trim(),
      items: [],
    };
    const updatedLists = [...lists, newList];
    saveListsToStorage(updatedLists);
    setActiveListId(newList.id);
    setNewListName('');
    setShowNewListInput(false);
  };

  // Delete a saved list (DELETE)
  const handleDeleteList = (listId: string) => {
    if (lists.length <= 1) return;
    const updatedLists = lists.filter((l) => l.id !== listId);
    saveListsToStorage(updatedLists);
    if (activeListId === listId) {
      setActiveListId(updatedLists[0].id);
    }
  };

  // Add item to the active list (UPDATE)
  const handleAddItem = () => {
    if (!newItemName.trim()) return;
    
    const formattedPrice = newItemPrice.trim() 
      ? (newItemPrice.startsWith('R') ? newItemPrice.trim() : `R ${newItemPrice.trim()}`) 
      : 'R 0.00';

    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      name: newItemName.trim(),
      price: formattedPrice,
      image: newItemImage.trim() ? newItemImage.trim() : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      completed: false,
      category: newItemCategory,
    };

    const updatedLists = lists.map((l) => {
      if (l.id === activeListId) {
        return { ...l, items: [newItem, ...l.items] };
      }
      return l;
    });

    saveListsToStorage(updatedLists);
    setNewItemName('');
    setNewItemPrice('');
    setNewItemImage('');
  };

  // Toggle checkbox state in active list (UPDATE)
  const handleToggleItem = (itemId: string) => {
    const updatedLists = lists.map((l) => {
      if (l.id === activeListId) {
        const updatedItems = l.items.map((item) =>
          item.id === itemId ? { ...item, completed: !item.completed } : item
        );
        return { ...l, items: updatedItems };
      }
      return l;
    });
    saveListsToStorage(updatedLists);
  };

  // Delete item from active list (DELETE)
  const handleDeleteItem = (itemId: string) => {
    const updatedLists = lists.map((l) => {
      if (l.id === activeListId) {
        return { ...l, items: l.items.filter((item) => item.id !== itemId) };
      }
      return l;
    });
    saveListsToStorage(updatedLists);
  };

  // Progress calculations
  const completedCount = activeList.items.filter((i) => i.completed).length;
  const totalCount = activeList.items.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.outerContainer, { paddingHorizontal: horizontalPadding }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerTitle}>Saved Shopping Lists</Text>
            <Text style={styles.headerSubtitle}>Offline-first storage with camera & upload features.</Text>
          </View>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={18} color="#E59400" />
          </Pressable>
        </View>

        {/* Saved Lists Selector Bar */}
        <View style={styles.savedListsSection}>
          <View style={styles.savedListsHeaderRow}>
            <Text style={styles.sectionLabel}>Your Lists ({lists.length})</Text>
            <Pressable 
              style={styles.newListTrigger} 
              onPress={() => setShowNewListInput(!showNewListInput)}
            >
              <Ionicons name={showNewListInput ? "close" : "add"} size={14} color="#E59400" />
              <Text style={styles.newListTriggerText}>{showNewListInput ? "Cancel" : "New List"}</Text>
            </Pressable>
          </View>

          {showNewListInput && (
            <View style={styles.newListForm}>
              <TextInput
                style={[styles.textInput, { flex: 1, marginBottom: 0, marginRight: 8 }]}
                placeholder="List Name (e.g. Groceries)"
                placeholderTextColor="#9CA3AF"
                value={newListName}
                onChangeText={setNewListName}
                onSubmitEditing={handleCreateNewList}
              />
              <Pressable style={styles.createListButton} onPress={handleCreateNewList}>
                <Text style={styles.createListButtonText}>Save List</Text>
              </Pressable>
            </View>
          )}

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listsScrollRow}>
            {lists.map((list) => {
              const isActive = list.id === activeListId;
              return (
                <Pressable
                  key={list.id}
                  style={[styles.listPill, isActive && styles.listPillActive]}
                  onPress={() => setActiveListId(list.id)}
                >
                  <Ionicons 
                    name={isActive ? "folder-open" : "folder-outline"} 
                    size={14} 
                    color={isActive ? "#FFFFFF" : "#4B5563"} 
                    style={{ marginRight: 6 }}
                  />
                  <Text style={[styles.listPillText, isActive && styles.listPillTextActive]}>
                    {list.name} ({list.items.length})
                  </Text>
                  
                  {lists.length > 1 && (
                    <Pressable 
                      onPress={(e) => {
                        e.stopPropagation();
                        handleDeleteList(list.id);
                      }}
                      style={styles.deleteListIcon}
                    >
                      <Ionicons name="close-circle" size={14} color={isActive ? "#FDE68A" : "#9CA3AF"} />
                    </Pressable>
                  )}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressInfo}>
            <Text style={styles.progressTitle}>{activeList.name}</Text>
            <Text style={styles.progressCount}>{completedCount} of {totalCount} items purchased</Text>
          </View>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{progressPercent}%</Text>
          </View>
        </View>

        {/* Add Item Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.formSectionTitle}>Add Item to "{activeList.name}"</Text>
          
          <TextInput
            style={styles.textInput}
            placeholder="Product name (e.g. Mechanical Keyboard)"
            placeholderTextColor="#9CA3AF"
            value={newItemName}
            onChangeText={setNewItemName}
          />

          <TextInput
            style={[styles.textInput, { marginBottom: 12 }]}
            placeholder="Estimated Price (e.g. 1299)"
            placeholderTextColor="#9CA3AF"
            value={newItemPrice}
            onChangeText={setNewItemPrice}
            keyboardType="decimal-pad"
          />

          {/* Action Buttons for Image Source: Take Photo OR Upload from Device */}
{/* Only show 'Take Photo' on native mobile devices (iOS / Android) */}
{/* {Platform.OS !== 'web' && (
  <Pressable style={styles.imageActionButton} onPress={handleTakePhoto}>
    <Ionicons name="camera-outline" size={18} color="#D97706" />
    <Text style={styles.imageActionText}>Take Photo</Text>
  </Pressable>
)}

{/* Upload Image is available on both web and mobile */}
{/* <Pressable style={styles.imageActionButton} onPress={handlePickImage}>
  <Ionicons name="image-outline" size={18} color="#D97706" />
  <Text style={styles.imageActionText}>Upload Image</Text>
</Pressable>  */}

          <Text style={styles.inputSubLabel}>Attach Product Image</Text>
          <View style={styles.imageActionRow}>
            <Pressable style={styles.imageActionButton} onPress={handleTakePhoto}>
              <Ionicons name="camera-outline" size={18} color="#D97706" />
              <Text style={styles.imageActionText}>Take Photo</Text>
            </Pressable>

            <Pressable style={styles.imageActionButton} onPress={handlePickImage}>
              <Ionicons name="image-outline" size={18} color="#D97706" />
              <Text style={styles.imageActionText}>Upload Image</Text>
            </Pressable>
          </View>

          {/* Photo Preview if attached */}
          {newItemImage !== '' && (
            <View style={styles.previewContainer}>
              <Image source={{ uri: newItemImage }} style={styles.photoPreview} resizeMode="cover" />
              <View style={styles.previewMeta}>
                <Text style={styles.previewLabel}>Image attached successfully</Text>
                <Pressable onPress={() => setNewItemImage('')}>
                  <Text style={styles.removePhotoText}>Remove</Text>
                </Pressable>
              </View>
            </View>
          )}

          <Pressable style={styles.addButton} onPress={handleAddItem}>
            <Ionicons name="add-circle-outline" size={18} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.addButtonText}>Add to List</Text>
          </Pressable>
        </View>

        {/* Items List */}
        <View style={styles.listSection}>
          <Text style={styles.formSectionTitle}>Items in this List ({totalCount})</Text>

          {totalCount === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons name="cart-outline" size={48} color="#D1D5DB" />
              <Text style={styles.emptyText}>This list is currently empty.</Text>
            </View>
          ) : (
            activeList.items.map((item) => (
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
  savedListsSection: {
    marginBottom: 20,
  },
  savedListsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  newListTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  newListTriggerText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#D97706',
    marginLeft: 4,
  },
  newListForm: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  createListButton: {
    backgroundColor: '#E59400',
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 10,
    height: 46,
  },
  createListButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  listsScrollRow: {
    flexDirection: 'row',
  },
  listPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 8,
  },
  listPillActive: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  listPillText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  listPillTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  deleteListIcon: {
    marginLeft: 6,
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
  inputSubLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: 6,
  },
  imageActionRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  imageActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF3C7',
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 6,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  imageActionText: {
    color: '#D97706',
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 6,
  },
  previewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 8,
    borderRadius: 10,
    marginBottom: 12,
  },
  photoPreview: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 10,
  },
  previewMeta: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  previewLabel: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },
  removePhotoText: {
    fontSize: 13,
    color: '#EF4444',
    fontWeight: '600',
  },
  addButton: {
    backgroundColor: '#E59400',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
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


