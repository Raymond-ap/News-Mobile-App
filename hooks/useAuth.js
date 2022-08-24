import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { API_KEY } from "@env";
import { Alert } from "react-native";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [greeting, setGreeting] = useState("");
  const [techNews, setTechNews] = useState([]);
  const baseURL = "https://newsapi.org/v2";

  const handleGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(
        `${baseURL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setTechNews(data.articles);
    } catch (err) {
      Alert.alert("Error", "Fail to get tech news", [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "Retry", onPress: () => getData() },
      ]);
    }
  };

  useEffect(() => {
    handleGreeting();
    getData();
  }, []);

  const memoedValue = useMemo(
    () => ({
      techNews,
      greeting,
    }),
    [greeting, techNews]
  );
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
