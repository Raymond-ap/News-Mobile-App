import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { TechNews, FeaturedRow  } from "../../components";
import useAuth from "../../hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const {techNews, BBCNews} = useAuth();
  return (
    <SafeAreaView className="h-full bg-white ">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedRow data={techNews} description={"Top headlines from the world of technology"} headline={"Tech News"}/>
        <FeaturedRow data={BBCNews} description={"Top headlines from BBC"} headline={"BBC News"}/>
        <FeaturedRow data={BBCNews} description={"All articles about Bitcoin"} headline={"Cryptocurrency News"}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  const { greeting } = useAuth();
  return (
    <View className="py-2 px-4 flex flex-row items-center justify-between border-b border-gray-300 pb-1 mb-3">
      <Text className="text-base font-semibold tracking-widest bg-white capitalize text-black">
        {greeting}
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="search" color={"#000"} size={20} />
      </TouchableOpacity>
    </View>
  );
};
