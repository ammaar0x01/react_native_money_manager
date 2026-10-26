// // import React, { useState } from 'react';
// // import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// // import { useRouter } from 'expo-router';

// // export default function LoginView() {
// //   const router = useRouter();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   return (
// //     <View style={styles.outerContainer}>
// //       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
// //         <View style={styles.cardWrapper}>
          
// //           {/* Brand Header */}
// //           <View style={styles.brandContainer}>
// //             <Text style={styles.brandSub}>The</Text>
// //             <Text style={styles.brandMain}>PawnShop</Text>
// //           </View>

// //           {/* Inner Orange Card */}
// //           <View style={styles.orangeCard}>
// //             <Text style={styles.cardTitle}>Log In</Text>

// //             <TextInput
// //               placeholder="Email Address"
// //               placeholderTextColor="#6B7280"
// //               value={email}
// //               onChangeText={setEmail}
// //               style={styles.inputField}
// //             />

// //             <TextInput
// //               placeholder="Password"
// //               placeholderTextColor="#6B7280"
// //               value={password}
// //               onChangeText={setPassword}
// //               secureTextEntry
// //               style={styles.inputField}
// //             />

// //             <TouchableOpacity style={styles.forgotPasswordButton}>
// //               <Text style={styles.forgotPasswordText}>I forgot my password</Text>
// //             </TouchableOpacity>

// //             <TouchableOpacity style={styles.loginButton} activeOpacity={0.85}>
// //               <Text style={styles.loginButtonText}>Log In</Text>
// //             </TouchableOpacity>

// //             <TouchableOpacity style={styles.noAccountButton}>
// //               <Text style={styles.noAccountText}>I don't have an account</Text>
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
// //     maxWidth: 420,
// //     alignItems: 'center',
// //   },
// //   brandContainer: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   brandSub: {
// //     fontSize: 22,
// //     fontWeight: '600',
// //     color: '#D97706',
// //     lineHeight: 24,
// //   },
// //   brandMain: {
// //     fontSize: 32,
// //     fontWeight: '800',
// //     color: '#D97706',
// //   },
// //   orangeCard: {
// //     backgroundColor: '#E59400',
// //     borderRadius: 32,
// //     padding: 32,
// //     paddingHorizontal: 50, 
// //     width: '100%',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 6 },
// //     shadowOpacity: 0.15,
// //     shadowRadius: 10,
// //     elevation: 6,
// //     marginBottom: 20,
// //   },
// //   cardTitle: {
// //     fontSize: 36,
// //     fontWeight: '800',
// //     color: '#FFFFFF',
// //     marginBottom: 28,
// //   },
// //   inputField: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 24,
// //     paddingHorizontal: 24,
// //     paddingVertical: 14,
// //     width: '100%',
// //     fontSize: 15,
// //     color: '#111827',
// //     marginBottom: 16,
// //   },
// //   forgotPasswordButton: {
// //     marginBottom: 24,
// //   },
// //   forgotPasswordText: {
// //     color: '#FFFFFF',
// //     fontSize: 14,
// //     fontWeight: '600',
// //     textDecorationLine: 'underline',
// //   },
// //   loginButton: {
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 24,
// //     paddingVertical: 14,
// //     width: '100%',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   loginButtonText: {
// //     color: '#E59400',
// //     fontSize: 16,
// //     fontWeight: '800',
// //   },
// //   noAccountButton: {
// //     marginTop: 4,
// //   },
// //   noAccountText: {
// //     color: '#FFFFFF',
// //     fontSize: 14,
// //     fontWeight: '600',
// //     textDecorationLine: 'underline',
// //   },
// //   browseButton: {
// //     backgroundColor: '#A14B00',
// //     borderRadius: 24,
// //     paddingVertical: 16,
// //     width: '100%',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 6,
// //     elevation: 4,
// //   },
// //   browseButtonText: {
// //     color: '#FFFFFF',
// //     fontSize: 16,
// //     fontWeight: '700',
// //   },
// // });



// import React, { useState } from 'react';
// import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function LoginView() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

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
//             <Text style={styles.cardTitle}>Welcome Back</Text>
//             <Text style={styles.cardSubtitle}>Log in to manage your items & bids</Text>

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

//             <TouchableOpacity style={styles.forgotPasswordButton} activeOpacity={0.7}>
//               <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.loginButton} activeOpacity={0.9}>
//               <Text style={styles.loginButtonText}>Log In</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.noAccountButton} activeOpacity={0.7}>
//               <Text style={styles.noAccountText}>Don't have an account? <Text style={styles.signUpText}>Sign Up</Text></Text>
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
//     backgroundColor: '#FFF7ED', // Warmer, softer cream/orange-tinted background
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
//     backgroundColor: '#F97316', // Vibrant, modern orange
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
//     borderColor: 'rgba(255, 255, 255, 0.3)',
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
//   forgotPasswordButton: {
//     alignSelf: 'flex-end',
//     marginBottom: 24,
//     marginTop: 2,
//   },
//   forgotPasswordText: {
//     color: '#FFEDD5',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   loginButton: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingVertical: 16,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 18,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   loginButtonText: {
//     color: '#EA580C',
//     fontSize: 16,
//     fontWeight: '800',
//     letterSpacing: 0.5,
//   },
//   noAccountButton: {
//     marginTop: 4,
//   },
//   noAccountText: {
//     color: '#FFEDD5',
//     fontSize: 13,
//     fontWeight: '500',
//   },
//   signUpText: {
//     color: '#FFFFFF',
//     fontWeight: '700',
//     textDecorationLine: 'underline',
//   },
//   browseButton: {
//     backgroundColor: '#9A3412', // Deep rich burnt orange for contrast
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



