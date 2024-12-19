import { Link, router } from 'expo-router';
import { Eye, EyeSlash } from 'iconsax-react-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Text className="my-4 text-center text-2xl font-bold text-gray-500">Sign Up</Text>

      {/* Email input */}
      <View className="my-2">
        <KeyboardAvoidingView>
          <Text className="mb-2 font-semibold text-gray-500">Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            className="rounded-md border border-gray-200 bg-gray-50 px-2"
            autoCapitalize="none"
          />
        </KeyboardAvoidingView>
      </View>

      {/* Password input */}
      <View className="my-2">
        <KeyboardAvoidingView>
          <Text className="mb-2 font-semibold text-gray-500">Email</Text>
          <View className="flex-row rounded-md border border-gray-200 bg-gray-50 px-2">
            <TextInput
              placeholder="Enter email"
              className="flex-1"
              secureTextEntry={showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
            />
            <TouchableOpacity
              className="flex items-center justify-center pr-1"
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye color="gray" size={24} /> : <EyeSlash color="gray" size={24} />}
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>

      {/* Action buttons */}
      <View className="my-5 ">
        <Button title="Next" className="mb-4" onPress={() => router.push('/sign-up/verify-otp')} />
        <Text className="text-center text-gray-400">Already have an account ?</Text>
        <Link href="../" className="text-center font-semibold text-cyan-500">
          Sign in
        </Link>
      </View>
    </>
  );
};

export default SignUp;
