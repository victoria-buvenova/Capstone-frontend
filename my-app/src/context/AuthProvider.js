import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState(
    JSON.parse(localStorage.getItem("client"))
  );

  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) ?? 0
  );
  const [isAdmin, setIsAdmin] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  const login = (client, admin) => {
    setIsLoggedIn(client);
    setIsAdmin(admin);
  };

  const logout = () => {
    setIsLoggedIn(null);
    setIsAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{ client, login, logout, admin, isAdmin, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
