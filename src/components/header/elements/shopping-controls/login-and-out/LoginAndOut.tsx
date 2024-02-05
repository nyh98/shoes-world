import React, { useContext } from 'react';
import styles from './Login.module.css';
import { login, logout } from '../../../../../backEnd/fireBase';
import { loginState } from '../../../../../context/LoginContext';

export default function LoginAndOut() {
  const { loginChecked, setLoginChecked } = useContext(loginState);
  console.log('state', loginChecked);
  return (
    <div className={styles.font}>
      {loginChecked ? (
        <div
          onClick={async () => {
            await logout().then(res => {
              setLoginChecked(false);
            });
          }}
        >
          Logout
        </div>
      ) : (
        <div
          onClick={async () => {
            await login().then(res => {
              console.log('요청 후', res);
              setLoginChecked(res);
            });
          }}
        >
          Login
        </div>
      )}
    </div>
  );
}
