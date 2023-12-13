import React, { createContext, FC, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState(false);

  return (
    <AuthContext.Provider
      value={{ token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
