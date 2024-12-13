import { Tabs } from 'expo-router';
import { Home, MenuBoard, Messages2, Profile } from 'iconsax-react-native';
import { StyleSheet } from 'react-native';
import { TabBarIcon } from '~/components/TabBarIcon';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: 56, paddingTop: 8 } }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon Icon={Home} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon Icon={Messages2} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="shedule"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon Icon={MenuBoard} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon Icon={Profile} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
