import { Link, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, CalendarAdd, Location, MessageText1, Star1 } from 'iconsax-react-native';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '~/components';
import users from '~/data/users.json';

const UserProfile = () => {
  const { userId } = useLocalSearchParams();
  const user = users.find((u) => u.id === userId);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <Link href="../" asChild>
          <Pressable className="rounded-full border border-gray-200 bg-gray-50 p-2">
            <ArrowLeft size={22} color="#666666" variant="Linear" />
          </Pressable>
        </Link>
        <Text className="text-lg font-semibold text-gray-900">User Profile</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1">
        {/* User Info */}
        <View className="items-center px-4 py-6">
          <Image source={{ uri: user?.profilePicture }} className="h-24 w-24 rounded-full" />
          <Text className="mt-4 text-2xl font-bold text-gray-900">{user?.name}</Text>
          <View className="mt-1 flex items-center justify-center">
            <Text className="text-base text-gray-500">{user?.bio}</Text>
          </View>
          <View className="mt-2 flex-row items-center justify-center">
            <Location size={16} color="#0891B2" variant="Bold" />
            <Text className="ml-2 text-base text-gray-500">{user?.location}</Text>
          </View>
          <View className="mt-2 flex-row items-center justify-center">
            <Star1 size={16} color="#0891B2" variant="Bold" />
            <Text className="ml-2 text-base text-gray-500">{user?.rating}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="border-b border-gray-100 p-4">
          <View className="flex-row gap-3">
            <Link href="./chat" className="flex-1" asChild>
              <Pressable className="flex-row items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <MessageText1 size={20} color="#666666" variant="Linear" />
                <Text className="ml-2 text-base font-medium text-gray-700">Chat</Text>
              </Pressable>
            </Link>

            <Button
              title="Create Session"
              Icon={CalendarAdd}
              onPress={() => {}}
              className="flex-1 rounded-xl"
            />
          </View>
        </View>

        {/* Skills */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-semibold text-gray-900">Skills I Offer</Text>
          <View className="mt-2 flex-row flex-wrap gap-2">
            {user?.skillsOffered?.map((skill) => (
              <View key={skill} className="rounded-full bg-cyan-50 px-3 py-1.5">
                <Text className="text-sm font-medium text-cyan-600">{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mt-6 px-4">
          <Text className="text-lg font-semibold text-gray-900">Skills I Want to Learn</Text>
          <View className="mt-2 flex-row flex-wrap gap-2">
            {user?.skillsWanted?.map((skill) => (
              <View key={skill} className="rounded-full bg-purple-50 px-3 py-1.5">
                <Text className="text-sm font-medium text-purple-600">{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Separator */}
        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
