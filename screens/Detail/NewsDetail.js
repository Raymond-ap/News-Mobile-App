import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export default function NewsDetail({ route }) {
  const article = route.params.article;
  console.log(article);
  return (
    <SafeAreaView className="h-full bg-white">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} className="py-3">
        <View className=" mx-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-gray-700 tracking-wider text-sm">
              {`${moment(article?.publishedAt).format("MMM Do YY")} • ${moment(
                article?.publishedAt
              ).fromNow()}`}
            </Text>
            <Text className="text-gray-700 tracking-wider text-sm">
              {`Author: ${article?.author}`}
            </Text>
          </View>
          <Text className="my-2 text-xl font-bold tracking-wider">
            {article.title}
          </Text>
          <Text className="text-gray-700 mb-2 tracking-wider text-sm">
            {`Source: ${article?.source.name}`}
          </Text>
        </View>
        <Image
          source={{ uri: article.urlToImage }}
          className="w-full h-56 object-cover"
        />
        <View className="mx-4 py-3">
          <Text className="text-gray-700 tracking-wider text-base rounded-lg border-l-4 border-blue-600 pl-4">
            {article.content}
          </Text>
          <Text className="text-gray-700 tracking-wider text-base mt-4">
            {article.content}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{
      elevation: 3,
    }} className="flex flex-row bg-white items-center justify-between px-4 py-2">
      <View className="flex flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" color={"#000"} size={24} />
        </TouchableOpacity>
        <View className="mx-2" />
        <Text className="text-base capitalize text-black font-semibold tracking-widest">
          detail article
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.9}>
        <Ionicons name="share" color={"#000"} size={24} />
      </TouchableOpacity>
    </View>
  );
};
