import React, { useContext } from 'react';
import styles from './WishList.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { loginState } from '../../../../../context/LoginContext';
import { login } from '../../../../../backEnd/fireBase';

export default function WishList() {
  const { isLogin, setLogin } = useContext(loginState);

  if (!isLogin) {
    return (
      <div
        className={styles.button}
        onClick={async () => {
          await login().then(res => setLogin(res));
        }}
      >
        <FaRegHeart className={styles['img-size']} />
      </div>
    );
  }

  return (
    <Link to={`/wishList/${isLogin?.uid}`} className={styles.button}>
      {isLogin.wishList.length >= 1 ? (
        <div className={styles['item-count']}>{isLogin.wishList.length}</div>
      ) : (
        ''
      )}
      <FaRegHeart className={styles['img-size']} />
    </Link>
  );
}
