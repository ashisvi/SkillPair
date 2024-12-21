// ToDo: value and setValue in all InputField component to fix error.

import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import { User } from 'iconsax-react-native';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton, Button, InputField } from '~/components';
import users from '~/data/users.json';

const ProfileDetailForm = () => {
  const currentUser = users.find((u) => u.id === 'user1');
  const router = useRouter();

  const handleUpload = async () => {
    const documentsList = await DocumentPicker.getDocumentAsync();

    console.log(documentsList);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="w-full flex-row items-center justify-between px-4">
        <BackButton onPress={() => router.back()} />
        <Text className="text-center text-xl font-semibold">Profile Detail</Text>
        <View className="w-10" />
      </View>

      <ScrollView>
        {/* Form content */}
        <View className="py-3">
          {/* Profile picture */}
          <View className="w-full items-center justify-center">
            <View className="h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-gray-200">
              {currentUser?.profilePicture ? (
                <Image source={{ uri: currentUser.profilePicture }} className="h-full w-full" />
              ) : (
                <View className="mt-2 h-full w-full items-center justify-center">
                  <User color="#9ca3af" size={120} variant="Bold" />
                </View>
              )}
            </View>
          </View>
          <View className="p-5">
            {/* Form */}
            <View className="gap-3">
              <InputField label="Full name" placeholder="Full name" />
              <InputField label="Bio" placeholder="Fullstack developer, Learner" />
              <InputField label="Skills Offers" placeholder="Guitar, Coding etc..." />
              <InputField
                label="Skills Wants"
                placeholder="Communication, Public speaking etc..."
              />
              <InputField label="City" placeholder="City" />
              <InputField label="Country" placeholder="Country" />
            </View>
            {/* Action buttons */}
            <View className="flex-row gap-2 py-8">
              <Button title="Update details" className="flex-1" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDetailForm;
