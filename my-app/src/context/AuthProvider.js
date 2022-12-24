import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState(
    JSON.parse(localStorage.getItem("client"))
  );
  const [table, setTable] = useState(
    JSON.parse(localStorage.getItem("table")) || []
  );
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) ?? 0
  );

  const login = (client) => {
    setClient(client);
    setTable(table);
    localStorage.setItem("client", JSON.stringify(client));
  };

  const logout = () => {
    setClient(null);
    setTable(null);
    setAdmin(null);
    localStorage.removeItem("client");
    localStorage.removeItem("table");
    localStorage.removeItem("admin");
  };

  function showTableToAdmin() {
    setTable((table) => {
      const tableForAdmin = console.log(tableForAdmin);
      return;
    });
  }

  function hideTable() {
    setTable();
  }

  return (
    <AuthContext.Provider
      value={{ client, table, login, logout, showTableToAdmin, hideTable }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
