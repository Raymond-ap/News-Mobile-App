import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import { HomeScreen, NewsDetail } from "./screens";
import { AuthProvider } from "./hooks/useAuth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
      <StatusBar style="auto" translucent={false} backgroundColor={"#fff"} />
    </TailwindProvider>
  );
}
