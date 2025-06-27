import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

const {width,height} =Dimensions.get("window")

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Ionicons name='chevron-back-outline'>
        <Text>Back</Text>
      </Ionicons>
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput placeholder='First Name' value='name'></TextInput>

      <TextInput placeholder='Last Name' value='name'></TextInput>
  
      <TextInput placeholder='Age' value='age' keyboardType='numeric' ></TextInput>
  
      <TextInput placeholder='Enter your Full Name' value='name'></TextInput>
  
      <TextInput placeholder='Enter your Full Name' value='name'></TextInput>
  
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor:"red",
  alignItems: "center",
  position: "absolute",
  top: width*0.1
  },
  heading:{
    textAlign:"center"
  }
})