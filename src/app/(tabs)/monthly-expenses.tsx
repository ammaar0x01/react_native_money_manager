import React, { useCallback, useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

import { STORAGE_KEYS } from "@/constants/storage";
import {
  CATEGORIES,
  DEFAULT_MONTHLY_BUDGET,
  Expense,
  MonthOption,
  CategoryFilter,
  CategoryKey,
  formatAmount,
  formatCompactAmount,
  formatDateLabel,
  getCategoryMeta,
  getDefaultDateForMonth,
  getDaysInMonth,
  getMonthKey,
  getMonthOptions,
  loadCurrencySymbol,
  loadExpensesWithHistory,
  loadMonthlyBudget,
  persistExpenses,
} from "@/data/expenses";

import { stylesMonthly as styles } from "@/styles/monthlyExpenses.styles";
import { stylesExpensesHistory as monthStyles } from "@/styles/expensesHistory.styles";
// ----------------------------------

// Current month + the 12 months before it (13 options total).
const MONTH_OPTIONS = getMonthOptions(13);
const CURRENT_MONTH_KEY = getMonthKey();

export default function MonthlyExpensesView() {
  const { width } = useWindowDimensions();
  const horizontalPadding = width >= 768 ? 40 : 20;

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(DEFAULT_MONTHLY_BUDGET);
  const [currencySymbol, setCurrencySymbol] = useState<string>("R");

  const [selectedMonthKey, setSelectedMonthKey] = useState<string>(MONTH_OPTIONS[0].key);
  const [monthModalVisible, setMonthModalVisible] = useState<boolean>(false);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const [addModalVisible, setAddModalVisible] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newAmount, setNewAmount] = useState<string>("");
  const [newCategory, setNewCategory] = useState<CategoryKey>("Food");
  const [newDate, setNewDate] = useState<string>(getDefaultDateForMonth(MONTH_OPTIONS[0]));
  const [newNote, setNewNote] = useState<string>("");

  const [budgetModalVisible, setBudgetModalVisible] = useState<boolean>(false);
  const [budgetInput, setBudgetInput] = useState<string>(String(DEFAULT_MONTHLY_BUDGET));

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      const loadData = async () => {
        try {
          const [loadedExpenses, loadedBudget, loadedCurrency] = await Promise.all([
            loadExpensesWithHistory(),
            loadMonthlyBudget(),
            loadCurrencySymbol(),
          ]);

          if (!mounted) return;

          setExpenses(loadedExpenses);
          setMonthlyBudget(loadedBudget);
          setBudgetInput(String(loadedBudget));
          setCurrencySymbol(loadedCurrency);
        } catch (error) {
          console.error("Failed to load monthly expenses", error);
        }
      };

      loadData();

      return () => {
        mounted = false;
      };
    }, [])
  );

  const selectedMonth =
    MONTH_OPTIONS.find((month) => month.key === selectedMonthKey) ?? MONTH_OPTIONS[0];

  const monthSummaries = useMemo(() => {
    const summaries = new Map<string, { count: number; total: number }>();

    expenses.forEach((expense) => {
      const monthKey = expense.date.slice(0, 7);
      const current = summaries.get(monthKey) ?? { count: 0, total: 0 };
      summaries.set(monthKey, {
        count: current.count + 1,
        total: current.total + expense.amount,
      });
    });

    return summaries;
  }, [expenses]);

  const selectedMonthExpenses = useMemo(
    () => expenses.filter((expense) => expense.date.startsWith(selectedMonth.key)),
    [expenses, selectedMonth.key]
  );

  const totalSpent = useMemo(
    () => selectedMonthExpenses.reduce((sum, expense) => sum + expense.amount, 0),
    [selectedMonthExpenses]
  );

  const daysInMonth = getDaysInMonth(selectedMonth.key);
  const daysCounted =
    selectedMonth.key === CURRENT_MONTH_KEY ? new Date().getDate() : daysInMonth;
  const dailyAverage = totalSpent / Math.max(daysCounted, 1);

  const budgetPercent = monthlyBudget > 0 ? Math.round((totalSpent / monthlyBudget) * 100) : 0;
  const isOverBudget = totalSpent > monthlyBudget;
  const remainingBudget = Math.max(monthlyBudget - totalSpent, 0);

  const categoryTotals = useMemo(
    () =>
      CATEGORIES.map((category) => ({
        ...category,
        total: selectedMonthExpenses
          .filter((expense) => expense.category === category.key)
          .reduce((sum, expense) => sum + expense.amount, 0),
      }))
        .filter((category) => category.total > 0)
        .sort((a, b) => b.total - a.total),
    [selectedMonthExpenses]
  );

  const visibleExpenses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return selectedMonthExpenses
      .filter((expense) => activeCategory === "All" || expense.category === activeCategory)
      .filter((expense) => {
        if (!query) return true;
        return (
          expense.title.toLowerCase().includes(query) ||
          expense.category.toLowerCase().includes(query) ||
          (expense.note ?? "").toLowerCase().includes(query)
        );
      })
      .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
  }, [selectedMonthExpenses, searchQuery, activeCategory]);

  const notify = (title: string, message: string) => {
    if (Platform.OS === "web") {
      window.alert(`${title}\n\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const saveExpenses = async (nextExpenses: Expense[]) => {
    setExpenses(nextExpenses);
    try {
      await persistExpenses(nextExpenses);
    } catch (error) {
      console.error("Failed to save expenses", error);
    }
  };

  const openAddModal = () => {
    setNewTitle("");
    setNewAmount("");
    setNewCategory("Food");
    setNewDate(getDefaultDateForMonth(selectedMonth));
    setNewNote("");
    setAddModalVisible(true);
  };

  const handleAddExpense = () => {
    const title = newTitle.trim();
    const parsedAmount = Number(newAmount.replace(",", ".").trim());
    const date = newDate.trim();

    if (!title) {
      notify("Missing details", "Please enter what you spent on.");
      return;
    }

    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      notify("Invalid amount", "Please enter an amount greater than zero.");
      return;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      notify("Invalid date", "Please use the YYYY-MM-DD format, for example 2026-10-29.");
      return;
    }

    const newExpense: Expense = {
      id: `${Date.now()}`,
      title,
      amount: parsedAmount,
      category: newCategory,
      date,
      note: newNote.trim() || undefined,
    };

    saveExpenses([newExpense, ...expenses]);

    const expenseMonthKey = date.slice(0, 7);
    if (MONTH_OPTIONS.some((month) => month.key === expenseMonthKey)) {
      setSelectedMonthKey(expenseMonthKey);
    }

    setAddModalVisible(false);
  };

  const handleDeleteExpense = (expense: Expense) => {
    const removeExpense = () => {
      saveExpenses(expenses.filter((item) => item.id !== expense.id));
    };

    if (Platform.OS === "web") {
      if (window.confirm(`Delete "${expense.title}"?`)) {
        removeExpense();
      }
      return;
    }

    Alert.alert("Delete expense", `Remove "${expense.title}" from your expenses?`, [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: removeExpense },
    ]);
  };

  const handleSelectMonth = (month: MonthOption) => {
    setSelectedMonthKey(month.key);
    setMonthModalVisible(false);
    setSearchQuery("");
    setActiveCategory("All");
  };

  const openBudgetModal = () => {
    setBudgetInput(String(monthlyBudget));
    setBudgetModalVisible(true);
  };

  const handleSaveBudget = async () => {
    const parsedBudget = Number(budgetInput.replace(",", ".").trim());

    if (!Number.isFinite(parsedBudget) || parsedBudget <= 0) {
      notify("Invalid budget", "Please enter a monthly budget greater than zero.");
      return;
    }

    setMonthlyBudget(parsedBudget);
    setBudgetModalVisible(false);

    try {
      await AsyncStorage.setItem(STORAGE_KEYS.monthlyBudget, String(parsedBudget));
    } catch (error) {
      console.error("Failed to save budget", error);
    }
  };

  const renderCategoryIcon = (category: CategoryKey) => {
    const meta = getCategoryMeta(category);

    return (
      <View style={[styles.categoryIconWrap, { backgroundColor: meta.background }]}>
        <Ionicons name={meta.icon} size={20} color={meta.color} />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={[styles.outerContainer, { paddingHorizontal: horizontalPadding }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.contentWrapper}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <View style={styles.headerTextGroup}>
              <Text style={styles.headerTitle}>Monthly Expenses</Text>
              <Text style={styles.headerSubtitle}>
                Browse this month and the 12 months before it.
              </Text>
            </View>

            <Pressable style={styles.headerAddButton} onPress={openAddModal}>
              <Ionicons name="add" size={20} color="#FFFFFF" />
              <Text style={styles.headerAddButtonText}>Add</Text>
            </Pressable>
          </View>

          {/* Month combobox */}
          <Pressable
            style={monthStyles.monthSelector}
            onPress={() => setMonthModalVisible(true)}
          >
            <View style={monthStyles.monthSelectorIcon}>
              <Ionicons name="calendar-outline" size={22} color="#1aaa00" />
            </View>

            <View style={monthStyles.monthSelectorText}>
              <Text style={monthStyles.monthSelectorLabel}>Viewing month</Text>
              <Text style={monthStyles.monthSelectorValue}>{selectedMonth.label}</Text>
            </View>

            <View style={monthStyles.monthSelectorBadge}>
              <Text style={monthStyles.monthSelectorBadgeText}>
                {selectedMonth.key === CURRENT_MONTH_KEY ? "Current" : "Past"}
              </Text>
            </View>

            <Ionicons name="chevron-down" size={20} color="#6B7280" />
          </Pressable>

          <Text style={monthStyles.rangeHint}>
            Available range: {MONTH_OPTIONS[MONTH_OPTIONS.length - 1].shortLabel} –{" "}
            {MONTH_OPTIONS[0].shortLabel}
          </Text>

          {/* Summary */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryTopRow}>
              <Text style={styles.summaryLabel}>
                SPENT IN {selectedMonth.shortLabel.toUpperCase()}
              </Text>
              <Pressable style={styles.budgetEditButton} onPress={openBudgetModal}>
                <Ionicons name="options-outline" size={14} color="#D1FAE5" />
                <Text style={styles.budgetEditText}>Budget</Text>
              </Pressable>
            </View>

            <Text style={styles.summaryAmount}>
              {currencySymbol} {formatAmount(totalSpent)}
            </Text>

            <View style={styles.summaryStatsRow}>
              <View style={styles.summaryStat}>
                <Text style={styles.summaryStatValue}>{selectedMonthExpenses.length}</Text>
                <Text style={styles.summaryStatLabel}>Transactions</Text>
              </View>

              <View style={styles.summaryDivider} />

              <View style={styles.summaryStat}>
                <Text style={styles.summaryStatValue}>
                  {currencySymbol} {formatCompactAmount(dailyAverage)}
                </Text>
                <Text style={styles.summaryStatLabel}>Avg / day</Text>
              </View>

              <View style={styles.summaryDivider} />

              <View style={styles.summaryStat}>
                <Text style={styles.summaryStatValue}>
                  {currencySymbol} {formatCompactAmount(monthlyBudget)}
                </Text>
                <Text style={styles.summaryStatLabel}>Budget</Text>
              </View>
            </View>

            <View style={styles.budgetRow}>
              <Text style={styles.budgetText}>{budgetPercent}% of monthly budget used</Text>
              <Text style={styles.budgetText}>
                {isOverBudget
                  ? `${currencySymbol} ${formatAmount(totalSpent - monthlyBudget)} over`
                  : `${currencySymbol} ${formatAmount(remainingBudget)} left`}
              </Text>
            </View>

            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${Math.min(Math.max(budgetPercent, 0), 100)}%` as `${number}%`,
                    backgroundColor: isOverBudget ? "#EF4444" : "#95F376",
                  },
                ]}
              />
            </View>
          </View>

          {/* Search */}
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={18} color="#9CA3AF" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder={`Search ${selectedMonth.label}...`}
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <Pressable onPress={() => setSearchQuery("")} hitSlop={8}>
                <Ionicons name="close-circle" size={18} color="#9CA3AF" />
              </Pressable>
            )}
          </View>

          {/* Category filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.chipsScroll}
            contentContainerStyle={styles.chipsRow}
          >
            <Pressable
              style={[styles.chip, activeCategory === "All" && styles.chipActive]}
              onPress={() => setActiveCategory("All")}
            >
              <Text style={[styles.chipText, activeCategory === "All" && styles.chipTextActive]}>
                All
              </Text>
            </Pressable>

            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.key;
              return (
                <Pressable
                  key={category.key}
                  style={[styles.chip, isActive && styles.chipActive]}
                  onPress={() => setActiveCategory(category.key)}
                >
                  <Ionicons
                    name={category.icon}
                    size={15}
                    color={isActive ? "#FFFFFF" : category.color}
                  />
                  <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                    {category.label}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          {/* Spending by category for the selected month */}
          {categoryTotals.length > 0 && (
            <View style={styles.breakdownCard}>
              <View style={styles.breakdownHeaderRow}>
                <Text style={styles.sectionTitle}>Spending by category</Text>
                <Text style={styles.sectionHint}>{selectedMonth.shortLabel}</Text>
              </View>

              {categoryTotals.map((category) => {
                const maxTotal = categoryTotals[0]?.total || 1;
                const barWidth = Math.max((category.total / maxTotal) * 100, 4);

                return (
                  <View key={category.key} style={styles.breakdownRow}>
                    <View style={styles.breakdownLabelRow}>
                      <Text style={styles.breakdownLabel}>{category.label}</Text>
                      <Text style={styles.breakdownValue}>
                        {currencySymbol} {formatAmount(category.total)}
                      </Text>
                    </View>
                    <View style={styles.breakdownTrack}>
                      <View
                        style={[
                          styles.breakdownFill,
                          {
                            width: `${barWidth}%` as `${number}%`,
                            backgroundColor: category.color,
                          },
                        ]}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          )}

          {/* Expense list for the selected month */}
          <View style={styles.listSection}>
            <View style={styles.listHeaderRow}>
              <Text style={styles.sectionTitle}>Expenses in {selectedMonth.shortLabel}</Text>
              <Text style={styles.sectionCount}>{visibleExpenses.length} shown</Text>
            </View>

            {visibleExpenses.length === 0 ? (
              <View style={styles.emptyCard}>
                <Ionicons name="calendar-outline" size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No expenses in {selectedMonth.label}</Text>
                <Text style={styles.emptyText}>
                  Add an expense for this month or choose another month from the selector.
                </Text>
              </View>
            ) : (
              visibleExpenses.map((expense) => {
                const meta = getCategoryMeta(expense.category);

                return (
                  <View key={expense.id} style={styles.expenseCard}>
                    {renderCategoryIcon(expense.category)}

                    <View style={styles.expenseDetails}>
                      <Text style={styles.expenseTitle} numberOfLines={1}>
                        {expense.title}
                      </Text>
                      <Text style={styles.expenseMeta}>
                        {meta.label} · {formatDateLabel(expense.date)}
                      </Text>
                      {expense.note ? (
                        <Text style={styles.expenseNote} numberOfLines={1}>
                          {expense.note}
                        </Text>
                      ) : null}
                    </View>

                    <View style={styles.expenseRight}>
                      <Text style={styles.expenseAmount}>
                        -{currencySymbol} {formatAmount(expense.amount)}
                      </Text>
                      <Pressable
                        style={styles.deleteButton}
                        onPress={() => handleDeleteExpense(expense)}
                        hitSlop={8}
                      >
                        <Ionicons name="trash-outline" size={16} color="#9CA3AF" />
                      </Pressable>
                    </View>
                  </View>
                );
              })
            )}
          </View>
        </View>
      </ScrollView>

      {/* Month picker */}
      <Modal
        animationType="fade"
        transparent
        visible={monthModalVisible}
        onRequestClose={() => setMonthModalVisible(false)}
      >
        <View style={monthStyles.monthModalOverlay}>
          <View style={monthStyles.monthModalCard}>
            <View style={monthStyles.monthModalHeader}>
              <Text style={monthStyles.monthModalTitle}>Choose a month</Text>
              <Pressable onPress={() => setMonthModalVisible(false)} hitSlop={8}>
                <Ionicons name="close" size={24} color="#111827" />
              </Pressable>
            </View>

            <Text style={monthStyles.monthModalSubtitle}>
              View the current month or any of the previous 12 months.
            </Text>

            <ScrollView
              style={monthStyles.monthOptionsScroll}
              showsVerticalScrollIndicator={false}
            >
              {MONTH_OPTIONS.map((month) => {
                const summary = monthSummaries.get(month.key);
                const isActive = month.key === selectedMonthKey;
                const isCurrent = month.key === CURRENT_MONTH_KEY;
                const count = summary?.count ?? 0;
                const total = summary?.total ?? 0;

                return (
                  <Pressable
                    key={month.key}
                    style={[monthStyles.monthOption, isActive && monthStyles.monthOptionActive]}
                    onPress={() => handleSelectMonth(month)}
                  >
                    <View style={monthStyles.monthOptionLeft}>
                      <Text
                        style={[
                          monthStyles.monthOptionLabel,
                          isActive && monthStyles.monthOptionLabelActive,
                        ]}
                      >
                        {month.label}
                      </Text>
                      <Text style={monthStyles.monthOptionMeta}>
                        {count} {count === 1 ? "expense" : "expenses"}
                        {isCurrent ? " · Current month" : ""}
                      </Text>
                    </View>

                    <View style={monthStyles.monthOptionRight}>
                      <Text
                        style={[
                          monthStyles.monthOptionTotal,
                          isActive && monthStyles.monthOptionTotalActive,
                        ]}
                      >
                        {count > 0
                          ? `${currencySymbol} ${formatCompactAmount(total)}`
                          : "—"}
                      </Text>
                      {isActive && (
                        <Ionicons
                          name="checkmark-circle"
                          size={18}
                          color="#15803D"
                          style={monthStyles.monthOptionCheck}
                        />
                      )}
                    </View>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Add expense modal */}
      <Modal
        animationType="slide"
        transparent
        visible={addModalVisible}
        onRequestClose={() => setAddModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.modalOverlay}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>New Expense</Text>
              <Pressable onPress={() => setAddModalVisible(false)} hitSlop={8}>
                <Ionicons name="close" size={24} color="#111827" />
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.inputLabel}>What did you spend on?</Text>
              <TextInput
                style={styles.textInput}
                placeholder="e.g. Weekly groceries"
                placeholderTextColor="#9CA3AF"
                value={newTitle}
                onChangeText={setNewTitle}
              />

              <Text style={styles.inputLabel}>Amount ({currencySymbol})</Text>
              <TextInput
                style={[styles.textInput, styles.amountInput]}
                placeholder="0.00"
                placeholderTextColor="#9CA3AF"
                keyboardType="decimal-pad"
                value={newAmount}
                onChangeText={setNewAmount}
              />

              <Text style={styles.inputLabel}>Category</Text>
              <View style={styles.categoryPicker}>
                {CATEGORIES.map((category) => {
                  const isActive = newCategory === category.key;

                  return (
                    <Pressable
                      key={category.key}
                      style={[styles.categoryOption, isActive && styles.categoryOptionActive]}
                      onPress={() => setNewCategory(category.key)}
                    >
                      <Ionicons
                        name={category.icon}
                        size={16}
                        color={isActive ? "#B45309" : category.color}
                      />
                      <Text
                        style={[
                          styles.categoryOptionText,
                          isActive && styles.categoryOptionTextActive,
                        ]}
                      >
                        {category.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              <Text style={styles.inputLabel}>Date</Text>
              <TextInput
                style={styles.textInput}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#9CA3AF"
                value={newDate}
                onChangeText={setNewDate}
                autoCapitalize="none"
              />

              <Text style={styles.inputLabel}>Note (optional)</Text>
              <TextInput
                style={styles.textInput}
                placeholder="e.g. Paid by card"
                placeholderTextColor="#9CA3AF"
                value={newNote}
                onChangeText={setNewNote}
              />

              <View style={styles.modalActions}>
                <Pressable style={styles.cancelButton} onPress={() => setAddModalVisible(false)}>
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>

                <Pressable style={styles.saveButton} onPress={handleAddExpense}>
                  <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                  <Text style={styles.saveButtonText}>Save Expense</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Monthly budget modal */}
      <Modal
        animationType="fade"
        transparent
        visible={budgetModalVisible}
        onRequestClose={() => setBudgetModalVisible(false)}
      >
        <View style={styles.budgetModalOverlay}>
          <View style={styles.budgetModalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Monthly Budget</Text>
              <Pressable onPress={() => setBudgetModalVisible(false)} hitSlop={8}>
                <Ionicons name="close" size={24} color="#111827" />
              </Pressable>
            </View>

            <Text style={styles.budgetHelpText}>
              Set how much you plan to spend each month. The progress bar is calculated for the
              month you are viewing.
            </Text>

            <Text style={styles.inputLabel}>Budget amount ({currencySymbol})</Text>
            <TextInput
              style={[styles.textInput, styles.amountInput]}
              placeholder="5000"
              placeholderTextColor="#9CA3AF"
              keyboardType="decimal-pad"
              value={budgetInput}
              onChangeText={setBudgetInput}
            />

            <View style={styles.modalActions}>
              <Pressable style={styles.cancelButton} onPress={() => setBudgetModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>

              <Pressable style={styles.saveButton} onPress={handleSaveBudget}>
                <Text style={styles.saveButtonText}>Save Budget</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}
