import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TechNews, FeaturedRow } from "../../components";
import useAuth from "../../hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const { techNews, BBCNews, cryptoNews, loading, onRefresh } = useAuth();
  return (
    <SafeAreaView className="h-full bg-white ">
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        className="py-4"
      >
        <FeaturedRow
          data={techNews}
          description={"Top headlines from the world of technology"}
          headline={"Tech News"}
        />
        <FeaturedRow
          data={BBCNews}
          description={"Top headlines from BBC"}
          headline={"BBC News"}
        />
        <FeaturedRow
          data={cryptoNews}
          description={"All articles about Bitcoin"}
          headline={"Cryptocurrency News"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  const { greeting } = useAuth();
  return (
    <View
      style={{
        elevation: 3,
      }}
      className="px-4 flex flex-row items-center bg-white justify-between border-b border-gray-300 py-2"
    >
      <Text className="text-base font-semibold tracking-widest bg-white capitalize text-black">
        {greeting}
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="search" color={"#000"} size={20} />
      </TouchableOpacity>
    </View>
  );
};
