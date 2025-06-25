import { Stack } from "expo-router";

export default function RootLayout() {
  //hides ugly header//
  return <Stack >
    <Stack.Screen
      name="startscreens"
      options={{ headerShown: false }}
    />
  </Stack>;
}
