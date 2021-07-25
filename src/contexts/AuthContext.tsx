import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

interface AuthContextType {
  user?: UserData;
  isAuth: boolean;
  refresh: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData>();

  useEffect(() => {}, []);

  async function refresh() {}

  return (
    <AuthContext.Provider value={{ user, isAuth: user !== undefined, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};
