import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [greeting, setGreeting] = useState("");

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

  useEffect(() => {
    handleGreeting();
  }, []);

  const memoedValue = useMemo(
    () => ({
      greeting,
    }),
    [greeting]
  );
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
