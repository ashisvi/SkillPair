import { Location, Star1 } from 'iconsax-react-native';
import { Image, Pressable, Text, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';

type User = {
  id: string;
  name: string;
  profilePicture: string;
  bio: string;
  skillsOffered: string[];
  rating: number;
  location: string;
};

type ProfileCardProps = {
  user: User;
  index: number;
  onPress?: () => void;
};

export const ProfileCard = ({ user, index, onPress }: ProfileCardProps) => {
  return (
    <Animated.View
      entering={FadeInRight.delay(index * 100)}
      className="my-1.5 overflow-hidden rounded-xl bg-white shadow-sm">
      <Pressable onPress={onPress}>
        <View className="flex-row p-3">
          <Image
            source={{
              uri: user?.profilePicture,
            }}
            height={80}
            width={80}
            className="rounded-xl"
          />
          <View className="ml-3 flex-1 justify-between">
            <View>
              <Text className="text-lg font-semibold text-gray-900">{user?.name}</Text>
              <Text className="mt-0.5 text-sm text-gray-500" numberOfLines={2}>
                {user.bio}
              </Text>
            </View>
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Location size={16} color="#6B7280" variant="Bold" />
                <Text className="ml-1 text-xs text-gray-500">{user.location}</Text>
              </View>
              <View className="flex-row items-center">
                <Star1 size={16} color="#0891B2" variant="Bold" />
                <Text className="ml-1 text-xs font-medium text-cyan-600">{user.rating}</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="border-t border-gray-100 px-3 py-2">
          <Text className="text-xs text-gray-500">Skills: </Text>
          <View className="mt-1 flex-row flex-wrap gap-1">
            {user.skillsOffered?.map((skill) => (
              <View key={skill} className="rounded-full bg-cyan-50 px-2 py-1">
                <Text className="text-xs font-medium text-cyan-600">{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};
