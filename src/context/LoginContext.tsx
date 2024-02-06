import React, { createContext, useState } from 'react';
import { LoginContextDefault, Props } from '../types/types';

export const loginState = createContext<LoginContextDefault>({
  isLogin: null,
  setLogin: (prev: any) => {},
});

export default function LoginContext({ children }: Props) {
  const [isLogin, setLogin] = useState(null);

  return (
    <loginState.Provider value={{ isLogin, setLogin }}>
      {children}
    </loginState.Provider>
  );
}
