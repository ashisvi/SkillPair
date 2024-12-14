import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

const ProfileCard = ({ user }: { user: any }) => {
  return (
    <Link href={`/${user?.id}`} className="my-1">
      <View className="w-full flex-row items-center justify-center gap-3 rounded-lg bg-white p-3 shadow-xl shadow-gray-400">
        <Image
          source={{
            uri: user?.profilePicture,
          }}
          height={52}
          width={52}
          className="rounded-full"
        />
        <View className="flex-1">
          <Text className="text-xl font-semibold text-cyan-500">{user?.name}</Text>
          <Text className="text-gray-600">{user.skillsOffered?.join(', ')}</Text>
        </View>
      </View>
    </Link>
  );
};

export default ProfileCard;
