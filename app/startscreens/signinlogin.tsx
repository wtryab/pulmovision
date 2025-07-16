import { router } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from "../../assets/images/Logoblue.png";

const { width, height } = Dimensions.get("window");

function goToPage(num: number) {
  if (num === 1) {
    router.navigate("/startscreens/login");
  } else if (num === 2) {
    router.navigate("/startscreens/signup");
  } else if (num === 3) {
    router.navigate("/startscreens/workerlogin");
  }
}

const SignInLogin = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.heading}>Welcome to PulmoVision</Text>
      <Text style={styles.description}>
        Sign in to access cutting-edge AI-driven medical diagnostics or create a new account to get started.
      </Text>
      <Text style={styles.description}>Your health journey begins here.</Text>
      <View style={styles.innerDiv}>
        <TouchableOpacity style={[styles.commonButton, styles.loginButton]} onPress={() => goToPage(1)}>
          <Text style={[{ color: "#fff" }, styles.buttonText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.commonButton, styles.signUpButton]} onPress={() => goToPage(2)}>
          <Text style={[{ color: "#1a78d2" }, styles.buttonText]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToPage(3)}>
          <Text style={styles.worker}>Worker Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInLogin;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: height * 0.2,
  },
  heading: {
    fontSize: width * 0.05,
    fontFamily: "Poppins_Regular",
    fontWeight: "bold",
    paddingVertical: 22,
  },
  description: {
    fontFamily: "Poppins_Regular",
    color: "gray",
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: width * 0.03,
    textAlign: "center",
  },
  commonButton: {
    paddingHorizontal: width * 0.25,
    paddingVertical: width * 0.04,
    borderRadius: 50,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
  },
  buttonText: {
    fontFamily: "Poppins_Bold",
    fontSize: width * 0.04,
  },
  signUpButton: {
    backgroundColor: "white",
    borderColor: "#1a78d2",
    borderWidth: 1.5,
  },
  worker: {
    fontFamily: "Poppins_Regular",
    color: "blue",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#1a78d2",
  },
  innerDiv: {
    position: "relative",
    top: width / 10,
  },
});
