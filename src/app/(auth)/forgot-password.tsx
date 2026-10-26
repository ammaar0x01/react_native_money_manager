// import React, { useState } from 'react';
// import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function ForgotPasswordView() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Email format validator regex
//   const validateEmail = (inputEmail: string) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(inputEmail);
//   };

//   const handleResetPassword = () => {
//     setEmailError('');

//     if (!email.trim()) {
//       setEmailError('Email address is required.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     // Trigger password reset API call here
//     setIsSubmitted(true);
//   };

//   return (
//     <KeyboardAvoidingView 
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
//       style={styles.outerContainer}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         <View style={styles.cardWrapper}>
          
//           {/* Brand Header */}
//           <View style={styles.brandContainer}>
//             <Text style={styles.brandSub}>The</Text>
//             <Text style={styles.brandMain}>PawnShop</Text>
//           </View>

//           {/* Inner Orange Card */}
//           <View style={styles.orangeCard}>
//             <Text style={styles.cardTitle}>Reset Password</Text>

//             {!isSubmitted ? (
//               <>
//                 <Text style={styles.cardSubtitle}>
//                   Enter your account email and we'll send you a link to reset your password.
//                 </Text>

//                 {/* Email Input Field */}
//                 <View style={styles.inputContainer}>
//                   <TextInput
//                     placeholder="Email Address"
//                     placeholderTextColor="#9CA3AF"
//                     value={email}
//                     onChangeText={(text) => {
//                       setEmail(text);
//                       if (emailError) setEmailError('');
//                     }}
//                     autoCapitalize="none"
//                     keyboardType="email-address"
//                     style={[styles.inputField, emailError ? styles.inputErrorBorder : null]}
//                   />
//                   {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//                 </View>

//                 {/* Submit Button */}
//                 <TouchableOpacity 
//                   style={styles.submitButton} 
//                   activeOpacity={0.9}
//                   onPress={handleResetPassword}
//                 >
//                   <Text style={styles.submitButtonText}>Send Reset Link</Text>
//                 </TouchableOpacity>
//               </>
//             ) : (
//               <View style={styles.successContainer}>
//                 <Text style={styles.successTitle}>Check Your Inbox!</Text>
//                 <Text style={styles.successSubtitle}>
//                   We've sent password reset instructions to <Text style={styles.boldText}>{email}</Text>.
//                 </Text>
//               </View>
//             )}

//             {/* Back to Login Link */}
//             <TouchableOpacity 
//               style={styles.backButton} 
//               activeOpacity={0.7}
//               onPress={() => router.navigate("/login")}
//             >
//               <Text style={styles.backButtonText}>← Back to Log In</Text>
//             </TouchableOpacity>
//           </View>

//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     backgroundColor: '#FFF7ED',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     paddingVertical: 40,
//   },
//   cardWrapper: {
//     width: '100%',
//     maxWidth: 400,
//     alignItems: 'center',
//   },
//   brandContainer: {
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   brandSub: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#D97706',
//     letterSpacing: 2,
//     textTransform: 'uppercase',
//   },
//   brandMain: {
//     fontSize: 36,
//     fontWeight: '900',
//     color: '#C2410C',
//     letterSpacing: -0.5,
//   },
//   orangeCard: {
//     backgroundColor: '#F97316',
//     borderRadius: 28,
//     padding: 28,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#C2410C',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.25,
//     shadowRadius: 16,
//     elevation: 8,
//     marginBottom: 16,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     marginBottom: 4,
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#FFEDD5',
//     marginBottom: 24,
//     textAlign: 'center',
//     lineHeight: 20,
//   },
//   inputContainer: {
//     width: '100%',
//     position: 'relative',
//     marginBottom: 16,
//   },
//   inputField: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingHorizontal: 18,
//     paddingVertical: 14,
//     width: '100%',
//     fontSize: 15,
//     color: '#1F2937',
//     borderWidth: 1,
//     borderColor: 'transparent',
//   },
//   inputErrorBorder: {
//     borderColor: '#7F1D1D',
//     borderWidth: 1.5,
//   },
//   errorText: {
//     color: '#FEF2F2',
//     fontSize: 12,
//     fontWeight: '600',
//     marginTop: 4,
//     marginLeft: 6,
//   },
//   submitButton: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingVertical: 16,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   submitButtonText: {
//     color: '#EA580C',
//     fontSize: 16,
//     fontWeight: '800',
//     letterSpacing: 0.5,
//   },
//   successContainer: {
//     alignItems: 'center',
//     marginVertical: 12,
//     width: '100%',
//   },
//   successTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 8,
//   },
//   successSubtitle: {
//     fontSize: 14,
//     color: '#FFEDD5',
//     textAlign: 'center',
//     lineHeight: 20,
//     marginBottom: 16,
//   },
//   boldText: {
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   backButton: {
//     marginTop: 8,
//     padding: 4,
//   },
//   backButtonText: {
//     color: '#FFEDD5',
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });


