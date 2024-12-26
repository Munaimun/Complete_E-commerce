import { useEffect, useState, ReactNode, createContext } from "react";
import { User } from "firebase/auth";
import { auth } from "../lib/firebase"; // Import your Firebase auth instance

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user); // Set the currentUser if there is one
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
