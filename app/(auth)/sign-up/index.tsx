import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { AuthLayout, Button, InputField } from '~/components';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <Text className="my-4 text-center text-2xl font-bold text-gray-500">Sign Up</Text>

      {/* Email input */}
      <View className="my-2">
        <InputField label="Full name" placeholder="Enter your full name" />
      </View>

      {/* Password input */}
      <View className="my-2">
        <InputField
          label="Email"
          placeholder="Enter email"
          inputProps={{ autoCapitalize: 'none' }}
        />
      </View>

      {/* Action buttons */}
      <View className="my-5 ">
        <Button title="Next" className="mb-4" onPress={() => router.push('/sign-up/verify-otp')} />
        <Text className="text-center text-gray-400">Already have an account ?</Text>
        <Link href="../" className="text-center font-semibold text-cyan-500">
          Sign in
        </Link>
      </View>
    </AuthLayout>
  );
};

export default SignUp;
