import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { truncate } from "./truncate";
import { useNavigation } from "@react-navigation/native";

const ListingItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("NewsDetail", {item: item})} activeOpacity={0.9} className="py-3">
      <ImageBackground
        source={{ uri: item?.urlToImage }}
        imageStyle={{ borderRadius: 10 }}
        className="h-48 mx-1 shadow-lg w-72 rounded-lg object-cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.7)"]}
          className="rounded-lg absolute inset-0 top-0 left-0 right-0 bottom-0 overflow-hidden"
        >
          <View className="absolute bottom-1 left-2 right-2">
            <View className="mb-1">
              <Text className="rounded-lg text-red-400 text-sm font-semibold">
                {item?.source.name}
              </Text>
            </View>
            <Text className="text-base text-white font-bold">
              {truncate(item?.title, 70)}
            </Text>
            <View className="my-1 flex flex-row items-center justify-between">
              <Text className="text-gray-200 text-sm ">
                24 may 2022 • 5 mins ago
              </Text>
              <Text className="text-gray-200 text-sm ">Brian Heater</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ListingItem;
