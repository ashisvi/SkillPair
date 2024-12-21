import { Eye, EyeSlash } from 'iconsax-react-native';
import React from 'react';
import { KeyboardAvoidingView, Text, TextInputProps, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

type InputFieldProps = {
  label: string;
  value: string;
  setValue: () => void;
  placeholder?: string;
  isSecureTextEntry?: boolean;
  className?: string;
  inputClassName?: string;
  showEyeButton?: boolean;
  inputProps?: TextInputProps;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  setValue,
  placeholder,
  isSecureTextEntry,
  className,
  inputClassName,
  showEyeButton,
  inputProps,
}) => {
  const [showPassword, setShowPassword] = React.useState(isSecureTextEntry);

  return (
    <KeyboardAvoidingView>
      <Text className={'mb-2 font-semibold text-gray-500 ' + className}>{label}</Text>
      <View
        className={'flex-row rounded-md border border-gray-200 bg-gray-50 px-2 ' + inputClassName}>
        <TextInput
          placeholder={placeholder}
          className="flex-1"
          value={value}
          onChangeText={setValue}
          secureTextEntry={showPassword}
          {...inputProps}
        />
        {showEyeButton && (
          <TouchableOpacity
            className="flex items-center justify-center pr-1"
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <Eye color="gray" size={24} /> : <EyeSlash color="gray" size={24} />}
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
