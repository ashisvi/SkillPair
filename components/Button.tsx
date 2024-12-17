import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
  Icon?: React.ElementType;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, Icon, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`flex-row items-center justify-center gap-1 rounded-[28px] bg-cyan-500 p-4 shadow-md ${touchableProps.className}`}>
      {Icon && <Icon color="#fff" size={20} variant={'Bold'} />}
      <Text className="text-center text-lg font-semibold text-white">{title}</Text>
    </TouchableOpacity>
  );
});
