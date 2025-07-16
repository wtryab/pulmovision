import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const { width, height } = Dimensions.get('window');

const NewCaseScreen = () => {
  const [patientId, setPatientId] = useState('');
  const [patientHistory, setPatientHistory] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Kindly provide{'\n'}necessary details{'\n'}below</Text>
        <Image
          source={require('../../assets/placeholders/1.png')}
          style={styles.profileImage}
        />
      </View>

      {/* Patient ID Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="md-medical-outline" size={width * 0.05} color="gray" style={styles.inputIcon} />
        <TextInput
          placeholder="Enter Patient ID"
          placeholderTextColor="gray"
          value={patientId}
          onChangeText={setPatientId}
          style={styles.textInput}
        />
      </View>

      {/* Patient History */}
      <Text style={styles.sectionTitle}>Patient History</Text>
      <TextInput
        placeholder="Enter text here"
        placeholderTextColor="gray"
        value={patientHistory}
        onChangeText={text => setPatientHistory(text)}
        multiline
        style={styles.textArea}
        maxLength={100}
/>
<Text style={styles.descriptionHint}>
  Please enter a guide description   {patientHistory.length}/100
</Text>


      {/* Upload Image */}
      <TouchableOpacity style={styles.uploadContainer}>
        <Ionicons name="image-outline" size={width * 0.1} color="#ccc" />
        <Text style={styles.uploadText}>Upload Image</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => router.push('/startscreens/submitconfirmation')}  // Adjust path as needed
      >
        <Text style={styles.submitButtonText}>Submit Case</Text>
      </TouchableOpacity>

      {/* Footer Navigation */}
      <View style={styles.footerNav}>
  <TouchableOpacity onPress={() => router.push('/startscreens/home')}>
    <Ionicons name="home-outline" size={width * 0.07} color="#999" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => router.push('/startscreens/notifications')}>
    <Ionicons name="notifications-outline" size={width * 0.07} color="#999" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => router.push('/startscreens/profile')}>
    <Ionicons name="person-outline" size={width * 0.07} color="#999" />
  </TouchableOpacity>
</View>
    </SafeAreaView>
  );
};

export default NewCaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    // marginTop: height * 0.01,
  },
  profileImage: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: (width * 0.2) / 2,
    marginRight: width * 0.05,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
    marginTop: height * 0.02,
    marginHorizontal: width * 0.05,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.02,
    marginHorizontal: width * 0.05,
  },
  inputIcon: {
    marginRight: width * 0.03,
    marginLeft: width * 0.01,
  },
  textInput: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#333',
    paddingVertical: height * 0.015,
  },
  sectionTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
    marginTop: height * 0.03,
    marginBottom: height * 0.03,
    marginHorizontal: width * 0.05,
    paddingHorizontal: width * 0.04,
  },
  textArea: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    marginHorizontal: width * 0.05,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    minHeight: height * 0.17,
    textAlignVertical: 'top',
  },
  descriptionHint: {
    fontSize: width * 0.035,
    color: '#999',
    marginHorizontal: width * 0.05,
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.04,
  },
  uploadContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.18,
    marginTop: height * 0.01,
    marginHorizontal: width * 0.05,
  },
  uploadText: {
    fontSize: width * 0.035,
    color: '#999',
    marginTop: height * 0.01,
  },
  submitButton: {
    backgroundColor: '#1a78d2',
    borderRadius: 30,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.3,
    alignSelf: 'center',
    marginTop: height * 0.03,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: height * 0.015,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 30,
    backgroundColor: '#fff',
  },
});
