import { Link } from 'expo-router';
import { Eye, EyeSlash } from 'iconsax-react-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogIn = () => {
    // Function to handle log in
  };

  return (
    <>
      <Text className="my-4 text-center text-2xl font-bold text-gray-500">Sign In</Text>

      {/* Email input */}
      <View className="my-2">
        <KeyboardAvoidingView>
          <Text className="mb-2 font-semibold text-gray-500">Email</Text>
          <TextInput
            placeholder="Enter your email"
            className="rounded-md border border-gray-200 bg-gray-50 px-2"
            autoCapitalize="none"
          />
        </KeyboardAvoidingView>
      </View>

      {/* Password input */}
      <View className="my-2">
        <KeyboardAvoidingView>
          <Text className="mb-2 font-semibold text-gray-500">Password</Text>
          <View className="flex-row rounded-md border border-gray-200 bg-gray-50 px-2">
            <TextInput
              placeholder="Enter password"
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
        <Button title="Log In" className="mb-4" onPress={handleLogIn} />
        <Text className="text-center text-gray-400">Don't have account ?</Text>
        <Link href="/sign-up" className="text-center font-semibold text-cyan-500">
          Sign Up
        </Link>
      </View>
    </>
  );
};

export default SignIn;
