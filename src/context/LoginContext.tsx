import React, { createContext, useEffect, useState } from 'react';
import { LoginContextDefault, Props, User } from '../types/types';

export const loginState = createContext<LoginContextDefault>({
  isLogin: null,
  setLogin: (prev: any) => {},
});

export default function LoginContext({ children }: Props) {
  const [isLogin, setLogin] = useState<User | null>(null);

  useEffect(() => {
    const getUser = localStorage.getItem('user');
    if (getUser) {
      setLogin(JSON.parse(getUser));
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      localStorage.setItem('user', JSON.stringify(isLogin));
    }
  }, [isLogin]);

  return (
    <loginState.Provider value={{ isLogin, setLogin }}>
      {children}
    </loginState.Provider>
  );
}
