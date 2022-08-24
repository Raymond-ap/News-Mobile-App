import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { truncate } from "./truncate";
import moment from "moment";

const ArticleItem = ({article}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="mx-2 my-1 w-full flex flex-row p-2"
    >
      <Image 
      source={{ uri: article?.urlToImage }}
      className="object-cover w-20 h-20 rounded-lg" />
      <View style={{ flex: 1 }} className="mx-2">
        <Text className="text-sm tracking-wider font-bold capitalize">
          {truncate(article?.title,80
          )}
        </Text>
        <View className="my-1 flex flex-row justify-between w-full absolute bottom-0">
          <Text className="text-xs tracking-wider text-gray-600 font-bold capitalize">
            {`Source: ${article?.source.name}`}
          </Text>
          <Text className="text-xs tracking-wider text-gray-600 font-bold capitalize">
          {`• ${moment(article?.publishedAt).fromNow()}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleItem;
