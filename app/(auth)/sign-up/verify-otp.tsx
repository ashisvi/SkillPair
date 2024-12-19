import { router } from 'expo-router';
import { useRef } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from '~/components';

const VerifyOTP = () => {
  const inputs = useRef([]);

  const handleChange = (text: string, index: number) => {
    // Move to the next input when a digit is entered
    if (text.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }

    // Move to the previous input when backspace is pressed
    if (text.length === 0 && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <>
      <Text className="my-4 text-center text-2xl font-bold text-gray-500">Enter 6 digit OTP</Text>

      {/* OTP field */}

      <KeyboardAvoidingView className="my-5 w-full flex-row items-center justify-evenly">
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            className="h-12 w-12 rounded-md border border-gray-200 bg-gray-50 p-2 text-center text-2xl font-bold text-cyan-400 caret-cyan-500 shadow-md shadow-slate-500 focus:border-cyan-300 focus:shadow-cyan-300"
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputs.current[index] = ref)}
            onChangeText={(text) => handleChange(text, index)}
            // onFocus={() => console.log()}
            placeholder="0"
            key={index}
          />
        ))}
      </KeyboardAvoidingView>

      {/* Action buttons */}
      <View className="my-5 w-full flex-row items-center justify-center gap-2">
        <Button
          title="Previous"
          className="flex-1 border border-gray-200 bg-gray-50"
          textClassName="text-gray-500"
          size="sm"
          onPress={() => router.back()}
        />
        <Button
          title="Next"
          className="flex-1"
          size="sm"
          onPress={() => router.push('/sign-up/create-password')}
        />
      </View>
    </>
  );
};

export default VerifyOTP;
