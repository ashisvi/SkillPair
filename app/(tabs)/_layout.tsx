import { Tabs } from 'expo-router';
import { Home, MenuBoard, Messages2, Profile } from 'iconsax-react-native';
import { Header, TabBarIcon } from '~/components';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 56, paddingTop: 8 },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#06B6D4',
      }}>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'SkillPair',
          header: () => <Header />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon Icon={Home} color={color} focused={focused} />
          ),
        }}
      />

      {/* Chat Tab */}
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon Icon={Messages2} color={color} focused={focused} />
          ),
        }}
      />

      {/* Schedule Tab */}
      <Tabs.Screen
        name="shedule"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon Icon={MenuBoard} color={color} focused={focused} />
          ),
        }}
      />

      {/* Profile Tab */}
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
