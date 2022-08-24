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
  import ListingItem from "./ListingItem";
  
  const FeaturedRow = ({headline, description, data}) => {
    return (
      <View className="">
        <View className="px-4">
          <Text className="text-lg tracking-widest font-bold">{headline}</Text>
          <Text className="text-sm tracking-widest text-gray-600 font-semibold">
            {description}
          </Text>
        </View>
        <View className="">
          {data.length < 1 ? (
            <View className="my-3">
              <ActivityIndicator size={"large"} />
            </View>
          ) : (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => <ListingItem item={item} />}
            />
          )}
        </View>
      </View>
    );
  };
  
  export default FeaturedRow;
  