import { Entypo } from '@expo/vector-icons';
import { Notification, SearchNormal1 } from 'iconsax-react-native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const Header = () => {
  // State to control search bar visibility
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <View className="relative h-28 w-full flex-row items-center justify-between gap-3 border border-gray-200 bg-white px-2 pt-8">
      {/* Title - only shown when search is not active */}
      {!showSearch && <Text className="ml-2 text-2xl font-bold text-cyan-500">SkillPair</Text>}

      {/* Right side container for search and notification */}
      <View className="flex-1 flex-row items-center justify-end gap-3 p-3">
        {/* Search container - expands when active */}
        <View
          className={`rounded-full border border-gray-200 ${
            showSearch ? 'flex-1 flex-row items-center' : ''
          }`}>
          {/* Search trigger button */}
          <Pressable className="p-2" onPress={() => setShowSearch(true)}>
            <SearchNormal1 size={22} color="black" variant="TwoTone" />
          </Pressable>

          {/* Search input and close button - only visible when search is active */}
          {showSearch && (
            <>
              <TextInput placeholder="Search..." className="flex-1" />
              <Entypo
                name="cross"
                size={22}
                className="mr-2 h-full"
                onPress={() => setShowSearch(false)}
              />
            </>
          )}
        </View>

        {/* Notification button */}
        <Pressable className="rounded-full border border-gray-200 p-2">
          <Notification size={22} color="black" variant="TwoTone" />
        </Pressable>
      </View>
    </View>
  );
};
