import { Edit2, LogoutCurve, Setting2 } from 'iconsax-react-native';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SessionCard } from '~/components';
import sessions from '~/data/sessions.json';
import users from '~/data/users.json';

const ProfileScreen = () => {
  // For demo, we'll use user1
  const currentUserId = 'user1';
  const user = users.find((u) => u.id === currentUserId);

  // Get user's sessions
  const userSessions = sessions.filter(
    (session) => session.user1 === currentUserId || session.user2 === currentUserId
  );

  const stats = {
    completed: userSessions.filter((s) => s.status === 'completed').length,
    upcoming: userSessions.filter((s) => s.status === 'upcoming').length,
    totalSkills: (user?.skillsOffered?.length || 0) + (user?.skillsWanted?.length || 0),
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <Text className="text-2xl font-bold text-gray-900">Profile</Text>
        <View className="flex-row gap-2">
          <Pressable className="rounded-full border border-gray-200 bg-gray-50 p-2">
            <Setting2 size={22} color="#666666" variant="Linear" />
          </Pressable>
          <Pressable className="rounded-full border border-gray-200 bg-gray-50 p-2">
            <LogoutCurve size={22} color="#666666" variant="Linear" />
          </Pressable>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View className="items-center px-4 py-6">
          <View className="relative">
            <Image source={{ uri: user?.profilePicture }} className="h-24 w-24 rounded-full" />
            <Pressable className="absolute bottom-0 right-0 rounded-full border-2 border-white bg-cyan-500 p-1.5">
              <Edit2 size={16} color="#fff" variant="Linear" />
            </Pressable>
          </View>
          <Text className="mt-4 text-2xl font-bold text-gray-900">{user?.name}</Text>
          <Text className="mt-1 text-base text-gray-500">{user?.bio}</Text>
          <View className="mt-2 flex-row items-center">
            <Text className="text-sm text-gray-500">{user?.location}</Text>
          </View>
        </View>

        {/* Stats */}
        <View className="mx-4 flex-row justify-between rounded-2xl bg-gray-50 p-4">
          <View className="items-center">
            <Text className="text-2xl font-bold text-cyan-600">{stats.completed}</Text>
            <Text className="text-sm text-gray-500">Completed</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-cyan-600">{stats.upcoming}</Text>
            <Text className="text-sm text-gray-500">Upcoming</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold text-cyan-600">{stats.totalSkills}</Text>
            <Text className="text-sm text-gray-500">Skills</Text>
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

        {/* Recent Sessions */}
        <View className="mt-6 px-4">
          <Text className="text-lg font-semibold text-gray-900">Recent Sessions</Text>
          <View className="mt-2 space-y-3">
            {userSessions.slice(0, 3).map((session) => {
              const otherUserId = session.user1 === currentUserId ? session.user2 : session.user1;
              const otherUser = users.find((u) => u.id === otherUserId);

              return (
                <SessionCard
                  key={session.sessionId}
                  sessionId={session.sessionId}
                  otherUser={otherUser}
                  skillExchange={session.skillExchange}
                  status={session.status}
                  compact
                />
              );
            })}
          </View>
        </View>

        {/* Bottom Padding */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