// newer1 bg-image 
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function ForgotPasswordView() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Email format validator regex
  const validateEmail = (inputEmail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
  };

  const handleResetPassword = () => {
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Email address is required.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Trigger password reset API call here
    setIsSubmitted(true);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.outerContainer}
    >
      {/* Background Image Container */}
      <ImageBackground 
        // source={{ uri: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop' }} 

        // source={{ uri: 'https://images.unsplash.com/photo-1768839722988-91767bb82b10?q=80&w=1170&auto=format&fit=crop' }} 
        // source={{ uri: 'https://images.unsplash.com/photo-1774898989484-0b9becf69efb?q=80&w=1170&auto=format&fit=crop' }} 
        source={{ uri: 'https://images.unsplash.com/photo-1726607424599-db0c41681494?q=80&w=1170&auto=format&fit=crop' }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Semi-transparent dark/orange overlay keeping background consistent */}
        <View style={styles.overlay} />

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.cardWrapper}>
            
            {/* Brand Header */}
            <View style={styles.brandContainer}>
              <Text style={styles.brandSub}>The</Text>
              <Text style={styles.brandMain}>PawnShop</Text>
            </View>

            {/* Inner Orange Card */}
            <View style={styles.orangeCard}>
              <Text style={styles.cardTitle}>Reset Password</Text>

              {!isSubmitted ? (
                <>
                  <Text style={styles.cardSubtitle}>
                    Enter your account email and we'll send you a link to reset your password.
                  </Text>

                  {errorMessage ? (
                    <View style={styles.errorBanner}>
                      <Text style={styles.errorBannerText}>{errorMessage}</Text>
                    </View>
                  ) : null}

                  {/* Email Input Field */}
                  <View style={styles.inputContainer}>
                    <TextInput
                      placeholder="Email Address"
                      placeholderTextColor="#9CA3AF"
                      value={email}
                      onChangeText={setEmail}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      style={styles.inputField}
                    />
                  </View>

                  {/* Submit Button */}
                  <TouchableOpacity 
                    style={styles.submitButton} 
                    activeOpacity={0.9}
                    onPress={handleResetPassword}
                  >
                    <Text style={styles.submitButtonText}>Send Reset Link</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <View style={styles.successContainer}>
                  <Text style={styles.successTitle}>Check Your Inbox!</Text>
                  <Text style={styles.successSubtitle}>
                    We've sent password reset instructions to <Text style={styles.boldText}>{email}</Text>.
                  </Text>
                </View>
              )}

              {/* Back to Login Link */}
              <TouchableOpacity 
                style={styles.backButton} 
                activeOpacity={0.7}
                onPress={() => router.navigate('/login')}
              >
                <Text style={styles.backButtonText}>← Back to Log In</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(50, 20, 5, 0.65)', // Matching warm dark overlay
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingVertical: 40,
  },
  cardWrapper: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  brandSub: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FCD34D',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  brandMain: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: -0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  orangeCard: {
    backgroundColor: 'rgba(249, 115, 22, 0.9)',
    borderRadius: 28,
    padding: 28,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#FFEDD5',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  errorBanner: {
    backgroundColor: '#7F1D1D',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: '100%',
    marginBottom: 16,
    alignItems: 'center',
  },
  errorBannerText: {
    color: '#FEF2F2',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 16,
  },
  inputField: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    width: '100%',
    fontSize: 15,
    color: '#1F2937',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  submitButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  submitButtonText: {
    color: '#EA580C',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  successContainer: {
    alignItems: 'center',
    marginVertical: 12,
    width: '100%',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 14,
    color: '#FFEDD5',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  boldText: {
    fontWeight: '700',
    color: '#FFFFFF',
  },
  backButton: {
    marginTop: 8,
    padding: 4,
  },
  backButtonText: {
    color: '#FFEDD5',
    fontSize: 14,
    fontWeight: '600',
  },
});

