import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';

type TabBarIconProps = {
  Icon: React.ElementType;
  color: string;
  focused: boolean;
};

export const TabBarIcon = ({ Icon, color, focused }: TabBarIconProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(focused ? 1.2 : 1, {
          mass: 1,
          damping: 15,
          stiffness: 200,
        }),
      },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Icon color={color} variant={focused ? 'Bold' : 'Linear'} size={24} />
    </Animated.View>
  );
};
