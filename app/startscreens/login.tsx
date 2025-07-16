import MyLoader from '@/components/loader';
import { useUser } from '@/hooks/useUser';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get("window");

const LoginScreenAlignedInputs = () => {
	const [loading, setLoading]=useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const {user,login}= useUser();
  
  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };
  
  const handleSignUp = () => {
    router.push('/startscreens/signup');
  };
  
  const handleLogin = async() => {
		if(!email||!password){
			Alert.alert("Error", "Enter Email and Password")
			return
		}

		setLoading(true)
		const response = await login(email, password)
		setLoading(false)
		if (response){	
			router.replace("/patient/dash")
		} 
		else {
			Alert.alert("Error", "Incorrect Email or Password")
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={'height'}
        keyboardVerticalOffset={0}
      >
        <View style={styles.header}>
          <TouchableOpacity onPressIn={router.back}>
            <Ionicons name='chevron-back-outline' size={width * 0.08} color="#333" />
          </TouchableOpacity>
          <Text style={styles.heading}>Login</Text>
          <View style={{ width: width * 0.08 }} />
        </View>

        <View style={styles.contentArea}>
          <View style={styles.inputSection}>
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

            <TouchableOpacity onPressIn={handleForgotPassword} style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.loginButton} onPressIn={handleLogin}>
            {loading?<MyLoader/>:<Text style={styles.loginButtonText}>Login</Text>}
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't Have an Account? </Text>
            <TouchableOpacity onPressIn={handleSignUp}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreenAlignedInputs;

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
    paddingTop: height * 0.05,
    alignItems: 'center',
  },
  inputSection: {
    width: '100%',
    marginBottom: height * 0.02,
  },
  fieldView: {
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#f5f5f5",
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
    fontFamily: 'Poppins_Regular',
    flex: 1,
    fontSize: width * 0.04,
    color: '#333',
    paddingVertical: 0,
  },
  passwordToggle: {
    paddingLeft: width * 0.02,
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: -height * 0.01,
    marginBottom: height * 0.03,
  },
  forgotPasswordText: {
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
    height: height * 0.075, 
  },
  loginButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontFamily: 'Poppins_Bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.04,
    marginBottom: height * 0.02,
  },
  signUpText: {
    fontSize: width * 0.04,
    color: '#555',
    fontFamily: 'Poppins_Regular',
  },
  signUpLink: {
    fontSize: width * 0.04,
    color: '#1a78d2',
    fontFamily: 'Poppins_Bold',
  },
});
