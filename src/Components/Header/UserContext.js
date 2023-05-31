import { createContext, useState, useContext } from "react";

export const UserContext = createContext("");

export const AppWrapper = ({ children }) => {
  const [userName, setUserName] = useState("Test");

  return (
    <div>
      <UserContext.Provider value={{ userName, setUserName }}>{children}</UserContext.Provider>
    </div>
  );
};

export const useUserContext = () => useContext(UserContext);