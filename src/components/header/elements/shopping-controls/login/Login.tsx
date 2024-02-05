import React, { useContext } from 'react';
import styles from './Login.module.css';
import { login, logout } from '../../../../../backEnd/fireBase';
import { loginState } from '../../../../../context/LoginContext';

export default function Login() {
  const { loginChecked, setLoginChecked } = useContext(loginState);
  return (
    <div className={styles.font}>
      {loginChecked ? (
        <div
          onClick={async () => {
            await logout().then(res => {
              setLoginChecked(!loginChecked);
            });
          }}
        >
          Logout
        </div>
      ) : (
        <div
          onClick={async () => {
            await login().then(res => {
              setLoginChecked(!loginChecked);
            });
          }}
        >
          Login
        </div>
      )}
    </div>
  );
}
