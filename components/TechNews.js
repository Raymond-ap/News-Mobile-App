import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const TechNews = () => {
  return (
    <View className="mt-4">
      <View className="px-4">
        <Text className="text-lg tracking-widest font-bold">Tech News</Text>
        <Text className="text-sm tracking-widest text-gray-600 font-semibold">
          Top headlines from the world of technology
        </Text>
      </View>
      <View className="py-3 mx-4">
        <Card />
      </View>
    </View>
  );
};

const Card = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <ImageBackground className="h-48 w-full rounded-lg bg-blue-500">
        <LinearGradient
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.7)"]}
          className="rounded-lg absolute inset-0"
        >
          <View className="absolute bottom-1 left-2 right-2">
            <Text className="text-base text-white font-bold">
              A new Meta-Analysis reveals the impact of the coronavirus on the
              economy
            </Text>
            <View className="my-1">
              <Text className="text-white ">24 may 2022 • 5 mins ago</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TechNews;
