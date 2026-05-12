import { useEffect, useState, ReactNode, createContext } from "react";
import axios from "axios";
import { AppUser } from "../../type";
import { config } from "../../config";

type UserContextType = {
  currentUser: AppUser | null;
  token: string | null;
  setAuth: (user: AppUser, jwtToken: string) => void;
  logout: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({
  currentUser: null,
  token: null,
  setAuth: () => {},
  logout: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("auth_token");
    const savedUser = localStorage.getItem("auth_user");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setCurrentUser(JSON.parse(savedUser));

      axios
        .get(`${config?.baseUrl}/users/profile`, {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        })
        .then((res) => {
          setCurrentUser(res.data);
          localStorage.setItem("auth_user", JSON.stringify(res.data));
        })
        .catch(() => {
          localStorage.removeItem("auth_token");
          localStorage.removeItem("auth_user");
          setToken(null);
          setCurrentUser(null);
        });
    }
  }, []);

  const setAuth = (user: AppUser, jwtToken: string) => {
    setCurrentUser(user);
    setToken(jwtToken);
    localStorage.setItem("auth_token", jwtToken);
    localStorage.setItem("auth_user", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    setToken(null);
    setCurrentUser(null);
  };

  const value = { currentUser, token, setAuth, logout };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