// newer2 WORKS---
// import React, { useState } from 'react';
// import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function LoginView() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [emailError, setEmailError] = useState('');

//   // Basic email format validator regex
//   const validateEmail = (inputEmail: string) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(inputEmail);
//   };

//   const handleLogin = () => {
//     // Reset error
//     setEmailError('');

//     if (!email.trim()) {
//       setEmailError('Email address is required.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     if (!password) {
//       // Optional: Add password validation feedback if needed
//       return;
//     }

//     // Proceed with login logic here
//     console.log('Logging in with:', email);
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
//             <Text style={styles.cardTitle}>Welcome Back</Text>
//             <Text style={styles.cardSubtitle}>Log in to manage your items & bids</Text>

//             {/* Email Input Field */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 placeholder="Email Address"
//                 placeholderTextColor="#9CA3AF"
//                 value={email}
//                 onChangeText={(text) => {
//                   setEmail(text);
//                   if (emailError) setEmailError(''); // Clear error as user types
//                 }}
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 style={[styles.inputField, emailError ? styles.inputErrorBorder : null]}
//               />
//               {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
//             </View>

//             {/* Password Input Field */}
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

//             {/* Forgot Password Navigation */}
//             <TouchableOpacity 
//               style={styles.forgotPasswordButton} 
//               activeOpacity={0.7}
//               onPress={() => router.push('/forgot-password')}
//             >
//               <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
//             </TouchableOpacity>

//             {/* Login Button with Validation */}
//             <TouchableOpacity 
//               style={styles.loginButton} 
//               activeOpacity={0.9}
//               onPress={handleLogin}
//             >
//               <Text style={styles.loginButtonText}>Log In</Text>
//             </TouchableOpacity>

//             {/* Sign Up Navigation */}
//             <TouchableOpacity 
//               style={styles.noAccountButton} 
//               activeOpacity={0.7}
//               onPress={() => router.push('/signup')}
//             >
//               <Text style={styles.noAccountText}>
//                 Don't have an account? <Text style={styles.signUpText}>Sign Up</Text>
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
//     marginBottom: 24,
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
//   inputErrorBorder: {
//     borderColor: '#7F1D1D', // Subtle dark red outline for errors
//     borderWidth: 1.5,
//   },
//   errorText: {
//     color: '#FEF2F2',
//     fontSize: 12,
//     fontWeight: '600',
//     marginTop: 4,
//     marginLeft: 6,
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
//   forgotPasswordButton: {
//     alignSelf: 'flex-end',
//     marginBottom: 24,
//     marginTop: 2,
//   },
//   forgotPasswordText: {
//     color: '#FFEDD5',
//     fontSize: 13,
//     fontWeight: '600',
//   },
//   loginButton: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     paddingVertical: 16,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 18,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   loginButtonText: {
//     color: '#EA580C',
//     fontSize: 16,
//     fontWeight: '800',
//     letterSpacing: 0.5,
//   },
//   noAccountButton: {
//     marginTop: 4,
//   },
//   noAccountText: {
//     color: '#FFEDD5',
//     fontSize: 13,
//     fontWeight: '500',
//   },
//   signUpText: {
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



// newer3 bg-image 
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginView() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Email format validator regex
  const validateEmail = (inputEmail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
  };

  const handleLogin = () => {
    setErrorMessage('');

    if (!email.trim() || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Proceed with login logic here
    console.log('Logging in with:', email);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.outerContainer}
    >
      {/* Background Image Container */}  
      <ImageBackground 
        // source={{ uri: 'https://images.unsplash.com/photo-1792346750032-74dfe5dc4bf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' }} 
        source={{ uri: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' }} 
        // source={{ uri: 'https://images.unsplash.com/photo-1792346750032-74dfe5dc4bf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' }} 

        // source={{ uri: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1000&auto=format&fit=crop' }} // Matches the background used in sign up
      
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Semi-transparent dark/orange overlay to keep text legible */}
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
              <Text style={styles.cardTitle}>Welcome Back</Text>
              <Text style={styles.cardSubtitle}>Log in to manage your items & bids</Text>

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

              {/* Password Input Field */}
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

              {/* Forgot Password Navigation */}
              <TouchableOpacity 
                style={styles.forgotPasswordButton} 
                activeOpacity={0.7}
                onPress={() => router.push('/forgot-password')}
              >
                <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
              </TouchableOpacity>

              {/* Login Button with Validation */}
              <TouchableOpacity 
                style={styles.loginButton} 
                activeOpacity={0.9}
                onPress={handleLogin}
              >
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>

              {/* Sign Up Navigation */}
              <TouchableOpacity 
                style={styles.noAccountButton} 
                activeOpacity={0.7}
                onPress={() => router.push('/signup')}
              >
                <Text style={styles.noAccountText}>
                  Don't have an account? <Text style={styles.signUpText}>Sign Up</Text>
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

    //  backgroundColor: 'rgba(255, 255, 255, 0.3)', 
     backgroundColor: 'rgba(7, 0, 0, 0.73)', 

    // backgroundColor: 'rgba(50, 20, 5, 0.65)', // Warm dark overlay matching your signup view
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
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: 2,
  },
  forgotPasswordText: {
    color: '#FFEDD5',
    fontSize: 13,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  loginButtonText: {
    color: '#EA580C',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  noAccountButton: {
    marginTop: 4,
  },
  noAccountText: {
    color: '#FFEDD5',
    fontSize: 13,
    fontWeight: '500',
  },
  signUpText: {
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

