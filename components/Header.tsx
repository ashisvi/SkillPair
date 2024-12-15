import { Entypo } from '@expo/vector-icons';
import { SearchNormal1 } from 'iconsax-react-native';
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

type HeaderProps = {
  title: string;
  subtitle?: string;
  showSearch?: boolean;
  onSearch?: (text: string) => void;
  rightIcon?: React.ReactNode;
};

export const Header = ({
  title,
  subtitle,
  showSearch = false,
  onSearch,
  rightIcon,
}: HeaderProps) => {
  const [isSearchActive, setIsSearchActive] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    onSearch?.(text);
  };

  return (
    <View className="border-b border-gray-100 bg-white px-4 pb-3">
      <Animated.View layout={Layout.springify()} className="flex-row items-center justify-between">
        {!isSearchActive && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Text className="text-2xl font-bold text-gray-900">{title}</Text>
            {subtitle && <Text className="mt-1 text-sm text-gray-500">{subtitle}</Text>}
          </Animated.View>
        )}
        <View className={`flex-row items-center gap-3 ${isSearchActive ? 'flex-1' : ''}`}>
          {showSearch && (
            <Animated.View
              layout={Layout.springify()}
              className={`overflow-hidden rounded-full border border-gray-200 bg-gray-50 ${
                isSearchActive ? 'flex-1 flex-row items-center' : ''
              }`}>
              <Pressable className="p-2" onPress={() => !isSearchActive && setIsSearchActive(true)}>
                <SearchNormal1
                  size={22}
                  color={isSearchActive ? '#0891b2' : '#666666'}
                  variant={isSearchActive ? 'Bold' : 'Linear'}
                />
              </Pressable>
              {isSearchActive && (
                <>
                  <TextInput
                    value={searchQuery}
                    onChangeText={handleSearch}
                    placeholder="Search..."
                    className="flex-1 text-base text-gray-700"
                    placeholderTextColor="#9CA3AF"
                    autoFocus
                  />
                  <Pressable
                    className="p-2"
                    onPress={() => {
                      setIsSearchActive(false);
                      setSearchQuery('');
                      onSearch?.('');
                    }}>
                    <Entypo name="cross" size={22} color="#666666" />
                  </Pressable>
                </>
              )}
            </Animated.View>
          )}
          {!isSearchActive && rightIcon}
        </View>
      </Animated.View>
    </View>
  );
};
