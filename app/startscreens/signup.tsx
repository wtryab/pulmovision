import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router'; // Assuming you are using Expo Router for navigation
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    if (!name || !age || !gender || !phoneNumber || !email || !cnic || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    console.log('Sign Up Data:', {
      name,
      age,
      gender,
      phoneNumber,
      cnic,
      password,
    });
    Alert.alert('Success', 'Sign Up functionality would be implemented here!');
  };

  const handleLoginRedirect = () => {
    console.log('Redirecting to Login');
    router.replace('/startscreens/login');
  };

  const handleTermsOfService = () => {
    console.log('Terms of Service pressed');
    Alert.alert('Terms of Service', 'Navigate to Terms of Service page.');
  };

  const handlePrivacyPolicy = () => {
    console.log('Privacy Policy pressed');
    Alert.alert('Privacy Policy', 'Navigate to Privacy Policy page.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={router.back}>
            <Ionicons name='chevron-back-outline' size={width * 0.08} color="#333" />
          </TouchableOpacity>
          <Text style={styles.heading}>Sign Up</Text>
          <View style={{ width: width * 0.08 }} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.inputSection}>
            <View style={styles.fieldView}>
              <Ionicons name="person-outline" size={width * 0.06} color="gray" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder='Enter your name'
                placeholderTextColor="gray"
                value={name}
                onChangeText={setName}
              />
            </View>

                        <View style={styles.fieldView}>
                          <Ionicons name="mail-outline" size={width * 0.06} color="gray" style={styles.inputIcon}/>
                          <TextInput
                            style={styles.input}
                            placeholderTextColor="gray"
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            value={email}
                            keyboardType="email-address" // Crucial for email inputs
                            autoCapitalize="none"        // Prevents auto-capitalization of the first letter
                            autoCorrect={false}          // Prevents autocorrection which can be annoying for emails
                            autoComplete="email" 
                          />
                        </View>
            

            <View style={styles.fieldView}>
              <MaterialCommunityIcons name="calendar-range-outline" size={width * 0.06} color="gray" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder='Enter your age'
                placeholderTextColor="gray"
                keyboardType='numeric'
                value={age}
                onChangeText={setAge}
              />
            </View>

            <TouchableOpacity style={styles.fieldView}>
              <Ionicons name="person-outline" size={width * 0.06} color="gray" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder='Enter your gender'
                placeholderTextColor="gray"
                value={gender}
                onChangeText={setGender}
                editable={false}
              />
              <Ionicons name="chevron-down-outline" size={width * 0.05} color="gray" />
            </TouchableOpacity>

            <View style={styles.fieldView}>
              <FontAwesome name="phone" size={width * 0.06} color="gray" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder='Enter your Phone'
                placeholderTextColor="gray"
                keyboardType='phone-pad'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>

            <View style={styles.fieldView}>
              <AntDesign name="idcard" size={width * 0.06} color="gray" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder='Enter your CNIC'
                placeholderTextColor="gray"
                keyboardType='numeric'
                value={cnic}
                onChangeText={setCnic}
              />
            </View>

            <View style={styles.fieldView}>
              <FontAwesome name='lock' size={width * 0.06} color={"gray"} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder='Create new Password'
                placeholderTextColor="gray"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.passwordToggle}
              >
                <MaterialCommunityIcons
                  name={showPassword ? "eye-off" : "eye"}
                  size={width * 0.06}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.fieldView}>
              <FontAwesome name='lock' size={width * 0.06} color={"gray"} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                placeholderTextColor="gray"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.passwordToggle}
              >
                <MaterialCommunityIcons
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={width * 0.06}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              I agree to the Pulmovision{' '}
              <Text style={styles.termsLink} onPress={handleTermsOfService}>
                Terms of services
              </Text>{' '}
              and{' '}
              <Text style={styles.termsLink} onPress={handlePrivacyPolicy}>
                Privacy Policy
              </Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.loginRedirectContainer}>
            <Text style={styles.loginRedirectText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleLoginRedirect}>
              <Text style={styles.loginRedirectLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: width * 0.05,
    paddingTop: Platform.OS === 'ios' ? height * 0.02 : height * 0.02,
    paddingBottom: height * 0.02,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  heading: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.03,
    paddingBottom: height * 0.03,
    alignItems: 'center',
  },
  inputSection: {
    width: '100%',
    marginBottom: height * 0.02,
  },
  fieldView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: width * 0.04,
    height: height * 0.07,
    marginBottom: height * 0.025,
    width: '100%',
  },
  inputIcon: {
    marginRight: width * 0.03,
  },
  input: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#333',
    paddingVertical: 0,
  },
  passwordToggle: {
    paddingLeft: width * 0.02,
  },
  termsContainer: {
    width: '100%',
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.02,
  },
  termsText: {
    fontSize: width * 0.035,
    color: '#555',
    textAlign: 'center',
    lineHeight: width * 0.05,
  },
  termsLink: {
    color: '#1a78d2',
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#1a78d2',
    width: '100%',
    paddingVertical: height * 0.02,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  loginRedirectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.03,
    marginBottom: height * 0.02,
  },
  loginRedirectText: {
    fontSize: width * 0.04,
    color: '#555',
  },
  loginRedirectLink: {
    fontSize: width * 0.04,
    color: '#1a78d2',
    fontWeight: 'bold',
  },
});
