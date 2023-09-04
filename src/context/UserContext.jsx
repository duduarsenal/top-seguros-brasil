import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [isLogged, setIsLogged] = useState();

  return (
    <UserContext.Provider value={{ userID, setUserID, isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};
