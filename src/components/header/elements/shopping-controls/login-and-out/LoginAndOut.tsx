import React, { useContext } from 'react';
import styles from './Login.module.css';
import { login, logout } from '../../../../../backEnd/fireBase';
import { loginState } from '../../../../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

export default function LoginAndOut() {
  const { isLogin, setLogin } = useContext(loginState);
  const navigate = useNavigate();
  return (
    <div className={styles.font}>
      {isLogin ? (
        <div
          onClick={async () => {
            await logout().then(res => setLogin(null));
            navigate('/');
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
