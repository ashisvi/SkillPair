import { router } from 'expo-router';
import { ArrowRight2, Notification } from 'iconsax-react-native';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, ProfileCard } from '~/components';
import users from '~/data/users.json';

const Home = () => {
  const handleSearch = (query: string) => {
    // Implement search functionality
    console.log('Search query:', query);
  };

  return (
    <SafeAreaView className="flex-1 bg-white pt-2">
      <Header
        title="Discover"
        subtitle={`${users.length} people to connect with`}
        showSearch
        onSearch={handleSearch}
        rightIcon={
          <Pressable className="rounded-full border border-gray-200 bg-gray-50 p-2">
            <Notification size={22} color="#666666" />
          </Pressable>
        }
      />

      {/* Featured Section */}
      <View className="mx-4 my-3 rounded-xl bg-cyan-500 p-4">
        <Text className="text-lg font-semibold text-white">Featured Skills</Text>
        <Text className="mt-1 text-sm text-cyan-100">
          Discover people with the skills you're looking for
        </Text>
        <Pressable className="mt-3 flex-row items-center">
          <Text className="text-sm font-medium text-white">View all skills</Text>
          <ArrowRight2 size={16} color="#fff" variant="Bold" />
        </Pressable>
      </View>

      {/* User List */}
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <View className="px-4">
            <ProfileCard
              key={item.id}
              user={item}
              index={index}
              onPress={() => router.push(`/${item.id}/profile`)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        className="flex-1"
      />
    </SafeAreaView>
  );
};

export default Home;
