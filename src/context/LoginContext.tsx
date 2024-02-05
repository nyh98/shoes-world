import React, { createContext, useState } from 'react';
import { Props } from '../types/types';

export const loginState = createContext({
  loginChecked: false,
  setLoginChecked: (prev: boolean) => {
    prev = !prev;
  },
});

export default function LoginContext({ children }: Props) {
  const [loginChecked, setLoginChecked] = useState(false);

  return (
    <loginState.Provider value={{ loginChecked, setLoginChecked }}>
      {children}
    </loginState.Provider>
  );
}
