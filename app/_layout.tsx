import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'white' },
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="[userId]"
            options={{
              headerShown: true,
              headerTitle: 'Profile',
              headerTitleStyle: {
                color: '#0891B2',
                fontSize: 18,
                fontWeight: '600',
              },
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: 'white',
              },
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
