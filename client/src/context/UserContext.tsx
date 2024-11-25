import { createContext, useState, ReactNode } from "react";
import { User } from "firebase/auth"; // Import User type

type UserContextType = {
  currentUser: User | null; // Allow currentUser to be of type User or null
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {}, // Placeholder
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null); // Updated type
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
