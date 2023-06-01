import { useState, useContext } from "react";

// export const UserContext = createContext("");

// export const AppWrapper = ({ children }) => {
//   const [userName, setUserName] = useState("Test");

//   return (
//     <div>
//       <UserContext.Provider value={{ userName, setUserName }}>{children}</UserContext.Provider>
//     </div>
//   );
// };
import React from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };


// export const useUserContext = () => useContext(UserContext);