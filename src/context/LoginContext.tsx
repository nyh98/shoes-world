import React, { createContext, useState } from 'react';
import { LoginContextDefault, Props } from '../types/types';

export const loginState = createContext<LoginContextDefault>({
  loginChecked: null,
  setLoginChecked: (prev: any) => {},
});

export default function LoginContext({ children }: Props) {
  const [loginChecked, setLoginChecked] = useState(null);

  return (
    <loginState.Provider value={{ loginChecked, setLoginChecked }}>
      {children}
    </loginState.Provider>
  );
}
