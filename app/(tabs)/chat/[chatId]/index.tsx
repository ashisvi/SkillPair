import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useMemo } from 'react';
import { Text, View } from 'react-native';
import chats from '~/data/chats.json';

const ChatPage = () => {
  const navigation = useNavigation();
  const { chatId } = useLocalSearchParams();

  const currentChat = useMemo(() => {
    return chats?.find((chat) => chatId === chat.chatId);
  }, [chats, chatId, navigation]);

  useEffect(() => {
    navigation.setOptions({
      title: currentChat?.user1,
    });
  }, [navigation]);

  return (
    <View>
      <Text>ChatPage</Text>
    </View>
  );
};

export default ChatPage;
