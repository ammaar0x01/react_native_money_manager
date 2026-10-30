
import React, { useCallback, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
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
import { router, useFocusEffect } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system/legacy";

import { STORAGE_KEYS } from "@/constants/storage";
import {
  CATEGORIES,
  Expense,
  formatAmount,
  formatCompactAmount,
  formatLongDate,
  getTodayInput,
  loadCurrencySymbol,
  loadExpensesWithHistory,
} from "@/data/expenses";

import { stylesProfile as styles } from "@/styles/profile.styles";
// ----------------------------------

interface ProfileData {
  username: string;
  userId: string;
  imageUri: string | null;
}

type ImageSource = "camera" | "library";

const DEFAULT_USERNAME = "Guest User";
const MAX_USERNAME_LENGTH = 30;

const generateUserId = (): string => {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate()
  ).padStart(2, "0")}`;
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase().padEnd(4, "0");

  return `ET-${stamp}-${suffix}`;
};

const createDefaultProfile = (): ProfileData => ({
  username: DEFAULT_USERNAME,
  userId: generateUserId(),
  imageUri: null,
});

/**
 * AsyncStorage on web is backed by localStorage, which has a small quota.
 * Resize/compress picked images before storing them so profile photos do not
 * exceed that quota.
 */
const resizeImageForWeb = (dataUri: string): Promise<string> =>
  new Promise((resolve) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      resolve(dataUri);
      return;
    }

    const image = new window.Image();

    image.onload = () => {
      try {
        const size = 320;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const context = canvas.getContext("2d");
        if (!context) {
          resolve(dataUri);
          return;
        }

        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, size, size);

        const sourceSize = Math.min(image.width, image.height);
        const sourceX = (image.width - sourceSize) / 2;
        const sourceY = (image.height - sourceSize) / 2;

        context.drawImage(
          image,
          sourceX,
          sourceY,
          sourceSize,
          sourceSize,
          0,
          0,
          size,
          size
        );

        resolve(canvas.toDataURL("image/jpeg", 0.7));
      } catch (error) {
        console.error("Failed to resize profile image", error);
        resolve(dataUri);
      }
    };

    image.onerror = () => resolve(dataUri);
    image.src = dataUri;
  });

export default function ProfileView() {
  const { width } = useWindowDimensions();
  const horizontalPadding = width >= 768 ? 40 : 20;

  const [profile, setProfile] = useState<ProfileData>(createDefaultProfile);
  const [firstUsedAt, setFirstUsedAt] = useState<string>("");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [currencySymbol, setCurrencySymbol] = useState<string>("R");

  const [photoModalVisible, setPhotoModalVisible] = useState<boolean>(false);
  const [imageBusy, setImageBusy] = useState<boolean>(false);

  // Username editing
  const [nameModalVisible, setNameModalVisible] = useState<boolean>(false);
  const [nameDraft, setNameDraft] = useState<string>("");
  const [nameError, setNameError] = useState<string | null>(null);
  const [nameSaving, setNameSaving] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      const loadProfile = async () => {
        try {
          const [storedProfile, storedFirstUsed, loadedExpenses, loadedCurrency] =
            await Promise.all([
              AsyncStorage.getItem(STORAGE_KEYS.profile),
              AsyncStorage.getItem(STORAGE_KEYS.firstUsed),
              loadExpensesWithHistory(),
              loadCurrencySymbol(),
            ]);

          let nextProfile = createDefaultProfile();

          if (storedProfile) {
            try {
              const parsed = JSON.parse(storedProfile) as Partial<ProfileData>;
              nextProfile = {
                username: parsed.username?.trim() || DEFAULT_USERNAME,
                userId: parsed.userId || nextProfile.userId,
                imageUri: parsed.imageUri ?? null,
              };
            } catch {
              // Ignore malformed profile data and keep the generated defaults.
            }
          } else {
            await AsyncStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(nextProfile));
          }

          let nextFirstUsed = storedFirstUsed;

          if (!nextFirstUsed) {
            nextFirstUsed = new Date().toISOString();
            await AsyncStorage.setItem(STORAGE_KEYS.firstUsed, nextFirstUsed);
          }

          if (!mounted) return;

          setProfile(nextProfile);
          setFirstUsedAt(nextFirstUsed);
          setExpenses(loadedExpenses);
          setCurrencySymbol(loadedCurrency);
        } catch (error) {
          console.error("Failed to load profile", error);
        }
      };

      loadProfile();

      return () => {
        mounted = false;
      };
    }, [])
  );

  const ytdSummary = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const yearStart = `${currentYear}-01-01`;
    const today = getTodayInput();

    const ytdExpenses = expenses.filter(
      (expense) => expense.date >= yearStart && expense.date <= today
    );

    const total = ytdExpenses.reduce((sum, expense) => sum + expense.amount, 0);
    const monthsTracked = new Set(ytdExpenses.map((expense) => expense.date.slice(0, 7))).size;

    const topCategory = CATEGORIES.map((category) => ({
      ...category,
      total: ytdExpenses
        .filter((expense) => expense.category === category.key)
        .reduce((sum, expense) => sum + expense.amount, 0),
    }))
      .filter((category) => category.total > 0)
      .sort((a, b) => b.total - a.total)[0];

    return {
      year: currentYear,
      total,
      count: ytdExpenses.length,
      monthsTracked,
      averagePerMonth: monthsTracked > 0 ? total / monthsTracked : 0,
      topCategory,
    };
  }, [expenses]);

  const firstUsedLabel = firstUsedAt ? formatLongDate(firstUsedAt) : "—";

  const notify = (title: string, message: string) => {
    if (Platform.OS === "web") {
      window.alert(`${title}\n\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const persistProfile = async (nextProfile: ProfileData): Promise<boolean> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(nextProfile));
      setProfile(nextProfile);
      return true;
    } catch (error) {
      console.error("Failed to save profile", error);
      notify(
        "Could not save profile",
        "Your profile could not be saved on this device. Try again, or choose a smaller photo."
      );
      return false;
    }
  };

  // ----------------------------------
  // Username editing
  // ----------------------------------
  const openNameEditor = () => {
    setNameDraft(profile.username);
    setNameError(null);
    setNameModalVisible(true);
  };

  const closeNameEditor = () => {
    if (nameSaving) return;
    setNameModalVisible(false);
    setNameError(null);
  };

  const handleNameChange = (value: string) => {
    setNameDraft(value);
    if (nameError) setNameError(null);
  };

  const handleSaveName = async () => {
    if (nameSaving) return;

    // Trim and collapse repeated spaces: "  Jane   Doe " -> "Jane Doe"
    const cleaned = nameDraft.trim().replace(/\s+/g, " ");

    if (!cleaned) {
      setNameError("Enter a name to continue.");
      return;
    }

    if (cleaned.length > MAX_USERNAME_LENGTH) {
      setNameError(`Use ${MAX_USERNAME_LENGTH} characters or fewer.`);
      return;
    }

    // Nothing changed, so just close the sheet.
    if (cleaned === profile.username) {
      setNameModalVisible(false);
      return;
    }

    setNameSaving(true);
    const saved = await persistProfile({ ...profile, username: cleaned });
    setNameSaving(false);

    if (saved) {
      setNameModalVisible(false);
      setNameError(null);
    }
  };

  // ----------------------------------
  // Profile photo
  // ----------------------------------
  const persistImageFile = async (uri: string): Promise<string> => {
    if (Platform.OS === "web") return uri;

    const documentDirectory = FileSystem.documentDirectory;
    if (!documentDirectory) return uri;

    const extensionMatch = uri.match(/\.([a-zA-Z0-9]+)(?:\?|$)/);
    const extension = extensionMatch?.[1] ?? "jpg";
    const destination = `${documentDirectory}profile-photo.${extension}`;

    try {
      await FileSystem.deleteAsync(destination, { idempotent: true });
      await FileSystem.copyAsync({ from: uri, to: destination });
      return destination;
    } catch (error) {
      console.error("Failed to copy profile image", error);
      return uri;
    }
  };

  const pickImage = async (source: ImageSource) => {
    setPhotoModalVisible(false);
    setImageBusy(true);

    try {
      const permission =
        source === "camera"
          ? await ImagePicker.requestCameraPermissionsAsync()
          : await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        notify(
          "Permission needed",
          source === "camera"
            ? "Camera access is required to take a profile photo."
            : "Photo library access is required to choose a profile photo."
        );
        return;
      }

      const result =
        source === "camera"
          ? await ImagePicker.launchCameraAsync({
              mediaTypes: ["images"],
              allowsEditing: true,
              aspect: [1, 1],
              quality: Platform.OS === "web" ? 0.6 : 0.7,
              base64: Platform.OS === "web",
            })
          : await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ["images"],
              allowsEditing: true,
              aspect: [1, 1],
              quality: Platform.OS === "web" ? 0.6 : 0.7,
              base64: Platform.OS === "web",
            });

      if (result.canceled || !result.assets[0]) return;

      const asset = result.assets[0];
      let savedUri: string;

      if (Platform.OS === "web") {
        const dataUri = asset.base64
          ? `data:${asset.mimeType ?? "image/jpeg"};base64,${asset.base64}`
          : asset.uri;

        savedUri = await resizeImageForWeb(dataUri);
      } else {
        savedUri = await persistImageFile(asset.uri);
      }

      await persistProfile({ ...profile, imageUri: savedUri });
    } catch (error) {
      console.error("Failed to update profile photo", error);
      notify("Photo error", "Could not update your profile photo. Please try again.");
    } finally {
      setImageBusy(false);
    }
  };

  const handleRemoveImage = async () => {
    const previousImage = profile.imageUri;
    setPhotoModalVisible(false);

    const saved = await persistProfile({ ...profile, imageUri: null });
    if (!saved) return;

    const documentDirectory = FileSystem.documentDirectory;
    if (
      previousImage &&
      Platform.OS !== "web" &&
      documentDirectory &&
      previousImage.startsWith(documentDirectory)
    ) {
      try {
        await FileSystem.deleteAsync(previousImage, { idempotent: true });
      } catch (error) {
        console.error("Failed to delete profile image", error);
      }
    }
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
            <View style={{ flex: 1 }}>
              <Text style={styles.headerTitle}>Profile</Text>
              <Text style={styles.headerSubtitle}>
                Your account details and spending at a glance.
              </Text>
            </View>

            {/* <Pressable
              style={styles.headerSettingsButton}
              onPress={() => router.push("/settings" as any)}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel="App settings"
            >
              <Ionicons name="settings-outline" size={22} color="#4B5563" />
            </Pressable> */}
          </View>

          {/* Profile hero */}
          <View style={styles.profileCard}>
            <View style={styles.avatarWrapper}>
              {profile.imageUri ? (
                <Image
                  source={{ uri: profile.imageUri }}
                  style={styles.avatarImage}
                  resizeMode="cover"
                />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <Ionicons name="person" size={58} color="#1aaa00" />
                </View>
              )}

              {imageBusy && (
                <View style={styles.loadingOverlay}>
                  <ActivityIndicator color="#1aaa00" />
                </View>
              )}

              <Pressable
                style={styles.avatarEditBadge}
                onPress={() => setPhotoModalVisible(true)}
                hitSlop={8}
              >
                <Ionicons name="camera" size={16} color="#FFFFFF" />
              </Pressable>
            </View>

            {/* Tap the name (or the pencil) to edit it */}
            <Pressable
              style={styles.nameRow}
              onPress={openNameEditor}
              hitSlop={8}
              accessibilityRole="button"
              accessibilityLabel={`Username: ${profile.username}. Edit username`}
            >
              <Text style={[styles.profileName, { flexShrink: 1 }]} numberOfLines={1}>
                {profile.username}
              </Text>
              <Ionicons name="pencil" size={16} color="#6B7280" />
            </Pressable>

            <View style={styles.userIdPill}>
              <Ionicons name="id-card-outline" size={14} color="#6B7280" />
              <Text style={styles.userIdText} selectable>
                {profile.userId}
              </Text>
            </View>

            <Text style={styles.memberSince}>Member since {firstUsedLabel}</Text>
          </View>

          {/* Year-to-date spending */}
          <View style={styles.spendingCard}>
            <View style={styles.spendingHeaderRow}>
              <View>
                <Text style={styles.spendingLabel}>SPENT THIS YEAR</Text>
                <Text style={styles.spendingAmount}>
                  {currencySymbol} {formatAmount(ytdSummary.total)}
                </Text>
              </View>

              <View style={styles.yearBadge}>
                <Text style={styles.yearBadgeText}>{ytdSummary.year}</Text>
              </View>
            </View>

            <View style={styles.spendingStatsRow}>
              <View style={styles.spendingStat}>
                <Text style={styles.spendingStatValue}>{ytdSummary.count}</Text>
                <Text style={styles.spendingStatLabel}>Transactions</Text>
              </View>

              <View style={styles.spendingDivider} />

              <View style={styles.spendingStat}>
                <Text style={styles.spendingStatValue}>{ytdSummary.monthsTracked}</Text>
                <Text style={styles.spendingStatLabel}>Months tracked</Text>
              </View>

              <View style={styles.spendingDivider} />

              <View style={styles.spendingStat}>
                <Text style={styles.spendingStatValue}>
                  {currencySymbol} {formatCompactAmount(ytdSummary.averagePerMonth)}
                </Text>
                <Text style={styles.spendingStatLabel}>Avg / month</Text>
              </View>
            </View>

            {ytdSummary.topCategory && (
              <View style={styles.topCategoryRow}>
                <Text style={styles.topCategoryLabel}>Biggest category</Text>
                <Text style={styles.topCategoryValue}>
                  {ytdSummary.topCategory.label} · {currencySymbol}{" "}
                  {formatCompactAmount(ytdSummary.topCategory.total)}
                </Text>
              </View>
            )}
          </View>

          {/* Profile photo */}
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Profile photo</Text>
            <Text style={styles.sectionDescription}>
              Add a square photo so your profile feels personal. You can change or remove it at
              any time.
            </Text>

            <View style={styles.photoActionsRow}>
              <Pressable
                style={styles.primaryAction}
                onPress={() => setPhotoModalVisible(true)}
              >
                <Ionicons
                  name={profile.imageUri ? "image-outline" : "add"}
                  size={20}
                  color="#FFFFFF"
                />
                <Text style={styles.primaryActionText}>
                  {profile.imageUri ? "Change photo" : "Add photo"}
                </Text>
              </Pressable>

              {profile.imageUri && (
                <Pressable style={styles.secondaryAction} onPress={handleRemoveImage}>
                  <Ionicons name="trash-outline" size={18} color="#B91C1C" />
                  <Text style={styles.secondaryActionText}>Remove</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Edit username sheet */}
      <Modal
        animationType="slide"
        transparent
        visible={nameModalVisible}
        onRequestClose={closeNameEditor}
      >
        {/* The Modal lives outside the screen's KeyboardAvoidingView, so it needs its own. */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.sheetOverlay}
        >
          <View style={styles.sheetCard}>
            <View style={styles.sheetHandle} />

            <Text style={styles.sheetTitle}>Edit username</Text>
            <Text style={styles.sheetSubtitle}>
              This is the name shown on your profile. It is stored on this device.
            </Text>

            <TextInput
              style={[styles.nameInput, nameError ? styles.nameInputInvalid : null]}
              value={nameDraft}
              onChangeText={handleNameChange}
              placeholder="Your name"
              placeholderTextColor="#9CA3AF"
              maxLength={MAX_USERNAME_LENGTH}
              autoFocus
              selectTextOnFocus
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={handleSaveName}
              editable={!nameSaving}
              accessibilityLabel="Username"
            />

            {nameError ? <Text style={styles.nameInputError}>{nameError}</Text> : null}

            <Pressable
              style={[styles.sheetPrimary, nameSaving && styles.sheetPrimaryDisabled]}
              onPress={handleSaveName}
              disabled={nameSaving}
              accessibilityRole="button"
              accessibilityLabel="Save username"
            >
              {nameSaving ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.sheetPrimaryText}>Save name</Text>
              )}
            </Pressable>

            <Pressable style={styles.sheetCancel} onPress={closeNameEditor} disabled={nameSaving}>
              <Text style={styles.sheetCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Photo action sheet */}
      <Modal
        animationType="slide"
        transparent
        visible={photoModalVisible}
        onRequestClose={() => setPhotoModalVisible(false)}
      >
        <View style={styles.sheetOverlay}>
          <View style={styles.sheetCard}>
            <View style={styles.sheetHandle} />

            <Text style={styles.sheetTitle}>
              {profile.imageUri ? "Update profile photo" : "Add profile photo"}
            </Text>
            <Text style={styles.sheetSubtitle}>
              Choose a square image for the best result. Your photo is stored on this device.
            </Text>

            <Pressable style={styles.sheetOption} onPress={() => pickImage("camera")}>
              <Ionicons name="camera-outline" size={22} color="#1aaa00" />
              <Text style={styles.sheetOptionText}>Take a photo</Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="#9CA3AF"
                style={styles.sheetChevron}
              />
            </Pressable>

            <Pressable style={styles.sheetOption} onPress={() => pickImage("library")}>
              <Ionicons name="image-outline" size={22} color="#1aaa00" />
              <Text style={styles.sheetOptionText}>Choose from library</Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color="#9CA3AF"
                style={styles.sheetChevron}
              />
            </Pressable>

            {profile.imageUri && (
              <Pressable style={styles.sheetOption} onPress={handleRemoveImage}>
                <Ionicons name="trash-outline" size={22} color="#B91C1C" />
                <Text style={[styles.sheetOptionText, styles.sheetOptionDangerText]}>
                  Remove photo
                </Text>
              </Pressable>
            )}

            <Pressable style={styles.sheetCancel} onPress={() => setPhotoModalVisible(false)}>
              <Text style={styles.sheetCancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

