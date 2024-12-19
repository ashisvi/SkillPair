import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
  size?: 'sm' | 'lg';
  textClassName?: string;
  Icon?: React.ElementType;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  ({ title, Icon, textClassName, size, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={`flex-row items-center justify-center gap-1 rounded-full bg-cyan-500 shadow-md ${size === 'sm' ? 'p-3' : 'p-4'} ${touchableProps.className}`}>
        {Icon && <Icon color="#fff" size={20} variant="Bold" />}
        <Text
          className={`text-center text-lg font-semibold ${textClassName ? textClassName : 'text-white'}`}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
);
