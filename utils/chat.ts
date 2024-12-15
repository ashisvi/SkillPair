import chats from '~/data/chats.json';

export type Message = {
  sender: string;
  text: string;
  timestamp: string;
};

export type Chat = {
  chatId: string;
  user1: string;
  user2: string;
  messages: Message[];
};

/**
 * Get the last message from a specific chat
 */
export const getLastMessage = (chatId: string): Message | null => {
  const chat = chats.find((c) => c.chatId === chatId);
  if (!chat || chat.messages.length === 0) return null;
  return chat.messages[chat.messages.length - 1];
};

/**
 * Get the last message for each chat involving a user
 */
export const getUserLastMessages = (userId: string): { [chatId: string]: Message } => {
  const userChats = chats.filter((chat) => chat.user1 === userId || chat.user2 === userId);
  return userChats.reduce((acc, chat) => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    return {
      ...acc,
      [chat.chatId]: lastMessage,
    };
  }, {});
};

/**
 * Format timestamp to relative time (e.g., "2 hours ago")
 */
export const formatMessageTime = (timestamp: string): string => {
  const messageDate = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - messageDate.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

  return messageDate.toLocaleDateString();
};
