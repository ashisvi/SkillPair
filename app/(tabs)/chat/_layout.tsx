import { Stack } from 'expo-router';

const ChatLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[chatId]" />
    </Stack>
  );
};

export default ChatLayout;
