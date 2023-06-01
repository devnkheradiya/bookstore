import { createContext, useState, useContext } from "react";


export const logContext = createContext("");

export const AppWrapper = ({ children }) => {
  const [Logout, setbutton] = useState("Test");

  return (
    <div>
      <logContext.Provider value={{ Logout, setbutton }}>{children}</logContext.Provider>
    </div>
  );
};

export const AuthContext = () => useContext(logContext);