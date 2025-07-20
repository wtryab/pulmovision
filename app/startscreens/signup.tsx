import MyLoader from '@/components/loader';
import { useUser } from '@/hooks/useUser';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const SignUpScreen = () => {
  // State for input values
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(''); // This will now hold 'Male', 'Female', or 'Other'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const {signUp} = useUser()

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for terms and conditions checkbox
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  // REMOVED: showGenderDropdown state is no longer needed for radio buttons

  // State for error messages
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [cnicError, setCnicError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  // Gender options for radio buttons
  const genderOptions = ['Male', 'Female']; // Simplified for radio buttons, 'Other' can be added if needed

  // --- Validation Functions (remain largely the same, adjusted for gender) ---
  const validateName = (text:string)=> {
    if (!text.trim()) { return 'Name is required.'; }
    if (text.trim().length < 3) { return 'Name must be at least 3 characters.'; }
    return '';
  };

  const validateEmail = (text:string)=> {
    if (!text.trim()) { return 'Email is required.'; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) { return 'Please enter a valid email address.'; }
    return '';
  };

  const validateAge = (text:string)=> {
    if (!text.trim()) { return 'Age is required.'; }
    const ageNum = parseInt(text, 10);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) { return 'Please enter a valid age (1-120).'; }
    return '';
  };

  const validateGender = (text:string)=> {
    // For radio buttons, just check if something is selected
    if (!text.trim()) { return 'Gender is required.'; }
    return '';
  };

  const validatePhoneNumber = (text:string)=> {
    if (!text.trim()) { return 'Phone number is required.'; }
    const phoneRegex = /^03[0-9]{9}$/;
    if (!phoneRegex.test(text)) { return 'Number should start as 03XXX and 11 digits.'; }
    return '';
  };

  const validateCnic = (text:string)=> {
    if (!text.trim()) { return 'CNIC is required.'; }
    const cnicRegex = /^\d{13}$/;
    if (!cnicRegex.test(text)) { return 'CNIC must be 13 digits. No dashes'; }
    return '';
  };

  const validatePassword = (text:string)=> {
    if (!text) { return 'Password is required.'; }
    if (text.length < 8) { return 'Password must be at least 8 characters.'; }
    // Add more complex password rules here if needed (e.g., uppercase, number, special char)
    return '';
  };

  const validateConfirmPassword = (text:string, mainPassword:string) => {
    if (!text) { return 'Confirm Password is required.'; }
    if (text !== mainPassword) { return 'Passwords do not match.'; }
    return '';
  };

  const validateTerms = (isChecked:boolean) => {
    if (!isChecked) { return 'You must agree to the terms and conditions.'; }
    return '';
  };

  // --- Handlers ---
  const handleSignUp = async() => {
    let isValid = true;

    // Run all validations
    const nameErr = validateName(name); setNameError(nameErr); if (nameErr) isValid = false;
    const emailErr = validateEmail(email); setEmailError(emailErr); if (emailErr) isValid = false;
    const ageErr = validateAge(age); setAgeError(ageErr); if (ageErr) isValid = false;
    const genderErr = validateGender(gender); setGenderError(genderErr); if (genderErr) isValid = false;
    const phoneErr = validatePhoneNumber(phoneNumber); setPhoneNumberError(phoneErr); if (phoneErr) isValid = false;
    const cnicErr = validateCnic(cnic); setCnicError(cnicErr); if (cnicErr) isValid = false;
    const passwordErr = validatePassword(password); setPasswordError(passwordErr); if (passwordErr) isValid = false;
    const confirmPasswordErr = validateConfirmPassword(confirmPassword, password); setConfirmPasswordError(confirmPasswordErr); if (confirmPasswordErr) isValid = false;
    const termsErr = validateTerms(agreeToTerms); setTermsError(termsErr); if (termsErr) isValid = false;

    if (!isValid) {
      Alert.alert('Validation Error', 'Please correct the errors in the form.');
      return;
    }
    setLoading(true)
    const response = await signUp(name, email, password,phoneNumber, age, cnic, gender)
    setLoading(false)
    if (response){
      router.replace("/patient/patientDashboard")
    } 
  
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
        style={styles.keyboardAvoidingView}
        behavior={'height'}
        keyboardVerticalOffset={20}
      >
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
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.inputSection}>
            {/* Name Input */}
            <View style={styles.inputFieldWrapper}>
              <View style={styles.fieldView}>
                <Ionicons name="person-outline" size={width * 0.06} color="gray" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder='Enter your name'
                  placeholderTextColor="gray"
                  value={name}
                  onChangeText={(text:string)=> { setName(text); setNameError(validateName(text)); }}
                  onBlur={() => setNameError(validateName(name))}
                />
              </View>
              {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
            </View>

            {/* Email Input */}
            <View style={styles.inputFieldWrapper}>
              <View style={styles.fieldView}>
                <Ionicons name="mail-outline" size={width * 0.06} color="gray" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholderTextColor="gray"
                  onChangeText={(text:string)=> { setEmail(text); setEmailError(validateEmail(text)); }}
                  onBlur={() => setEmailError(validateEmail(email))}
                  placeholder="Enter your email"
                  value={email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="email"
                />
              </View>
              {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            </View>

            {/* Age Input */}
            <View style={styles.inputFieldWrapper}>
              <View style={styles.fieldView}>
                <MaterialCommunityIcons name="calendar-range-outline" size={width * 0.06} color="gray" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder='Enter your age'
                  placeholderTextColor="gray"
                  keyboardType='numeric'
                  value={age}
                  maxLength={3}
                  onChangeText={(text:string)=> { setAge(text); setAgeError(validateAge(text)); }}
                  onBlur={() => setAgeError(validateAge(age))}
                />
              </View>
              {ageError ? <Text style={styles.errorText}>{ageError}</Text> : null}
            </View>

            {/* Gender Radio Buttons */}
            <View style={styles.inputFieldWrapper}>
              <Text style={styles.radioGroupLabel}>Select your gender</Text>
              <View style={styles.radioGroup}>
                {genderOptions.map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={styles.radioButton}
                    onPress={() => {
                      setGender(option);
                      setGenderError(validateGender(option)); // Validate on selection
                    }}
                  >
                    <Ionicons
                      name={gender === option ? 'radio-button-on' : 'radio-button-off'}
                      size={width * 0.055}
                      color={gender === option ? '#1a78d2' : 'gray'}
                    />
                    <Text style={styles.radioLabel}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {genderError ? <Text style={styles.errorText}>{genderError}</Text> : null}
            </View>

            {/* Phone Number Input */}
            <View style={styles.inputFieldWrapper}>
              <View style={styles.fieldView}>
                <FontAwesome name="phone" size={width * 0.06} color="gray" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder='Enter your Phone Number'
                  placeholderTextColor="gray"
                  keyboardType='phone-pad'
                  value={phoneNumber}
                  maxLength={11}
                  onChangeText={(text:string)=> { setPhoneNumber(text); setPhoneNumberError(validatePhoneNumber(text)); }}
                  onBlur={() => setPhoneNumberError(validatePhoneNumber(phoneNumber))}
                />
              </View>
              {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
            </View>

            {/* CNIC Input */}
            <View style={styles.inputFieldWrapper}>
              <View style={styles.fieldView}>
                <AntDesign name="idcard" size={width * 0.06} color="gray" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder='Enter your CNIC'
                  placeholderTextColor="gray"
                  keyboardType='numeric'
                  value={cnic}
                  maxLength={13}
                  onChangeText={(text:string)=> { setCnic(text); setCnicError(validateCnic(text)); }}
                  onBlur={() => setCnicError(validateCnic(cnic))}
                />
              </View>
              {cnicError ? <Text style={styles.errorText}>{cnicError}</Text> : null}
            </View>

            {/* Password Input */}
            <View style={styles.inputFieldWrapper}>
              <View style={styles.fieldView}>
                <FontAwesome name='lock' size={width * 0.06} color={"gray"} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder='Create new Password'
                  placeholderTextColor="gray"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text:string)=> {
                    setPassword(text);
                    setPasswordError(validatePassword(text));
                    if (confirmPassword) {
                      setConfirmPasswordError(validateConfirmPassword(confirmPassword, text));
                    }
                  }}
                  onBlur={() => setPasswordError(validatePassword(password))}
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
              {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>

            {/* Confirm Password Input */}
            <View style={styles.inputFieldWrapper}>
              <View style={styles.fieldView}>
                <FontAwesome name='lock' size={width * 0.06} color={"gray"} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder='Confirm Password'
                  placeholderTextColor="gray"
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={(text:string)=> {
                    setConfirmPassword(text);
                    setConfirmPasswordError(validateConfirmPassword(text, password));
                  }}
                  onBlur={() => setConfirmPasswordError(validateConfirmPassword(confirmPassword, password))}
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
              {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
            </View>
          </View>

          {/* Terms and Conditions Checkbox */}
          <View style={styles.termsContainer}>
            <View style={styles.checkboxWrapper}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => {
                  setAgreeToTerms(!agreeToTerms);
                  setTermsError(validateTerms(!agreeToTerms));
                }}
              >
                <Ionicons
                  name={agreeToTerms ? 'checkbox-outline' : 'square-outline'}
                  size={width * 0.06}
                  color={agreeToTerms ? '#1a78d2' : 'gray'}
                />
              </TouchableOpacity>
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
            {termsError ? <Text style={[styles.errorText, styles.termsErrorText]}>{termsError}</Text> : null}
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            {loading?<MyLoader/>: <Text style={styles.signUpButtonText}>Sign Up</Text>}
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
    paddingTop: height * 0.02,
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
  },
  inputFieldWrapper: {
    width: '100%',
    marginBottom: height * 0.025,
  },
  fieldView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: width * 0.04,
    height: height * 0.07,
    width: '100%',
    position: 'relative',
  },
  inputIcon: {
    marginRight: width * 0.03,
  },
  input: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#333',
    paddingVertical: 0,
    paddingRight: width * 0.1,
  },
  passwordToggle: {
    position: 'absolute',
    right: width * 0.04,
    height: '100%',
    justifyContent: 'center',
    paddingLeft: width * 0.02,
  },
  errorText: {
    color: 'red',
    fontSize: width * 0.032,
    marginTop: height * 0.005,
    alignSelf: 'flex-start',
    paddingLeft: width * 0.04,
  },
  termsContainer: {
    width: '100%',
    marginBottom: 20
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  checkbox: {
    marginRight: width * 0.02,
    padding: 5,
  },
  termsText: {
    flex: 1,
    fontSize: width * 0.035,
    color: '#555',
    lineHeight: width * 0.05,
  },
  termsLink: {
    color: '#1a78d2',
    fontWeight: 'bold',
  },
  termsErrorText: {
    textAlign: 'center',
    marginBottom: height * 0.03,
    marginTop: 0,
    paddingLeft: 0,
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
  // === NEW STYLES FOR RADIO BUTTONS ===
  radioGroupLabel: {
    fontSize: width * 0.04,
    color: '#333',
    marginBottom: height * 0.01,
    paddingLeft: width * 0.04, // Align with input icons
    fontWeight: '600',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute buttons evenly
    width: '100%',
    backgroundColor: '#f5f5f5', // Match input field background
    borderRadius: 30, // Match input field border radius
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.04,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.005,
  },
  radioLabel: {
    fontSize: width * 0.04,
    color: '#333',
    marginLeft: width * 0.02,
  },
});