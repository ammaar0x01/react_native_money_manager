// Money Manager — settings, currency and data backup/restore
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';

import { STORAGE_KEYS } from '@/constants/storage';
import {
  buildCsv,
  buildXls,
  createBackupFile,
  isExpense,
  isRecord,
  normalizeImport,
  type BackupData,
  type ExportFormat,
  type ImportData,
} from '@/utils/dataExport';
import { GlobalStyles } from '@/global.styles';

// Expanded list of global currencies
const ALL_CURRENCIES = [
  { label: 'South African Rand (R)', symbol: 'R', code: 'ZAR' },
  { label: 'US Dollar ($)', symbol: '$', code: 'USD' },
  { label: 'Euro (€)', symbol: '€', code: 'EUR' },
  { label: 'British Pound (£)', symbol: '£', code: 'GBP' },
  { label: 'Australian Dollar (A$)', symbol: 'A$', code: 'AUD' },
  { label: 'Canadian Dollar (C$)', symbol: 'C$', code: 'CAD' },
  { label: 'Indian Rupee (₹)', symbol: '₹', code: 'INR' },
  { label: 'Japanese Yen (¥)', symbol: '¥', code: 'JPY' },
  { label: 'Chinese Yuan (¥)', symbol: '¥', code: 'CNY' },
  { label: 'Brazilian Real (R$)', symbol: 'R$', code: 'BRL' },
  { label: 'Mexican Peso ($)', symbol: '$', code: 'MXN' },
  { label: 'New Zealand Dollar (NZ$)', symbol: 'NZ$', code: 'NZD' },
  { label: 'Swiss Franc (CHF)', symbol: 'CHF', code: 'CHF' },
  { label: 'Singapore Dollar (S$)', symbol: 'S$', code: 'SGD' },
];

const parseStoredJson = (raw: string | null): unknown => {
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const notify = (title: string, message: string) => {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
  } else {
    Alert.alert(title, message);
  }
};

