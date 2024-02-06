import React, { useContext } from 'react';
import styles from './Login.module.css';
import { login, logout } from '../../../../../backEnd/fireBase';
import { loginState } from '../../../../../context/LoginContext';

export default function LoginAndOut() {
  const { isLogin, setLogin } = useContext(loginState);
  console.log(isLogin);
  return (
    <div className={styles.font}>
      {isLogin ? (
        <div
          onClick={async () => {
            await logout().then(res => setLogin(null));
          }}
        >
          Logout
        </div>
      ) : (
        <div
          onClick={async () => {
            await login().then(res => setLogin(res));
          }}
        >
          Login
        </div>
      )}
    </div>
  );
}
