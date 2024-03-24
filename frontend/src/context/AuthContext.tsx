import { createContext, useContext, useEffect, useState } from "react";

type User = {
  email: string;
  username: string;
};
type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // fetch if the user's cookie are valid then skip login
  }, []);

  const login = async (email: string, password: string) => {
    // fetch to the backend to login
  };
  const signup = async (email: string, username: string, password: string) => {
    // fetch to the backend to signup
  };
  const logout = async () => {
    // fetch to the backend to logout
  };
  const value = {
    isLoggedIn,
    user,
    login,
    signup,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);