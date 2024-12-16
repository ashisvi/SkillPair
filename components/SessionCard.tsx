import { Image, Text, View } from 'react-native';

type SessionCardProps = {
  otherUser: {
    name: string;
    profilePicture: string;
  };
  skillExchange: string[];
  status: 'upcoming' | 'completed' | 'live';
  time?: string;
  compact?: boolean;
};

export const SessionCard = ({
  otherUser,
  skillExchange,
  status,
  time,
  compact = false,
}: SessionCardProps) => {
  return (
    <View className={`rounded-xl border border-gray-100 bg-white ${compact ? 'p-3' : 'p-4'}`}>
      <View className="flex-row items-center justify-between">
        <View className="max-w-[80%] flex-row items-center gap-3">
          <Image source={{ uri: otherUser.profilePicture }} className="h-10 w-10 rounded-full" />
          <View>
            <Text className={`${compact ? 'text-base' : 'text-lg'} font-semibold text-gray-900`}>
              {otherUser.name}
            </Text>
            <Text className="text-sm text-gray-500">{skillExchange[0]}</Text>
          </View>
        </View>
        <View
          className={`rounded-full px-2 py-1 ${
            status === 'upcoming' ? 'bg-cyan-50' : 'bg-purple-50'
          }`}>
          <Text
            className={`text-xs font-medium ${
              status === 'upcoming' ? 'text-cyan-600' : 'text-purple-600'
            }`}>
            {status}
          </Text>
        </View>
      </View>
      {time && (
        <View className="mt-3 flex-row items-center">
          <Text className="text-sm text-gray-500">{time}</Text>
        </View>
      )}
    </View>
  );
};
