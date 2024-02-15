import React, { createContext, useEffect, useState } from 'react';
import { LoginContextDefault, Props, User } from '../types/types';
import { getData } from '../backEnd/fireBase';

export const loginState = createContext<LoginContextDefault>({
  isLogin: null,
  setLogin: (prev: any) => {},
});

export default function LoginContext({ children }: Props) {
  const [isLogin, setLogin] = useState<User | null>(null);

  async function resetUser() {
    const getUser = localStorage.getItem('user');
    if (getUser) {
      const user = JSON.parse(getUser);
      const data = await getData('users', user.uid);
      setLogin({
        ...user,
        shoppingBasket: data?.shoppingBasket,
        wishList: data?.wishList,
      });
    }
  }

  useEffect(() => {
    resetUser();
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
