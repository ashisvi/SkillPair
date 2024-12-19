import '../global.css';

import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { auth } from '~/utils/firebase';

// export const unstable_settings = {
//   initialRouteName: '(tabs)',
// };

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    const uid = user.id;

    console.log(uid);

    setUser(user);
    if (initializing) setInitializing(false);
  };

  // Listen for changes in user auth state
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    setInitializing(false);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    if (!user) {
      <Redirect href="/(auth)/index" />;
    } else {
      <Redirect href="/(tabs)" />;
    }
  }, [user, initializing]);

  if (initializing)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'white' },
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
