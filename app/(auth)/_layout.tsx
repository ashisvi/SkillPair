import { Stack } from 'expo-router';

const AuthLayout = () => {
  return <Stack screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }} />;
};

export default AuthLayout;
