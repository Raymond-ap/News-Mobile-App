import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import ListingItem from "./ListingItem";
import { useNavigation } from "@react-navigation/native";

const FeaturedRow = ({ headline, description, data }) => {
  const navigation = useNavigation();
  return (
    <View className="">
      <View className="px-4 flex flex-row items-center justify-center">
        <View style={{ flex: 1 }} className="">
          <Text className="text-lg tracking-widest font-bold">{headline}</Text>
          <Text className="text-sm w-52 tracking-widest text-gray-600 font-semibold">
            {description}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("ArticleScreen", {
              headline: headline,
              data: data,
            })
          }
        >
          <Text className="text-sm font-bold text-blue-600 tracking-widest">
            View all
          </Text>
        </TouchableOpacity>
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
            data={data.slice(0, 10)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <ListingItem item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default FeaturedRow;
