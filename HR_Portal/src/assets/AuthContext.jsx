// AuthContext.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  function login(userData) {
    setUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("currentUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
