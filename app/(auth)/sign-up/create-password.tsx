import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { AuthLayout, Button, InputField } from '~/components';

const CreatePassword = () => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <AuthLayout>
      <Text className="my-4 text-center text-2xl font-bold text-gray-500">Create Password</Text>

      <View className="gap-5">
        {/* Password input */}
        <InputField
          label="Create password"
          placeholder="Password"
          isSecureTextEntry={showPassword}
          inputProps={{ autoCapitalize: 'none', autoCorrect: false, autoComplete: 'off' }}
        />

        {/* Confirm password input */}
        <InputField
          label="Confirm password"
          placeholder="Password"
          isSecureTextEntry={showPassword}
          inputProps={{ autoCapitalize: 'none', autoCorrect: false, autoComplete: 'off' }}
        />
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
