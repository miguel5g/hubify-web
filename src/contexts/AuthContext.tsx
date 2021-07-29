import { AxiosError } from 'axios';
import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { api } from '../services/Api';

interface AuthContextType {
  user?: UserData;
  isAuth: boolean;
  refresh: () => Promise<void>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    const fromSessionStorage = sessionStorage.getItem('user-session');

    if (fromSessionStorage) {
      setUser(JSON.parse(fromSessionStorage));
      refresh();
    }
  }, []);

  useEffect(() => {
    if (user) sessionStorage.setItem('user-session', JSON.stringify(user));
  }, [user]);

  async function refresh() {
    api
      .get('/user')
      .then(({ data }) => {
        setUser({
          id: data.id,
          username: data.username,
          avatar_url: data.avatar_url,
        });
      })
      .catch(({ response, ...err }: AxiosError) => {
        if (response) {
          if (response.status === 401) logOut();
        }
      });
  }

  async function logOut() {
    api.delete('/session');
    setUser(undefined);
    sessionStorage.removeItem('user-session');
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuth: user !== undefined, refresh, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
