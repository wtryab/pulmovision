import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Stack } from "expo-router";

export default function RootLayout() {
   const [fontsLoaded, fontError] = useFonts({
    // Map your font names to the imported font assets
    'Poppins_Regular': Poppins_400Regular, // This is the name you'll use in StyleSheet
    'Poppins_Bold': Poppins_700Bold,     // This is the name you'll use in StyleSheet
    // You can use different names here if you prefer, but keep them consistent
  });
  
  //hides ugly header//
  return (
  <Stack >
    <Stack.Screen
      name="index"
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="onboarding"
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="signinlogin"
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="signup"
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="login"
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="workerlogin"
      options={{ headerShown: false }}
    />
  </Stack>);
}
