import React, { useContext } from 'react';
import UserProfile from './children/UserProfile';
import UserName from './children/UserName';
import { loginState } from '../../../../../context/LoginContext';

export default function LoginUserDisplay() {
  const { isLogin } = useContext(loginState);

  return (
    <>
      {isLogin && <UserProfile userProfileURL={isLogin.userProfileURL} />}
      {isLogin && <UserName userName={isLogin.userName} />}
    </>
  );
}
