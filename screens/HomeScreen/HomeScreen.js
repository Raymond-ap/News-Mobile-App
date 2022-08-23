import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { TechNews } from "../../component";
import useAuth from "../../hooks/useAuth";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-full bg-white">
      <Header />
      <TechNews />
    </SafeAreaView>
  );
}

const Header = () => {
  const { greeting } = useAuth();
  return (
    <View className="py-2 px-4">
      <Text className="text-lg font-semibold tracking-widest bg-white border-b border-gray-200 pb-1 capitalize text-black">
        {greeting}
      </Text>
    </View>
  );
};
