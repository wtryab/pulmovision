import { Link } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from "../../assets/images/Logo.png";

const signinlogin = () => {
  return (
    <View>
        <Image source={logo}/>
        <Text>Welcome to PulmoVision</Text>
        <Text>Sign in to access cutting-edge AI-driven medical diagnostics or create a new account to get started. Your health journey begins here</Text>
        <Link href="/startscreens/signup">Sign Up</Link>
        <Link href="/startscreens/login">Login</Link>
    </View>
  )
}

export default signinlogin

const styles = StyleSheet.create({})