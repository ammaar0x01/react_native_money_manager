
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
//   SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { GlobalStyles } from '@/global.styles';
import { stylesNotes as styles } from '@/styles/notes.styles';
// ----------------------------------------------

const STORAGE_KEY = '@notes_app_data';

interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

export default function NotesScreen() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes) as Note[]);
      }
    } catch (error) {
      console.error('Failed to load notes.');
    }
  };

  const saveNotesToStorage = async (updatedNotes: Note[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Failed to save notes.');
    }
  };

  const handleSaveNote = () => {
    if (!title.trim() && !content.trim()) {
      if (Platform.OS === 'web') {
        window.alert('Note cannot be empty.');
      } else {
        Alert.alert('Validation', 'Note cannot be empty.');
      }
      return;
    }

    const timestamp = new Date().toLocaleString();

    if (currentNoteId) {
      const updatedNotes: Note[] = notes.map((note) =>
        note.id === currentNoteId
          ? { ...note, title, content, updatedAt: timestamp }
          : note
      );
      saveNotesToStorage(updatedNotes);
    } else {
      const newNote: Note = {
        id: Date.now().toString(),
        title: title.trim() || 'Untitled Note',
        content: content.trim(),
        updatedAt: timestamp,
      };
      saveNotesToStorage([newNote, ...notes]);
    }

    closeModal();
  };

  // Cross-platform delete fix (supports Web & Native)
  const handleDeleteNote = (id: string) => {
    if (Platform.OS === 'web') {
      const confirmed = window.confirm('Are you sure you want to delete this note?');
      if (confirmed) {
        const updatedNotes: Note[] = notes.filter((note) => note.id !== id);
        saveNotesToStorage(updatedNotes);
      }
    } else {
      Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updatedNotes: Note[] = notes.filter((note) => note.id !== id);
            saveNotesToStorage(updatedNotes);
          },
        },
      ]);
    }
  };

  const openModalForEdit = (note: Note) => {
    setCurrentNoteId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setModalVisible(true);
  };

  const openModalForCreate = () => {
    setCurrentNoteId(null);
    setTitle('');
    setContent('');
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentNoteId(null);
    setTitle('');
    setContent('');
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );


    const { width } = useWindowDimensions();
  
    const horizontalPadding = width >= 768 ? 40 : 20;

  return (
    // <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={[styles.outerContainer, { paddingHorizontal: horizontalPadding }]}

          // style={styles.outerContainer}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={styles.contentWrapper}>
            


      {/* Header */}
      <View style={styles.headerContainer}>
      <View>
  <Text style={styles.headerTitle}>My Notes</Text>
<Text style={styles.headerSubtitle}>
                Add notes related to your budget and spendings.
              </Text>

      </View>

        {/* <Text style={styles.headerTitle} className='jim-nightshade-regular'>My Notes</Text> */}
        <Text style={styles.noteCount}>{notes.length} notes</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search notes..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={18} color="#888" />
          </TouchableOpacity>
        )}
      </View>

      {/* Notes List */}
      {filteredNotes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="document-text-outline" size={64} color="#ccc" />
          <Text style={styles.emptyText}>No notes found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredNotes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.noteCard}
              activeOpacity={0.7}
              onPress={() => openModalForEdit(item)}
            >
              <View style={styles.noteContentContainer}>
                <Text style={styles.noteTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.noteSnippet} numberOfLines={2}>
                  {item.content}
                </Text>
                <Text style={styles.noteDate}>{item.updatedAt}</Text>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteNote(item.id)}
              >
                <Ionicons name="trash-outline" size={20} color="#ff5252" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={openModalForCreate}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Add/Edit Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>
                {currentNoteId ? 'Edit Note' : 'New Note'}
              </Text>
              <TouchableOpacity onPress={closeModal}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.inputTitle}
              placeholder="Title"
              placeholderTextColor="#aaa"
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={styles.inputBody}
              placeholder="Start typing your note here..."
              placeholderTextColor="#aaa"
              multiline
              textAlignVertical="top"
              value={content}
              onChangeText={setContent}
            />

            <View style={styles.modalFooter}>
              <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
                <Text style={styles.saveButtonText}>Save Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

    {/* </SafeAreaView> */}
    </View>
    </ScrollView> 
    </KeyboardAvoidingView>
  );
}

