import React, { createContext, useEffect, useState } from 'react';
import { LoginContextDefault, Props, User } from '../types/types';
import { getData, onUserStateChange } from '../backEnd/fireBase';

export const loginState = createContext<LoginContextDefault>({
  isLogin: null,
  setLogin: (prev: any) => {},
});

export default function LoginContext({ children }: Props) {
  const [isLogin, setLogin] = useState<User | null>(null);

  useEffect(() => {
    onUserStateChange(setLogin);
  }, []);

  return (
    <loginState.Provider value={{ isLogin, setLogin }}>
      {children}
    </loginState.Provider>
  );
}
