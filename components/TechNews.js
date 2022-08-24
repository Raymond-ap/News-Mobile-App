import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { truncate } from "../components/truncate";
import useAuth from "../hooks/useAuth";

const TechNews = () => {
  const { techNews } = useAuth();
  return (
    <View className="mt-4">
      <View className="px-4">
        <Text className="text-lg tracking-widest font-bold">Tech News</Text>
        <Text className="text-sm tracking-widest text-gray-600 font-semibold">
          Top headlines from the world of technology
        </Text>
      </View>
      <View className="">
        {techNews.length < 1 ? (
          <View className="my-3">
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={techNews}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <Card item={item} />}
          />
        )}
      </View>
    </View>
  );
};

const Card = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} className="py-3">
      <ImageBackground
        source={{ uri: item?.urlToImage }}
        className="h-48 mx-1 shadow-lg w-72 rounded-lg object-cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.8)"]}
          className="rounded-lg absolute inset-0"
        >
          <View className="absolute bottom-1 left-2 right-2">
            <View
              className="mb-1"
            >
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

export default TechNews;
