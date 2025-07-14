import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const imageOne = require("@/assets/images/onboardscreen1.png");
const imageTwo = require("@/assets/images/onboardscreen2.png");

const onboardingTexts = [
  "Empowering diagnosis with the precision of AI",
  "Interpretable insights for detection of Tuberculosis and Pneumonia"
];

const Onboarding = () => {
  const [currentImage, setCurrentImage] = useState(imageOne);
  const [currentText, setCurrentText] = useState(onboardingTexts[0]);

  const handleChangeImage = () => {
    if (currentImage === imageOne) {
      setCurrentImage(imageTwo);
      setCurrentText(onboardingTexts[1]);
      return;
    }
    if (currentImage === imageTwo) {
      router.replace("/startscreens/signinlogin");
    }
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.buttonContainer}>
        <Pressable>
          <Text>Back</Text>
        </Pressable>
        <Pressable onPressIn={() => router.replace("/startscreens/signinlogin")}> 
          <Text>Skip</Text>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <Image source={currentImage} style={styles.image} />
      </View>

      <Text style={styles.text}>{currentText}</Text>

      <View style={styles.nextButtonContainer}>
        <TouchableOpacity onPress={handleChangeImage} style={styles.button}>
          <Ionicons name='arrow-forward' size={40} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 25,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  imageContainer: {
    backgroundColor: "blue",
    flex: 4,
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: width * 0.045,
    textAlign: 'left',
    paddingHorizontal: width * 0.05,
    marginTop: width * 0.2,
    color: '#333',
    fontFamily: 'Poppins_Bold',
    lineHeight: width * 0.08,
    marginBottom: height * 0.05,
  },
  nextButtonContainer: {
    flex: 1.5,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  outerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    flex: 1,
  },
  image: {
    alignSelf: "center",
    width: height / 2,
    height: height / 2,
  },
  button: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: (width * 0.15) / 2,
    backgroundColor: '#1a78d2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.14,
    marginBottom: 70,
  }
});
