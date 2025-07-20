import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { Stack } from "expo-router";

export default function RootLayout() {
   const [fontsLoaded, fontError] = useFonts({
    // Map your font names to the imported font assets
    'Poppins_Regular': Poppins_400Regular, // This is the name you'll use in StyleSheet
    'Poppins_Bold': Poppins_700Bold,     // This is the name you'll use in StyleSheet
});
  
  //hides ugly header//
  return (
  <Stack >
    <Stack.Screen
        name="workerDashboard"
        options={{ headerShown: false }}
      />
    <Stack.Screen
      name="newCase"
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="patientHistory"
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="profile"
      options={{ headerShown: false }}
    />
  </Stack>
  );
}
