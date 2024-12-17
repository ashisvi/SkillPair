import { Link, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, MessageText1 } from 'iconsax-react-native';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components';
import sessions from '~/data/sessions.json';
import users from '~/data/users.json';

const SessionDetailScreen = () => {
  const { sessionId } = useLocalSearchParams();
  const currentUserId = 'user1';

  const session = sessions.find((s) => s.sessionId === sessionId);
  if (!session) return null;

  const otherUserId = session.user1 === currentUserId ? session.user2 : session.user1;
  const otherUser = users.find((u) => u.id === otherUserId);

  const sessionDate = new Date(session.scheduledTime);
  const formattedDate = sessionDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = sessionDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <Link href="../" asChild>
          <Pressable className="rounded-full border border-gray-200 bg-gray-50 p-2">
            <ArrowLeft size={22} color="#666666" variant="Linear" />
          </Pressable>
        </Link>
        <Text className="text-lg font-semibold text-gray-900">Session Details</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1">
        {/* User Info */}
        <View className="items-center border-b border-gray-100 px-4 py-6">
          <Image source={{ uri: otherUser?.profilePicture }} className="h-24 w-24 rounded-full" />
          <Text className="mt-4 text-2xl font-bold text-gray-900">{otherUser?.name}</Text>
          <Text className="mt-1 text-center text-base text-gray-500">{otherUser?.bio}</Text>
        </View>

        {/* Session Info */}
        <View className="p-4">
          <View className="rounded-xl bg-gray-50 p-4">
            <Text className="text-center text-lg font-semibold text-gray-900">Session Details</Text>

            <View className="mt-4 space-y-3">
              <View className="my-2">
                <Text className="text-center text-sm text-gray-500">Date</Text>
                <Text className="text-center text-base font-medium text-gray-900">
                  {formattedDate}
                </Text>
              </View>

              <View className="my-2">
                <Text className="text-center text-sm text-gray-500">Time</Text>
                <Text className="text-center text-base font-medium text-gray-900">
                  {formattedTime}
                </Text>
              </View>

              <View className="my-2">
                <Text className="text-center text-sm text-gray-500">Skills Exchange</Text>
                <View className="mt-1 flex-row flex-wrap justify-center gap-2">
                  {session.skillExchange.map((skill) => (
                    <View key={skill} className="rounded-full bg-cyan-50 px-3 py-1.5">
                      <Text className="text-sm font-medium text-cyan-600">{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View className="border-t border-gray-100 p-4">
        <View className="flex-row gap-3">
          <Link href={`/${otherUserId}/chat`} className="flex-1" asChild>
            <Pressable className="flex-row items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
              <MessageText1 size={20} color="#666666" variant="Linear" />
              <Text className="ml-2 text-base font-medium text-gray-700">Chat</Text>
            </Pressable>
          </Link>

          {session.status === 'upcoming' && (
            <Button title="Join Session" onPress={() => {}} className="flex-1 rounded-xl" />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SessionDetailScreen;
