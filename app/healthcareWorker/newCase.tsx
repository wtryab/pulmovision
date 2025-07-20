import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const NewCaseScreen = () => {
  const [patientId, setPatientId] = useState('');
  const [patientHistory, setPatientHistory] = useState('');

  // Calculate an approximate height for the footer
  // You might need to fine-tune this value based on actual footer height + desired spacing
  const FOOTER_HEIGHT = height * 0.07 + 30; // Roughly paddingVertical * 2 + icon size + marginBottom

  return (
    <SafeAreaView style={styles.container}>
      {/* Header - Stays outside the ScrollView */}
      <View style={styles.header}>
        <Text style={styles.title}>Kindly provide{'\n'}necessary details{'\n'}below</Text>
        <Image
          source={require('../../assets/placeholders/1.png')}
          style={styles.profileImage}
        />
      </View>

      {/* KeyboardAvoidingView wrapping ScrollView */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -FOOTER_HEIGHT} // Adjust offset if needed for Android
      >
        <ScrollView
          contentContainerStyle={[styles.scrollViewContent, { paddingBottom: FOOTER_HEIGHT }]} // Dynamic padding based on footer height
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Patient ID Input */}
          <View style={styles.inputContainer}>
            <Ionicons name="body-outline" size={width * 0.05} color="gray" style={styles.inputIcon} />
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
          <Text style={styles.descriptionHint}>
            Enter Patient's symptoms and history   {patientHistory.length}/100
          </Text>
          <TextInput
            placeholder="Enter Patient History and Symptoms here"
            placeholderTextColor="gray"
            value={patientHistory}
            onChangeText={text => setPatientHistory(text)}
            multiline
            style={styles.textArea}
            maxLength={100}
          />
          <Text style={styles.sectionTitle}>Patient Scan</Text>

          {/* Upload Image */}
          <TouchableOpacity style={styles.uploadContainer}>
            <Ionicons name="image-outline" size={width * 0.1} color="#ccc" />
            <Text style={styles.uploadText}>Upload Image</Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.submitButton}
            //onPress={() => router.push('/startscreens/submitconfirmation')}  // Adjust path as needed
          >
            <Text style={styles.submitButtonText}>Submit Case</Text>
          </TouchableOpacity>

          {/* Removed the extra View with fixed height, replaced by paddingBottom */}
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Footer Navigation - Absolutely positioned at the bottom */}
      <View style={styles.footerNav}>
        <TouchableOpacity onPress={() => router.push("/healthcareWorker/workerDashboard")}>
          <Ionicons name="home-outline" size={width * 0.07} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity >
          <Ionicons name="notifications-outline" size={width * 0.07} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity /*onPress={() => router.push('/startscreens/profile')}*/>
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
  keyboardAvoidingContainer: {
    flex: 1, // Still crucial for KeyboardAvoidingView to take up available space
  },
  header: {
    marginTop:height*0.01,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
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
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: width * 0.07,
    paddingTop: height * 0.03,
    // paddingBottom will be set dynamically in the component
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.02,
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
    marginBottom: height * 0.01,
  },
  textArea: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    minHeight: height * 0.17,
    textAlignVertical: 'top',
  },
  descriptionHint: {
    fontSize: width * 0.035,
    color: '#999',
    paddingBottom:20
  },
  uploadContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.18,
    marginTop: height * 0.01,
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
    marginVertical: height * 0.03,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:width*0.04
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: height * 0.015,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    // === CRITICAL CHANGES HERE ===
    position: 'relative', // Re-introduce absolute positioning
    bottom: 0, // Anchor to the very bottom
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    // Removed marginBottom as bottom: 0 handles it
  },
});