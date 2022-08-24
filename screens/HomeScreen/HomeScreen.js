import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { TechNews } from "../../components";
import useAuth from "../../hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-full bg-white ">
      <Header />
      <TechNews />
    </SafeAreaView>
  );
}

const Header = () => {
  const { greeting } = useAuth();
  return (
    <View className="py-2 px-4 flex flex-row items-center justify-between border-b border-gray-300 pb-1">
      <Text className="text-base font-semibold tracking-widest bg-white capitalize text-black">
        {greeting}
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="search" color={"#000"} size={20} />
      </TouchableOpacity>
    </View>
  );
};
