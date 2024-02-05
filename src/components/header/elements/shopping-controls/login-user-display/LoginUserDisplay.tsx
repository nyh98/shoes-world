import React, { useContext } from 'react';
import UserProfile from './children/UserProfile';
import UserName from './children/UserName';
import { loginState } from '../../../../../context/LoginContext';

export default function LoginUserDisplay() {
  const { loginChecked } = useContext(loginState);

  return (
    <>
      {loginChecked && (
        <UserProfile userProfileURL={loginChecked.userProfileURL} />
      )}
      {loginChecked && <UserName userName={loginChecked.userName} />}
    </>
  );
}
