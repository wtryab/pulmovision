import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get("window");

const EmployeeLoginScreen = () => { // Renamed component for clarity
  const [employeeId, setEmployeeId] = useState('');  
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleContactAdmin = () => {
    console.log('Contact Admin pressed');
    // Implement contact admin functionality (e.g., open email, call)
  };

  // Handler for Login button
  const handleLogin = () => {
    console.log('Login Pressed');
    // Implement your login logic here
    if (employeeId && password) {
      Alert.alert('Login Attempt', `Employee ID: ${employeeId}\nPassword: ${password}`);
      // Typically, you'd send this to an authentication API
      // Then navigate to the main app if successful
    } else {
      Alert.alert('Error', 'Please enter both Employee ID and Password.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={'height'}
        keyboardVerticalOffset={0}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity onPressIn={router.back}>
            <Ionicons name='chevron-back-outline' size={width * 0.08} color="#333" />
          </TouchableOpacity>
          <Text style={styles.heading}>Worker Login</Text>
          <View style={{ width: width * 0.08 }} />
        </View>

        {/* Main Content Area */}
        <View style={styles.contentArea}>
          {/* Input Fields Section */}
          <View style={styles.inputSection}>
            {/* Employee ID Input Field */}
            <View style={styles.fieldview}>
              <Ionicons name="id-card-outline" size={width*0.06} color="gray" style={styles.inputIcon} /><TextInput
                style={styles.input}
                placeholder='Enter your employee ID' 
                placeholderTextColor="gray"
                keyboardType='default' 
                value={employeeId} 
                onChangeText={setEmployeeId} 
              />
            </View>

            {/* Password Input Field */}
            <View style={styles.fieldview}>
              <FontAwesome name='lock' size={width * 0.06} color={"gray"} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder='Enter your password'
                placeholderTextColor="gray"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPressIn={() => setShowPassword(!showPassword)}
                style={styles.passwordToggle}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={width * 0.06}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            {/* Forgot Password? & Contact Admin Links */}
            <View style={styles.linksContainer}>
              <TouchableOpacity onPressIn={handleContactAdmin}>
                <Text style={styles.linkText}>Forgot Password? Contact Admin</Text>
              </TouchableOpacity>
            </View>

          </View>

          {/* Login Button */}
          
          <TouchableOpacity style={styles.loginButton} onPressIn={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EmployeeLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    color: '#333',
    fontFamily: "Poppins_Bold",
  },
  contentArea: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05, // Space between header and first input field
    alignItems: 'center', // Center content like inputs and buttons horizontally
  },
  inputSection: {
    width: '100%',
  },
  fieldview: {
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    paddingHorizontal: width * 0.04,
    height: height * 0.07,
    marginBottom: height * 0.025, // Space between input fields
    width: '100%',
  },
  inputIcon: {
    marginRight: width * 0.03,
  },
  input: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#333',
    fontFamily: 'Poppins_Regular',
    paddingVertical: 0,
  },
  passwordToggle: {
    paddingLeft: width * 0.02,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Pushes links to opposite ends
    width: '100%',
    marginBottom: height * 0.03, // Space between links and Login button
    paddingHorizontal: width * 0.02, // Adjust slightly for link alignment
  },
  linkText: {
    fontSize: width * 0.035,
    color: '#1a78d2',
    fontFamily: 'Poppins_Regular',
  },
  loginButton: {
    backgroundColor: "#1a78d2",
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
  loginButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
     fontFamily: 'Poppins_Bold',
  },
});