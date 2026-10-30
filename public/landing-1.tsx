import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const HERO_IMAGE = require('@/images/hero.jpg');

export default function LandingScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Navbar */}
      <View style={[styles.navbar, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
        <View style={styles.brandContainer}>
          <View style={styles.brandIconBox}>
            <Ionicons name="wallet-outline" size={22} color="#FFFFFF" />
          </View>

          <View>
            <Text style={styles.brandText}>Money Manager</Text>
            <Text style={styles.brandSubText}>Expense tracker</Text>
          </View>
        </View>

        <Pressable
          style={styles.navLaunchButton}
          onPress={() => router.replace('/' as any)}
        >
          <Text style={styles.navLaunchButtonText}>Open App</Text>
          <Ionicons name="arrow-forward" size={16} color="#FFFFFF" style={{ marginLeft: 6 }} />
        </Pressable>
      </View>

      {/* Hero Section */}
      <View style={[styles.heroSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
        <View style={[styles.heroContent, isDesktop && styles.heroContentDesktop]}>
          <View style={styles.pillBadge}>
            <Ionicons name="shield-checkmark" size={14} color="#15803D" style={{ marginRight: 6 }} />
            <Text style={styles.pillBadgeText}>Private, offline-first expense tracking</Text>
          </View>

          <Text style={styles.heroTitle}>
            Know where your money goes.
            <br />
            <Text style={styles.heroTitleHighlight}>Every month.</Text>
          </Text>

          <Text style={styles.heroDescription}>
            Log daily expenses, set monthly budgets, and browse a full year of spending
            history. Money Manager keeps your finances organized — with everything stored
            privately on your device.
          </Text>

          <View style={styles.heroButtonsRow}>
            <Pressable
              style={styles.primaryButton}
              onPress={() => router.replace('/' as any)}
            >
              <Text style={styles.primaryButtonText}>Start Tracking Free</Text>
              <Ionicons name="arrow-forward" size={18} color="#2e2d01" style={{ marginLeft: 8 }} />
            </Pressable>

            <Pressable
              style={styles.secondaryButton}
              onPress={() => router.replace('/monthly-expenses' as any)}
            >
              <Ionicons name="calendar-outline" size={18} color="#1F2937" style={{ marginRight: 8 }} />
              <Text style={styles.secondaryButtonText}>Monthly Report</Text>
            </Pressable>
          </View>

          <View style={styles.heroTrustRow}>
            <View style={styles.heroTrustItem}>
              <Ionicons name="checkmark-circle" size={15} color="#1aaa00" />
              <Text style={styles.heroTrustText}>No account needed</Text>
            </View>
            <View style={styles.heroTrustItem}>
              <Ionicons name="checkmark-circle" size={15} color="#1aaa00" />
              <Text style={styles.heroTrustText}>Works offline</Text>
            </View>
          </View>
        </View>

        {/* Hero Image with app preview card */}
        <View
          style={[
            styles.heroImageContainer,
            isDesktop && styles.heroImageContainerDesktop,
          ]}
        >
          <Image source={HERO_IMAGE} style={styles.heroImage} resizeMode="cover" />

          <View style={styles.heroPreviewCard}>
            <View style={styles.heroPreviewTopRow}>
              <Text style={styles.heroPreviewLabel}>SPENT THIS MONTH</Text>
              <View style={styles.heroPreviewBadge}>
                <Text style={styles.heroPreviewBadgeText}>On track</Text>
              </View>
            </View>

            <Text style={styles.heroPreviewAmount}>R 4,231.50</Text>

            <View style={styles.heroPreviewTrack}>
              <View style={styles.heroPreviewFill} />
            </View>

            <Text style={styles.heroPreviewMeta}>65% of your R 6,500 monthly budget</Text>
          </View>
        </View>
      </View>

      {/* Quick stats */}
      <View style={[styles.statsSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>13</Text>
            <Text style={styles.statLabel}>months of history</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statValue}>7</Text>
            <Text style={styles.statLabel}>spending categories</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <Text style={styles.statValue}>100%</Text>
            <Text style={styles.statLabel}>stored on your device</Text>
          </View>
        </View>
      </View>

      {/* Features Grid Section */}
      <View style={[styles.featuresSection, { paddingHorizontal: isDesktop ? 60 : 20 }]}>
        <Text style={styles.sectionCategory}>BUILT FOR BETTER SPENDING</Text>
        <Text style={styles.sectionTitle}>Everything you need to stay on budget</Text>

        <View style={[styles.featuresGrid, isDesktop && styles.featuresGridDesktop]}>
          {/* Feature 1 */}
          <View style={styles.featureCard}>
            <View style={[styles.featureIconBox, { backgroundColor: '#DCFCE7' }]}>
              <Ionicons name="pie-chart-outline" size={24} color="#15803D" />
            </View>
            <Text style={styles.featureCardTitle}>Monthly budgets</Text>
            <Text style={styles.featureCardDesc}>
              Set a spending limit for the month, then watch the progress bar show exactly
              how much is left — or how far over budget you are.
            </Text>
          </View>

          {/* Feature 2 */}
          <View style={styles.featureCard}>
            <View style={[styles.featureIconBox, { backgroundColor: '#DBEAFE' }]}>
              <Ionicons name="calendar-outline" size={24} color="#1D4ED8" />
            </View>
            <Text style={styles.featureCardTitle}>13-month history</Text>
            <Text style={styles.featureCardDesc}>
              Switch between this month and the previous 12. Compare totals, spot trends,
              and review past purchases month by month.
            </Text>
          </View>

          {/* Feature 3 */}
          <View style={styles.featureCard}>
            <View style={[styles.featureIconBox, { backgroundColor: '#FEF3C7' }]}>
              <Ionicons name="shield-checkmark-outline" size={24} color="#B45309" />
            </View>
            <Text style={styles.featureCardTitle}>Private by design</Text>
            <Text style={styles.featureCardDesc}>
              Your expenses, budgets, and profile stay saved locally on your device.
              No sign-up, no cloud sync, and no fuss.
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 Money Manager. Built with React Native & Expo.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },

  // --- NAVBAR
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#1aaa00',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  brandText: {
    fontSize: 19,
    fontWeight: '800',
    color: '#111827',
  },
  brandSubText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    marginTop: 1,
  },
  navLaunchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  navLaunchButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  // --- HERO
  heroSection: {
    paddingVertical: 50,
    flexDirection: 'column',
    minHeight: 500,
  },

  // -- left
  heroContent: {
    alignItems: 'flex-start',
    marginBottom: 40,
    marginTop: 20,
  },
  heroContentDesktop: {
    maxWidth: '52%',
    paddingRight: 20,
    marginTop: 60,
  },

  // -- right
  heroImageContainer: {
    width: '100%',
    aspectRatio: 1.45,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
  },
  heroImageContainerDesktop: {
    position: 'absolute',
    right: 60,
    top: 50,
    width: '40%',
    height: 430,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroPreviewCard: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderRadius: 14,
    padding: 14,
  },
  heroPreviewTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroPreviewLabel: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
    color: '#6B7280',
  },
  heroPreviewBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
  },
  heroPreviewBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#15803D',
  },
  heroPreviewAmount: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    marginTop: 4,
  },
  heroPreviewTrack: {
    height: 6,
    borderRadius: 999,
    backgroundColor: '#E5E7EB',
    marginTop: 10,
    overflow: 'hidden',
  },
  heroPreviewFill: {
    width: '65%',
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#1aaa00',
  },
  heroPreviewMeta: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 7,
  },

  pillBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  pillBadgeText: {
    color: '#15803D',
    fontWeight: '700',
    fontSize: 12,
  },
  heroTitle: {
    fontSize: 38,
    fontWeight: '900',
    color: '#111827',
    lineHeight: 46,
    marginBottom: 16,
  },
  heroTitleHighlight: {
    color: '#1aaa00',
  },
  heroDescription: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 25,
    marginBottom: 24,
    maxWidth: 560,
  },
  heroButtonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#95f376',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: '#2e2d01',
    fontWeight: '700',
    fontSize: 15,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  secondaryButtonText: {
    color: '#1F2937',
    fontWeight: '700',
    fontSize: 15,
  },
  heroTrustRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 22,
  },
  heroTrustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heroTrustText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },

  // --- QUICK STATS
  statsSection: {
    paddingBottom: 10,
  },
  statsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0B1F16',
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#95F376',
  },
  statLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 4,
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },

  // --- FEATURE SECTION
  featuresSection: {
    minHeight: 300,
    paddingVertical: 50,
    backgroundColor: '#F9FAFB',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    marginTop: 40,
  },
  sectionCategory: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1aaa00',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 30,
  },
  featuresGrid: {
    flexDirection: 'column',
    gap: 20,
  },
  featuresGridDesktop: {
    flexDirection: 'row',
    gap: 20,
  },
  featureCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  featureIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  featureCardDesc: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 21,
  },

  // --- FOOTER
  footer: {
    paddingVertical: 30,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  footerText: {
    fontSize: 13,
    color: '#6B7280',
  },
});
