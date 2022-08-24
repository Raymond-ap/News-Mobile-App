import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ArticleItem } from "../../components";
import useAuth from "../../hooks/useAuth";

const ArticleScreen = ({ route }) => {
  const { headline, data } = route.params;
  const { loading, onRefresh } = useAuth();
  return (
    <SafeAreaView className="h-full bg-white">
      <Header headline={headline} />
      {loading ? (
        <View className="items-center justify-center h-full">
          <ActivityIndicator size={"large"} />
          <Text className="text-black my-2">Fetching Data</Text>
        </View>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          data={data}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ArticleItem article={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const Header = ({ headline }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        elevation: 3,
      }}
      className="flex flex-row bg-white items-center justify-between px-4 py-2"
    >
      <View className="flex flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" color={"#000"} size={24} />
        </TouchableOpacity>
      </View>
      <Text className="text-base capitalize text-black font-semibold tracking-widest">
        {headline}
      </Text>
    </View>
  );
};

export default ArticleScreen;
