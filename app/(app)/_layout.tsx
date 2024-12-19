import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../context/AuthContext';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function AppLayout() {
  const { loading, user } = useAuth();

  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!user) {
      if (segments[1] === '(tabs)' || '(screens)') {
        router.replace('/sign-in');
      }
    }
  }, [user, loading]);

  if (loading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
