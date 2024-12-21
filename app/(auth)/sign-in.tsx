import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { AuthLayout, Button, InputField } from '~/components';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogIn = () => {
    // Function to handle log in
    signIn();
    router.replace('/(tabs)');
  };

  return (
    <AuthLayout>
      <Text className="my-4 text-center text-2xl font-bold text-gray-500">Sign In</Text>

      {/* Email input */}
      <View className="my-2">
        <InputField
          label="Email"
          placeholder="Enter your email"
          inputProps={{ autoCapitalize: 'none' }}
        />
      </View>

      {/* Password input */}
      <View className="my-2">
        <InputField
          label="Password"
          placeholder="Enter password"
          isSecureTextEntry
          showEyeButton
          inputProps={{ autoCapitalize: 'none', autoCorrect: false, autoComplete: 'off' }}
        />
      </View>

      {/* Action buttons */}
      <View className="my-5 ">
        <Button title="Log In" className="mb-4" onPress={handleLogIn} />

        <Text className="text-center text-gray-400">Don't have account ?</Text>
        <Link href="/sign-up" className="text-center font-semibold text-cyan-500">
          Sign Up
        </Link>
      </View>
    </AuthLayout>
  );
};

export default SignIn;
