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
  const [BBCNews, setBBCNews] = useState([]);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const tech_response = await fetch(
        `${baseURL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
      );
      const bbc_response = await fetch(
        `${baseURL}/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
      );

      const techData = await tech_response.json();
      const bbcData = await bbc_response.json();
      setBBCNews(bbcData.articles);
      setTechNews(techData.articles);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      Alert.alert("Error", err.message, [
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
      BBCNews,
      greeting,
    }),
    [greeting, techNews, BBCNews]
  );
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
