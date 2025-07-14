import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const MyLoader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#ffff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyLoader;