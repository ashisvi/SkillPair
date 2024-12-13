import { StyleSheet } from 'react-native';

export const TabBarIcon = ({
  Icon,
  color,
  focused,
}: {
  Icon: React.ElementType;
  color: string;
  focused: boolean;
}) => {
  return <Icon color={color} variant={focused ? 'Bold' : 'Outline'} size={30} />;
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
