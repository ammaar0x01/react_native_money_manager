// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import { useRouter } from 'expo-router';


// // export default function SignUpView() {
// //   const router = useRouter();
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');

// //   return (
// //     <View style={styles.outerContainer}>
// //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
// //         <View style={styles.cardWrapper}>
          
// //           {/* Top Brand Header */}
// //           <View style={styles.brandContainer}>
// //             <Text style={styles.brandSub}>The</Text>
// //             <Text style={styles.brandMain}>PawnShop</Text>
// //           </View>

// //           {/* Main Orange Card */}
// //           <View style={styles.orangeCard}>
// //             <Text style={styles.cardTitle}>Sign Up</Text>

// //             <TextInput
// //               placeholder="First Name"
// //               placeholderTextColor="#888888"
// //               value={firstName}
// //               onChangeText={setFirstName}
// //               style={styles.inputField}
// //             />

// //             <TextInput
// //               placeholder="Last Name"
// //               placeholderTextColor="#888888"
// //               value={lastName}
// //               onChangeText={setLastName}
// //               style={styles.inputField}
// //             />

// //             <TextInput
// //               placeholder="Email Address"
// //               placeholderTextColor="#888888"
// //               value={email}
// //               onChangeText={setEmail}
// //               style={styles.inputField}
// //             />

// //             <TextInput
// //               placeholder="Password"
// //               placeholderTextColor="#888888"
// //               value={password}
// //               onChangeText={setPassword}
// //               secureTextEntry
// //               style={styles.inputField}
// //             />

// //             <TextInput
// //               placeholder="Confirm Password"
// //               placeholderTextColor="#888888"
// //               value={confirmPassword}
// //               onChangeText={setConfirmPassword}
// //               secureTextEntry
// //               style={styles.inputField}
// //             />

// //             <TouchableOpacity style={styles.signupButton} activeOpacity={0.85}>
// //               <Text style={styles.signupButtonText}>Sign Up</Text>
// //             </TouchableOpacity>

// //             {/* Link back to Login */}
// //             <TouchableOpacity
// //               onPress={() => router.push('/login' as any)}
// //               style={styles.linkButton}
// //             >
// //               <Text style={styles.linkText}>I already have an account</Text>
// //             </TouchableOpacity>
// //           </View>

// //           {/* Browse Button */}
// //           <TouchableOpacity
// //             onPress={() => router.push('/')}
// //             style={styles.browseButton}
// //             activeOpacity={0.85}
// //           >
// //             <Text style={styles.browseButtonText}>I just want to browse</Text>
// //           </TouchableOpacity>

// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   outerContainer: {
// //     flex: 1,
// //     backgroundColor: '#FFE8B6',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     padding: 16,
// //   },
// //   scrollContent: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     paddingVertical: 24,
// //     width: '100%',
// //   },
// //   cardWrapper: {
// //     width: '100%',
// //     maxWidth: 380,
// //     alignItems: 'center',
// //     backgroundColor: '#FFE8B6',
// //     borderRadius: 36,
// //     padding: 16,
// //     borderWidth: 1,
// //     borderColor: '#FDE68A',
// //   },
// //   brandContainer: {
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   brandSub: {
// //     fontSize: 20,
// //     fontWeight: '600',
// //     color: '#D97706',
// //     lineHeight: 22,
// //   },
// //   brandMain: {
// //     fontSize: 30,
// //     fontWeight: '800',
// //     color: '#D97706',
// //   },
// //   orangeCard: {
// //     backgroundColor: '#F59E0B',
// //     borderRadius: 32,
// //     paddingVertical: 32,
// //     paddingHorizontal: 24,
// //     width: '100%',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 6 },
// //     shadowOpacity: 0.12,
// //     shadowRadius: 10,
// //     elevation: 5,
// //     marginBottom: 16,
// //   },
// //   cardTitle: {
// //     fontSize: 34,
// //     fontWeight: '800',
// //     color: '#FFFFFF',
// //     marginBottom: 24,
// //   },
// //   inputField: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 24,
// //     paddingHorizontal: 20,
// //     paddingVertical: 13,
// //     width: '100%',
// //     fontSize: 14,
// //     color: '#111827',
// //     marginBottom: 14,
// //   },
// //   signupButton: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 24,
// //     paddingVertical: 12,
// //     width: '100%',
// //     alignItems: 'center',
// //     marginTop: 6,
// //     marginBottom: 16,
// //   },
// //   signupButtonText: {
// //     color: '#D97706',
// //     fontSize: 15,
// //     fontWeight: '800',
// //   },
// //   linkButton: {
// //     marginTop: 2,
// //   },
// //   linkText: {
// //     color: '#FFFFFF',
// //     fontSize: 13,
// //     fontWeight: '600',
// //     textDecorationLine: 'underline',
// //   },
// //   browseButton: {
// //     backgroundColor: '#9A3412',
// //     borderRadius: 24,
// //     paddingVertical: 14,
// //     width: '100%',
// //     alignItems: 'center',
// //   },
// //   browseButtonText: {
// //     color: '#FFFFFF',
// //     fontSize: 15,
// //     fontWeight: '700',
// //   },
// // });



// // newer1 WORKS---
// import React, { useState } from 'react';
// import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function SignUpView() {
//   const router = useRouter();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   // Email validator regex
//   const validateEmail = (inputEmail: string) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(inputEmail);
//   };

//   const handleSignUp = () => {
//     setErrorMessage('');

//     if (!firstName.trim() || !lastName.trim() || !email.trim() || !password || !confirmPassword) {
//       setErrorMessage('Please fill in all fields.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     if (password.length < 6) {
//       setErrorMessage('Password must be at least 6 characters long.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setErrorMessage('Passwords do not match.');
//       return;
//     }

//     // Proceed with sign up registration logic here
//     console.log('Signing up with:', { firstName, lastName, email });
//   };

//   return (
//     <KeyboardAvoidingView 
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
//       style={styles.outerContainer}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         <View style={styles.cardWrapper}>
          
//           {/* Top Brand Header */}
//           <View style={styles.brandContainer}>
//             <Text style={styles.brandSub}>The</Text>
//             <Text style={styles.brandMain}>PawnShop</Text>
//           </View>

//           {/* Main Orange Card */}
//           <View style={styles.orangeCard}>
//             <Text style={styles.cardTitle}>Create Account</Text>
//             <Text style={styles.cardSubtitle}>Join to start bidding and selling items</Text>

//             {/* Error Message Banner if validation fails */}
//             {errorMessage ? (
//               <View style={styles.errorBanner}>
//                 <Text style={styles.errorBannerText}>{errorMessage}</Text>
//               </View>
//             ) : null}

//             {/* Name Inputs Row / Stack */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="First Name"
//                 placeholderTextColor="#9CA3AF"
//                 value={firstName}
//                 onChangeText={setFirstName}
//                 style={styles.inputField}
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="Last Name"
//                 placeholderTextColor="#9CA3AF"
//                 value={lastName}
//                 onChangeText={setLastName}
//                 style={styles.inputField}
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="Email Address"
//                 placeholderTextColor="#9CA3AF"
//                 value={email}
//                 onChangeText={setEmail}
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 style={styles.inputField}
//               />
//             </View>

//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="Password"
//                 placeholderTextColor="#9CA3AF"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword}
//                 style={styles.inputField}
//               />
//               <TouchableOpacity 
//                 style={styles.eyeIconToggle} 
//                 onPress={() => setShowPassword(!showPassword)}
//               >
//                 <Text style={styles.eyeIconText}>{showPassword ? 'Hide' : 'Show'}</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="Confirm Password"
//                 placeholderTextColor="#9CA3AF"
//                 value={confirmPassword}
//                 onChangeText={setConfirmPassword}
//                 secureTextEntry={!showConfirmPassword}
//                 style={styles.inputField}
//               />
//               <TouchableOpacity 
//                 style={styles.eyeIconToggle} 
//                 onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 <Text style={styles.eyeIconText}>{showConfirmPassword ? 'Hide' : 'Show'}</Text>
//               </TouchableOpacity>
//             </View>

//             {/* Sign Up Action Button */}
//             <TouchableOpacity 
//               style={styles.signupButton} 
//               activeOpacity={0.9}
//               onPress={handleSignUp}
//             >
//               <Text style={styles.signupButtonText}>Create Account</Text>
//             </TouchableOpacity>

//             {/* Link back to Login */}
//             <TouchableOpacity
//               onPress={() => router.push('/login')}
//               style={styles.linkButton}
//               activeOpacity={0.7}
//             >
//               <Text style={styles.linkText}>
//                 Already have an account? <Text style={styles.loginTextBold}>Log In</Text>
//               </Text>
//             </TouchableOpacity>
//           </View>

//           {/* Browse Button */}
//           <TouchableOpacity
//             onPress={() => router.push('/')}
//             style={styles.browseButton}
//             activeOpacity={0.9}
//           >
//             <Text style={styles.browseButtonText}>I just want to browse</Text>
//           </TouchableOpacity>

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
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   errorBanner: {
//     backgroundColor: '#7F1D1D',
//     borderRadius: 12,
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     width: '100%',
//     marginBottom: 16,
//     alignItems: 'center',
//   },
//   errorBannerText: {
//     color: '#FEF2F2',
//     fontSize: 13,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   inputContainer: {
//     width: '100%',
//     position: 'relative',
//     marginBottom: 14,
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
//   eyeIconToggle: {
//     position: 'absolute',
//     right: 16,
//     top: 14,
//     padding: 4,
//   },
//   eyeIconText: {
//     color: '#C2410C',
//     fontSize: 13,
//     fontWeight: '700',
//   },
//   signupButton: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingVertical: 16,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 6,
//     marginBottom: 18,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   signupButtonText: {
//     color: '#EA580C',
//     fontSize: 16,
//     fontWeight: '800',
//     letterSpacing: 0.5,
//   },
//   linkButton: {
//     marginTop: 4,
//   },
//   linkText: {
//     color: '#FFEDD5',
//     fontSize: 13,
//     fontWeight: '500',
//   },
//   loginTextBold: {
//     color: '#FFFFFF',
//     fontWeight: '700',
//     textDecorationLine: 'underline',
//   },
//   browseButton: {
//     backgroundColor: '#9A3412',
//     borderRadius: 16,
//     paddingVertical: 16,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   browseButtonText: {
//     color: '#FFFFFF',
//     fontSize: 15,
//     fontWeight: '700',
//     letterSpacing: 0.3,
//   },
// });



// newer2, WORKS-- bg image 
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUpView() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (inputEmail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
  };

  const handleSignUp = () => {
    setErrorMessage('');

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    console.log('Signing up with:', { firstName, lastName, email });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.outerContainer}
    >
      {/* Background Image Container */}
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop' }} // Replace with your own image URI or local asset require('../assets/images/bg.jpg')
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Semi-transparent dark/orange overlay to keep text legible */}
        <View style={styles.overlay} />

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.cardWrapper}>
            
            {/* Top Brand Header */}
            <View style={styles.brandContainer}>
              <Text style={styles.brandSub}>The</Text>
              <Text style={styles.brandMain}>PawnShop</Text>
            </View>

            {/* Main Orange Card */}
            <View style={styles.orangeCard}>
              <Text style={styles.cardTitle}>Create Account</Text>
              <Text style={styles.cardSubtitle}>Join to start bidding and selling items</Text>

              {errorMessage ? (
                <View style={styles.errorBanner}>
                  <Text style={styles.errorBannerText}>{errorMessage}</Text>
                </View>
              ) : null}

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor="#9CA3AF"
                  value={firstName}
                  onChangeText={setFirstName}
                  style={styles.inputField}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor="#9CA3AF"
                  value={lastName}
                  onChangeText={setLastName}
                  style={styles.inputField}
                />
              </View>

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

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  style={styles.inputField}
                />
                <TouchableOpacity 
                  style={styles.eyeIconToggle} 
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.eyeIconText}>{showPassword ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor="#9CA3AF"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  style={styles.inputField}
                />
                <TouchableOpacity 
                  style={styles.eyeIconToggle} 
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Text style={styles.eyeIconText}>{showConfirmPassword ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={styles.signupButton} 
                activeOpacity={0.9}
                onPress={handleSignUp}
              >
                <Text style={styles.signupButtonText}>Create Account</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push('/login')}
                style={styles.linkButton}
                activeOpacity={0.7}
              >
                <Text style={styles.linkText}>
                  Already have an account? <Text style={styles.loginTextBold}>Log In</Text>
                </Text>
              </TouchableOpacity>
            </View>

            {/* Browse Button */}
            <TouchableOpacity
              onPress={() => router.push('/')}
              style={styles.browseButton}
              activeOpacity={0.9}
            >
              <Text style={styles.browseButtonText}>I just want to browse</Text>
            </TouchableOpacity>

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
    backgroundColor: 'rgba(50, 20, 5, 0.65)', // Warm dark overlay to ensure readability over any background image
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
    color: '#FCD34D', // Slightly brighter yellow-orange for contrast on dark photo backgrounds
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
    backgroundColor: 'rgba(249, 115, 22, 0.9)', // Slight transparency to let background texture peek through gracefully
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
    marginBottom: 14,
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
  eyeIconToggle: {
    position: 'absolute',
    right: 16,
    top: 14,
    padding: 4,
  },
  eyeIconText: {
    color: '#C2410C',
    fontSize: 13,
    fontWeight: '700',
  },
  signupButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  signupButtonText: {
    color: '#EA580C',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  linkButton: {
    marginTop: 4,
  },
  linkText: {
    color: '#FFEDD5',
    fontSize: 13,
    fontWeight: '500',
  },
  loginTextBold: {
    color: '#FFFFFF',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  browseButton: {
    backgroundColor: 'rgba(154, 52, 18, 0.9)',
    borderRadius: 16,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  browseButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
