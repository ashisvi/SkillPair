import { Slot } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthLayout = () => {
  return (
    <SafeAreaView className="h-full items-center justify-between gap-10 bg-gray-50 p-5">
      <View className="py-5">
        <Text className="text-center text-4xl font-bold text-cyan-500">SkillPair</Text>
        <Text className="font-semibold text-gray-500">Find your learning pair right now</Text>
      </View>

      <View className="w-full rounded-lg border border-gray-200 bg-white p-5 shadow-md">
        <Slot />
      </View>

      <View className="py-7" />
    </SafeAreaView>
  );
};

export default AuthLayout;
