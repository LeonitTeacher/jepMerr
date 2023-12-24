import React, { createContext, useState, useContext } from 'react';

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const saveToken = (newToken) => {
    setToken(newToken);
    // You might want to save the token to AsyncStorage or other storage mechanism here
  };

  const getToken = () => {
    return token;
  };
  const signOut = () => {
    setToken(null); // Destroy the token by setting it to null
    // You might want to perform additional cleanup, such as clearing AsyncStorage
  };

  return (
    <TokenContext.Provider value={{ saveToken, getToken, signOut }}>
      {children}
    </TokenContext.Provider>
  );
};

const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
};

export { TokenProvider, useToken };
