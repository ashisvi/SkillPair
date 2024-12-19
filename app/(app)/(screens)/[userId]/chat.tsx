import { Link, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Send2 } from 'iconsax-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import chats from '~/data/chats.json';
import users from '~/data/users.json';
import { formatMessageTime } from '~/utils/chat';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const { userId } = useLocalSearchParams();
  const currentUserId = 'user1';

  const otherUser = users.find((u) => u.id === userId);
  const chat = chats.find(
    (c) =>
      (c.user1 === currentUserId && c.user2 === userId) ||
      (c.user1 === userId && c.user2 === currentUserId)
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4">
        <Link href="../" asChild>
          <Pressable className="rounded-full border border-gray-200 bg-gray-50 p-2">
            <ArrowLeft size={22} color="#666666" variant="Linear" />
          </Pressable>
        </Link>
        <Text className="text-lg font-semibold text-gray-900">{otherUser?.name}</Text>
        <View className="w-10" />
      </View>

      <ScrollView className="mx-3 flex-1">
        {/* Chat Messages */}
        {chat?.messages.map((message, index) => (
          <View
            key={index}
            className={`flex pt-1 ${message.sender === currentUserId ? 'justify-end' : 'justify-start'}`}>
            <View
              className={`relative my-2 w-2/3 rounded-xl p-4 ${message.sender === currentUserId ? 'bg-cyan-100' : 'bg-gray-100'} ${message.sender === currentUserId ? 'ml-auto' : 'mr-auto'}`}>
              {/* Message Text */}
              <Text
                className={`text-base ${message.sender === currentUserId ? 'text-gray-700' : 'text-gray-500'}`}>
                {message.text}
              </Text>

              {/* TimeStamp */}
              <Text className="text-right text-xs text-gray-400">
                {formatMessageTime(message.timestamp)}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Chat Input */}
      <View className="border-t border-gray-100 p-4">
        <View className="flex-row items-center justify-center gap-2">
          <TextInput
            placeholder="Message..."
            className="h-full flex-1 rounded-lg border border-gray-200 bg-gray-50"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity
            className={`rounded-xl border p-2 ${message ? 'border-cyan-500 bg-cyan-500' : 'border-gray-300 bg-gray-300'}`}>
            <Send2 color="#fff" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
