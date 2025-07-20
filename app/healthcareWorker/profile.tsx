import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const logout = ()=>{
    router.replace("/startscreens/signinlogin")
}

const profile = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={logout}>
    <View style={styles.buttonContent}>
      <Ionicons name="log-out-outline" size={22} color="#ff3b30" />
      <Text style={styles.buttonText}>Log Out</Text>
    </View>
  </TouchableOpacity>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 59, 48, 0.2)',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#ff3b30',
    fontSize: 16,
    fontWeight: '500',
  },
});