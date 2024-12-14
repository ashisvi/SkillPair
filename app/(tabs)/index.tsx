import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProfileCard from '~/components/ProfileCard';
import users from '~/data/users.json';

const Home = () => {
  return (
    <View className="flex-1">
      <FlatList
        ListHeaderComponent={() => (
          <View className="my-2 rounded-md bg-cyan-200 px-2 py-3">
            <Text className=" text-2xl font-semibold text-gray-800">Matched users</Text>
            <Text className="text-lg font-semibold text-gray-600">Find your pair 🚀</Text>
          </View>
        )}
        data={users}
        renderItem={({ item }) => <ProfileCard user={item} />}
        keyExtractor={(item) => item.id}
        className="w-full px-3"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
