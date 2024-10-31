import React, { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const data = Cookies.get("authenticatedUser");

  const userData = data ? JSON.parse(data) : null;
  console.log(userData);
  const [user, setUser] = useState(userData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
