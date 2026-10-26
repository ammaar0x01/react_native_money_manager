import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function loginView() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardWrapper}>
          
          {/* Top Brand Header */}
          <View style={styles.brandContainer}>
            <Text style={styles.brandSub}>The</Text>
            <Text style={styles.brandMain}>PawnShop</Text>
          </View>

          {/* Main Orange Card */}
          <View style={styles.orangeCard}>
            <Text style={styles.cardTitle}>Log In</Text>

            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#888888"
              value={email}
              onChangeText={setEmail}
              style={styles.inputField}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#888888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.inputField}
            />

            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>I forgot my password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} activeOpacity={0.85}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            {/* Link to Sign Up */}
            <TouchableOpacity
              onPress={() => router.push('/signup' as any)}
              style={styles.linkButton}
            >
              <Text style={styles.linkText}>I don't have an account</Text>
            </TouchableOpacity>
          </View>

          {/* Browse Button */}
          <TouchableOpacity
            onPress={() => router.push('/')}
            style={styles.browseButton}
            activeOpacity={0.85}
          >
            <Text style={styles.browseButtonText}>I just want to browse</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#FFE8B6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    width: '100%',
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    backgroundColor: '#FFE8B6',
    borderRadius: 36,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  brandSub: {
    fontSize: 20,
    fontWeight: '600',
    color: '#D97706',
    lineHeight: 22,
  },
  brandMain: {
    fontSize: 30,
    fontWeight: '800',
    color: '#D97706',
  },

  // === LOGIN SECTION ===
  orangeCard: {
    backgroundColor: 'transparent',
    // backgroundColor: '#F59E0B',

    borderRadius: 32,
    padding: 40,
    paddingHorizontal: 54,
    // width: '100%',
    alignItems: 'center',
    
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 6 },
    // shadowOpacity: 0.12,
    // shadowRadius: 10,
    // elevation: 5,

    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#d58f04',
    marginBottom: 24,
  },
  inputField: {
    backgroundColor: '#ffffff',
    // borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 13,
    
    // outline: 'none', 
     height: 50,
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 8,
    // paddingHorizontal: 10,
    // fontSize: 16,

    textAlign: 'center',
    width: 400,
    // width: '100%',

    fontSize: 14,
    color: '#111827',
    marginBottom: 14,
  },
  forgotPasswordButton: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#D97706',
    fontSize: 15,
    fontWeight: '800',
  },
  linkButton: {
    marginTop: 2,
  },
  linkText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  browseButton: {
    backgroundColor: '#9A3412',
    borderRadius: 24,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
  },
  browseButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
