import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const [token, setToken] = useState("");
  const toggleAuth = (value) => {
    setIsAuth(isAuth === false ? true : false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
