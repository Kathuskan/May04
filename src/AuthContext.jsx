import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userFullName, setUserFullName] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem('userFullName');
    if (storedName) setUserFullName(storedName);
  }, []);

  const login = (fullName) => {
    localStorage.setItem('userFullName', fullName);
    setUserFullName(fullName);
  };

  const logout = () => {
    localStorage.removeItem('userFullName');
    localStorage.removeItem('authToken');
    setUserFullName(null);
  };

  return (
    <AuthContext.Provider value={{ userFullName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};