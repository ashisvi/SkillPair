import { router } from 'expo-router';
import { Messages2 } from 'iconsax-react-native';
import { useCallback } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChatCard } from '~/components/ChatCard';
import chats from '~/data/chats.json';
import users from '~/data/users.json';
import { getUserLastMessages } from '~/utils/chat';

const ActiveChatsScreen = () => {
  // For demo, we'll use user1 as the current user
  const currentUserId = 'user1';
  const lastMessages = getUserLastMessages(currentUserId);

  // Get chat previews with user info
  const chatPreviews = Object.entries(lastMessages).map(([chatId, message]) => {
    const chat = chats.find((c) => c.chatId === chatId);
    const otherUserId = chat?.user1 === currentUserId ? chat?.user2 : chat?.user1;
    const otherUser = users.find((u) => u.id === otherUserId);

    return {
      chatId,
      message,
      user: otherUser,
    };
  });

  const onRefresh = useCallback(() => {
    // Add refresh logic here
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="border-b border-gray-100 px-4 pb-3 pt-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-gray-900">Messages</Text>
          <Messages2 size={24} color="#0891b2" variant="Bold" />
        </View>
        <Text className="mt-1 text-sm text-gray-500">
          {chatPreviews.length} active conversations
        </Text>
      </View>

      {/* Chat List */}
      <ScrollView
        className="flex-1"
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} tintColor="#0891b2" />
        }>
        {chatPreviews.length === 0 ? (
          <View className="flex-1 items-center justify-center p-4">
            <Messages2 size={48} color="#0891b2" variant="Bold" />
            <Text className="mt-4 text-center text-base text-gray-500">
              No conversations yet.{'\n'}Start chatting with someone!
            </Text>
          </View>
        ) : (
          chatPreviews.map(({ chatId, message, user }, index) => (
            <ChatCard
              key={chatId}
              user={user!}
              message={message}
              index={index}
              onPress={() => router.push(`/${user?.id}/chat`)}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActiveChatsScreen;
