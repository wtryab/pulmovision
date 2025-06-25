import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const onboarding = () => {
  return (
    <View style={{flex:1, justifyContent:"center"}}>
      <Link href={"/startscreens/signinlogin"}>Signup</Link>
      <Text>onboarding</Text>
    </View>
  )
}

export default onboarding

const styles = StyleSheet.create({})