export default function SettingsScreen() {
  const { width } = useWindowDimensions();
  const horizontalPadding = width >= 768 ? 40 : 20;

  const [currentCurrency, setCurrentCurrency] = useState<string>('ZAR');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [exportModalVisible, setExportModalVisible] = useState<boolean>(false);
  const [exporting, setExporting] = useState<boolean>(false);
  const [importing, setImporting] = useState<boolean>(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const savedCurrency = await AsyncStorage.getItem(STORAGE_KEYS.currency);
      if (savedCurrency) {
        setCurrentCurrency(savedCurrency);
      }
    } catch (error) {
      console.error('Failed to load settings', error);
    }
  };

  const handleCurrencyChange = async (code: string, symbol: string) => {
    try {
      setCurrentCurrency(code);
      await AsyncStorage.setItem(STORAGE_KEYS.currency, code);
      setModalVisible(false);
      setSearchQuery('');

      if (Platform.OS === 'web') {
        window.alert(`Currency changed to ${symbol}`);
      } else {
        Alert.alert('Success', `Currency updated to ${symbol}`);
      }
    } catch (error) {
      console.error('Failed to save currency', error);
    }
  };

  // Find currently selected currency label for display
  const selectedCurrencyObj = ALL_CURRENCIES.find((c) => c.code === currentCurrency) || {
    label: `South African Rand (${currentCurrency})`,
    symbol: currentCurrency,
  };

  // Filter currencies based on search query inside combobox
  const filteredCurrencies = ALL_CURRENCIES.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ----------------------------------
  // Export helpers
  // ----------------------------------
  const readBackupData = async (): Promise<BackupData> => {
    const [
      expensesRaw,
      budgetRaw,
      currencyRaw,
      profileRaw,
      firstUsedRaw,
      seededRaw,
      shoppingRaw,
      notesRaw,
    ] = await Promise.all([
      AsyncStorage.getItem(STORAGE_KEYS.expenses),
      AsyncStorage.getItem(STORAGE_KEYS.monthlyBudget),
      AsyncStorage.getItem(STORAGE_KEYS.currency),
      AsyncStorage.getItem(STORAGE_KEYS.profile),
      AsyncStorage.getItem(STORAGE_KEYS.firstUsed),
      AsyncStorage.getItem(STORAGE_KEYS.monthlyDummySeeded),
      AsyncStorage.getItem(STORAGE_KEYS.shoppingLists),
      AsyncStorage.getItem(STORAGE_KEYS.notes),
    ]);

    const parsedExpenses = parseStoredJson(expensesRaw);
    const parsedBudget = Number(budgetRaw);
    const parsedProfile = parseStoredJson(profileRaw);
    const parsedShopping = parseStoredJson(shoppingRaw);
    const parsedNotes = parseStoredJson(notesRaw);

    return {
      expenses: Array.isArray(parsedExpenses)
        ? parsedExpenses.filter(isExpense)
        : [],
      monthlyBudget:
        budgetRaw && Number.isFinite(parsedBudget) && parsedBudget > 0
          ? parsedBudget
          : null,
      currency: currencyRaw || null,
      profile: isRecord(parsedProfile) ? parsedProfile : null,
      firstUsed: firstUsedRaw || null,
      monthlyDummySeeded: seededRaw === 'true',
      shoppingLists: Array.isArray(parsedShopping) ? parsedShopping : [],
      notes: Array.isArray(parsedNotes) ? parsedNotes : [],
    };
  };

  const saveFile = async (
    fileName: string,
    content: string,
    mimeType: string
  ): Promise<void> => {
    if (Platform.OS === 'web') {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return;
    }

    const directory = FileSystem.cacheDirectory ?? FileSystem.documentDirectory;
    if (!directory) {
      throw new Error('No writable directory is available on this device.');
    }

    const fileUri = `${directory}${fileName}`;
    await FileSystem.writeAsStringAsync(fileUri, content, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri, {
        mimeType,
        dialogTitle: 'Export Money Manager data',
      });
    } else {
      notify('Export saved', `The file was saved to ${fileUri}`);
    }
  };

  const handleExportData = async (format: ExportFormat) => {
    setExporting(true);

    try {
      const backup = await readBackupData();
      const stamp = new Date().toISOString().slice(0, 10);

      if (format === 'json') {
        const file = createBackupFile(backup);

        await saveFile(
          `MoneyManager_Backup_${stamp}.json`,
          JSON.stringify(file, null, 2),
          'application/json'
        );
      } else if (format === 'csv') {
        await saveFile(
          `MoneyManager_Expenses_${stamp}.csv`,
          buildCsv(backup.expenses, backup.currency),
          'text/csv;charset=utf-8'
        );
      } else {
        await saveFile(
          `MoneyManager_Expenses_${stamp}.xls`,
          buildXls(backup),
          'application/vnd.ms-excel'
        );
      }

      setExportModalVisible(false);
      notify(
        'Export complete',
        format === 'json'
          ? 'A complete JSON backup was created. Keep it safe — it can be imported later.'
          : 'Your expense data was exported as a spreadsheet.'
      );
    } catch (error) {
      console.error('Export failed', error);
      notify('Export failed', 'Could not create the export file. Please try again.');
    } finally {
      setExporting(false);
    }
  };

  // ----------------------------------
  // Import helpers
  // ----------------------------------
  const confirmImport = (data: ImportData): Promise<boolean> => {
    const parts: string[] = [];

    if (data.expenses) parts.push(`${data.expenses.length} expenses`);
    if (data.monthlyBudget !== undefined) parts.push('the monthly budget');
    if (data.currency !== undefined) parts.push('the currency');
    if (data.profile !== undefined) parts.push('your profile');
    if (data.shoppingLists) parts.push(`${data.shoppingLists.length} shopping lists`);
    if (data.notes) parts.push(`${data.notes.length} notes`);

    const message = `This will replace your current ${
      parts.length > 0 ? parts.join(', ') : 'stored data'
    }. This cannot be undone.`;

    return new Promise((resolve) => {
      if (Platform.OS === 'web') {
        resolve(window.confirm(`Import backup?\n\n${message}`));
        return;
      }

      Alert.alert('Import backup?', message, [
        { text: 'Cancel', style: 'cancel', onPress: () => resolve(false) },
        { text: 'Import', style: 'destructive', onPress: () => resolve(true) },
      ], {
        cancelable: true,
        onDismiss: () => resolve(false),
      });
    });
  };

  const handleImportData = async () => {
    setImporting(true);

    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/json', 'text/json'],
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (result.canceled || !result.assets[0]) return;

      const asset = result.assets[0];

      if (asset.name && !/\.json$/i.test(asset.name)) {
        notify('Invalid file', 'Please choose a .json backup file. CSV and XLS files cannot be imported.');
        return;
      }

      let fileContent = '';

      if (Platform.OS === 'web') {
        const response = await fetch(asset.uri);
        fileContent = await response.text();
      } else {
        fileContent = await FileSystem.readAsStringAsync(asset.uri, {
          encoding: FileSystem.EncodingType.UTF8,
        });
      }

      let parsed: unknown;

      try {
        parsed = JSON.parse(fileContent);
      } catch {
        throw new Error('The selected file is not valid JSON.');
      }

      const data = normalizeImport(parsed);

      if (!(await confirmImport(data))) return;

      const writes: [string, string][] = [];

      if (data.expenses !== undefined) {
        writes.push(
          [STORAGE_KEYS.expenses, JSON.stringify(data.expenses)],
          // Prevent demo data from being seeded over an imported backup.
          [STORAGE_KEYS.monthlyDummySeeded, 'true']
        );
      }

      if (data.monthlyBudget !== undefined) {
        writes.push([STORAGE_KEYS.monthlyBudget, String(data.monthlyBudget)]);
      }

      if (data.currency !== undefined) {
        writes.push([STORAGE_KEYS.currency, data.currency]);
      }

      if (data.profile !== undefined) {
        writes.push([STORAGE_KEYS.profile, JSON.stringify(data.profile)]);
      }

      if (data.firstUsed !== undefined) {
        writes.push([STORAGE_KEYS.firstUsed, data.firstUsed]);
      }

      if (data.shoppingLists !== undefined) {
        writes.push([STORAGE_KEYS.shoppingLists, JSON.stringify(data.shoppingLists)]);
      }

      if (data.notes !== undefined) {
        writes.push([STORAGE_KEYS.notes, JSON.stringify(data.notes)]);
      }

      if (data.monthlyDummySeeded && data.expenses === undefined) {
        writes.push([STORAGE_KEYS.monthlyDummySeeded, 'true']);
      }

      if (writes.length === 0) {
        throw new Error('The backup does not contain anything to import.');
      }

      await AsyncStorage.multiSet(writes);

      if (data.currency !== undefined) {
        setCurrentCurrency(data.currency);
      }

      notify(
        'Import complete',
        'Your backup was restored successfully. Reopen the affected pages to see the updated data.'
      );
    } catch (error) {
      console.error('Import failed', error);
      notify(
        'Import failed',
        error instanceof Error
          ? error.message
          : 'Failed to import the backup. Make sure it is a valid JSON export.'
      );
    } finally {
      setImporting(false);
    }
  };

  return (
    <ScrollView
      style={[styles.container, { paddingHorizontal: horizontalPadding }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.contentWrapper}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>Settings</Text>
          <Text style={styles.headerSubtitle}>
            Manage your currency, backups, and app data.
          </Text>
        </View>
      </View>

      {/* Currency Section with Combobox Trigger */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Default Currency</Text>
        </View>
        <Text style={styles.sectionDesc}>
          Select the currency symbol used across your expenses, budgets, and exports.
        </Text>

        <Pressable style={styles.comboboxTrigger} onPress={() => setModalVisible(true)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.comboboxTriggerText}>{selectedCurrencyObj.label}</Text>
          </View>

          <Ionicons name="chevron-down" size={18} color="#6B7280" />
        </Pressable>
      </View>

      {/* Backup & Restore Data Section */}
      <View style={styles.sectionCard}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Backup & Restore</Text>
        </View>
        <Text style={styles.sectionDesc}>
          Export a complete JSON backup you can import later, or download your expenses as a
          CSV or Excel spreadsheet. Only JSON backups can be imported.
        </Text>

        <View style={styles.actionButtonsRow}>
          <Pressable
            style={[styles.exportButton, exporting && styles.buttonDisabled]}
            onPress={() => setExportModalVisible(true)}
            disabled={exporting}
          >
            {exporting ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Ionicons name="download-outline" size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
            )}
            <Text style={styles.exportButtonText}>
              {exporting ? 'Exporting…' : 'Export Data'}
            </Text>
          </Pressable>

          <Pressable
            style={[styles.importButton, importing && styles.buttonDisabled]}
            onPress={handleImportData}
            disabled={importing}
          >
            {importing ? (
              <ActivityIndicator color="#1F2937" size="small" />
            ) : (
              <Ionicons
                name="cloud-upload-outline"
                size={18}
                color="#1F2937"
                style={{ marginRight: 8 }}
              />
            )}
            <Text style={styles.importButtonText}>
              {importing ? 'Importing…' : 'Import JSON'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.formatNote}>
          <Ionicons name="information-circle-outline" size={16} color="#6B7280" />
          <Text style={styles.formatNoteText}>
            JSON restores everything. CSV and XLS are spreadsheet exports for viewing and
            reporting.
          </Text>
        </View>
      </View>

      {/* Currency Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>Select Currency</Text>
              <Pressable
                onPress={() => {
                  setModalVisible(false);
                  setSearchQuery('');
                }}
              >
                <Ionicons name="close" size={24} color="#111827" />
              </Pressable>
            </View>

            {/* Search Input for filtering currencies */}
            <View style={styles.modalSearchContainer}>
              <Ionicons name="search" size={18} color="#9CA3AF" style={{ marginRight: 8 }} />
              <TextInput
                style={styles.modalSearchInput}
                placeholder="Search currency name or symbol..."
                placeholderTextColor="#9CA3AF"
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
              />
              {searchQuery.length > 0 && (
                <Pressable onPress={() => setSearchQuery('')}>
                  <Ionicons name="close-circle" size={16} color="#9CA3AF" />
                </Pressable>
              )}
            </View>

            {/* Currency List */}
            <FlatList
              data={filteredCurrencies}
              keyExtractor={(item) => item.code}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item }) => {
                const isSelected = currentCurrency === item.code;

                return (
                  <Pressable
                    style={[
                      styles.currencyOptionItem,
                      isSelected && styles.currencyOptionItemActive,
                    ]}
                    onPress={() => handleCurrencyChange(item.code, item.label)}
                  >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <View
                        style={[
                          styles.currencySymbolBadge,
                          isSelected && { backgroundColor: '#E59400' },
                        ]}
                      >
                        <Text
                          style={[
                            styles.currencySymbolText,
                            isSelected && { color: '#FFFFFF' },
                          ]}
                        >
                          {item.symbol}
                        </Text>
                      </View>
                      <Text
                        style={[
                          styles.currencyOptionText,
                          isSelected && { fontWeight: '700', color: '#E59400' },
                        ]}
                      >
                        {item.label}
                      </Text>
                    </View>
                    {isSelected && (
                      <Ionicons name="checkmark-circle" size={20} color="#E59400" />
                    )}
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </Modal>

      {/* Export Format Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={exportModalVisible}
        onRequestClose={() => !exporting && setExportModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.exportModalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderTitle}>Export Data</Text>
              <Pressable
                onPress={() => setExportModalVisible(false)}
                disabled={exporting}
              >
                <Ionicons name="close" size={24} color="#111827" />
              </Pressable>
            </View>

            <Text style={styles.exportModalSubtitle}>
              Choose a format for your expense data.
            </Text>

            <Pressable
              style={styles.exportOption}
              onPress={() => handleExportData('json')}
              disabled={exporting}
            >
              <View style={[styles.exportOptionIcon, { backgroundColor: '#DCFCE7' }]}>
                <Ionicons name="code-slash-outline" size={22} color="#15803D" />
              </View>
              <View style={styles.exportOptionTextGroup}>
                <Text style={styles.exportOptionTitle}>JSON backup</Text>
                <Text style={styles.exportOptionDescription}>
                  Complete backup of expenses, budget, profile, and preferences. Can be
                  imported again.
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </Pressable>

            <Pressable
              style={styles.exportOption}
              onPress={() => handleExportData('csv')}
              disabled={exporting}
            >
              <View style={[styles.exportOptionIcon, { backgroundColor: '#DBEAFE' }]}>
                <Ionicons name="grid-outline" size={22} color="#1D4ED8" />
              </View>
              <View style={styles.exportOptionTextGroup}>
                <Text style={styles.exportOptionTitle}>CSV (.csv)</Text>
                <Text style={styles.exportOptionDescription}>
                  One row per expense. Opens in Excel, Numbers, and Google Sheets.
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </Pressable>

            <Pressable
              style={styles.exportOption}
              onPress={() => handleExportData('xls')}
              disabled={exporting}
            >
              <View style={[styles.exportOptionIcon, { backgroundColor: '#FEF3C7' }]}>
                <Ionicons name="document-text-outline" size={22} color="#B45309" />
              </View>
              <View style={styles.exportOptionTextGroup}>
                <Text style={styles.exportOptionTitle}>Excel (.xls)</Text>
                <Text style={styles.exportOptionDescription}>
                  Expenses, summary, and profile sheets. Best for reporting.
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </Pressable>

            {exporting && (
              <View style={styles.exportingRow}>
                <ActivityIndicator color="#1aaa00" />
                <Text style={styles.exportingText}>Preparing your file…</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // === LAYOUT
  container: GlobalStyles.mainContainer,
  scrollContent: GlobalStyles.scrollContent,
  contentWrapper: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
  },

  // === Header
  // headerContainer: GlobalStyles.headerContainer,
  headerContainer: {
    ...GlobalStyles.headerContainer,
    // alignItems: "center",
    marginBottom: 8,
  } as any,

  headerTitle: GlobalStyles.pageHeading,
  headerSubtitle: GlobalStyles.pageSubheading,

  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    marginTop: 20,

    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  sectionDesc: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  comboboxTrigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  comboboxTriggerText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  currencySymbolBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  currencySymbolText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D97706',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  exportButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1aaa00',
    paddingVertical: 14,
    borderRadius: 12,
  },
  exportButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  importButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  importButtonText: {
    color: '#1F2937',
    fontWeight: '700',
    fontSize: 15,
  },
  buttonDisabled: {
    opacity: 0.65,
  },
  formatNote: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 14,
  },
  formatNoteText: {
    flex: 1,
    fontSize: 12,
    lineHeight: 18,
    color: '#6B7280',
  },

  // Currency modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    height: '75%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  modalSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  modalSearchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
    padding: 0,
    // @ts-ignore
    outlineStyle: 'none',
  } as any,
  currencyOptionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    borderRadius: 8,
  },
  currencyOptionItemActive: {
    backgroundColor: '#FEF3C7',
  },
  currencyOptionText: {
    fontSize: 15,
    color: '#4B5563',
    fontWeight: '500',
  },

  // Export modal
  exportModalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingBottom: 30,
  },
  exportModalSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  exportOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  exportOptionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exportOptionTextGroup: {
    flex: 1,
  },
  exportOptionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  exportOptionDescription: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 17,
    marginTop: 2,
  },
  exportingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 18,
  },
  exportingText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '600',
  },
});
