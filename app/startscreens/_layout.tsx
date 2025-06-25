import { Stack } from "expo-router";

export default function RootLayout() {
  //hides ugly header//
  return <Stack >
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
  </Stack>;
}
