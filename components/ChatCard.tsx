import { Image, Pressable, Text, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { formatMessageTime, Message } from '~/utils/chat';

type ChatCardProps = {
  user: {
    name: string;
    profilePicture: string;
  };
  message: Message;
  onPress?: () => void;
  index: number;
};

export const ChatCard = ({ user, message, onPress, index }: ChatCardProps) => {
  const isCurrentUser = message.sender === 'user1'; // Replace with actual current user check

  return (
    <Animated.View entering={FadeInRight.delay(index * 100)} className="overflow-hidden">
      <Pressable
        onPress={onPress}
        className="flex-row items-center border-b border-gray-100 bg-white p-4 active:bg-gray-50">
        <View className="relative">
          <Image
            source={{
              uri: user?.profilePicture,
            }}
            height={56}
            width={56}
            className="rounded-full"
          />
          <View className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400" />
        </View>
        <View className="ml-4 flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-semibold text-gray-900">{user?.name}</Text>
            <Text className="text-xs text-gray-500">{formatMessageTime(message.timestamp)}</Text>
          </View>
          <View className="mt-1 flex-row items-center">
            {isCurrentUser && <Text className="mr-1 text-cyan-500">You: </Text>}
            <Text className="flex-1 text-sm text-gray-500" numberOfLines={1}>
              {message.text}
            </Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};
