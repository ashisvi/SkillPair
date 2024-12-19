import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import { AuthLayout, Button } from '~/components';

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <AuthLayout>
      <Text className="my-4 text-center text-2xl font-bold text-gray-500">Create Password</Text>

      <View className="gap-5">
        {/* Password input */}
        <KeyboardAvoidingView>
          <Text className="mb-2 font-semibold text-gray-500">Create Password</Text>
          <TextInput
            placeholder="Password"
            className="rounded-md border border-gray-200 bg-gray-50 px-2"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            secureTextEntry={showPassword}
          />
        </KeyboardAvoidingView>

        {/* Confirm password input */}
        <KeyboardAvoidingView>
          <Text className="mb-2 font-semibold text-gray-500">Confirm Password</Text>
          <TextInput
            placeholder="Confirm password"
            className="rounded-md border border-gray-200 bg-gray-50 px-2"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="off"
            secureTextEntry={showPassword}
          />
        </KeyboardAvoidingView>
      </View>

      {/* Show hide password checkbox */}
      <View className="my-5 flex-row items-center gap-2">
        <Checkbox color="#0891B2" value={showPassword} onValueChange={setShowPassword} />
        <Text>Show Password</Text>
      </View>

      {/* Create password button */}
      <Button
        title="Create Password"
        className="my-4"
        onPress={() => {
          router.push('/sign-up/profile-detail-form');
        }}
      />
    </AuthLayout>
  );
};

export default CreatePassword;
