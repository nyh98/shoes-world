import React, { useContext } from 'react';
import styles from './ShoppingBasket.module.css';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { loginState } from '../../../../../context/LoginContext';
import { login } from '../../../../../backEnd/fireBase';

export default function ShoppingBasket() {
  const { isLogin, setLogin } = useContext(loginState);

  if (!isLogin) {
    return (
      <div
        className={styles.button}
        onClick={async () => {
          await login().then(res => setLogin(res));
        }}
      >
        <CgShoppingCart className={styles['img-size']} />
      </div>
    );
  }

  return (
    <Link to={`/shoppingList/${isLogin?.uid}`} className={styles.button}>
      {isLogin.shoppingBasket.length >= 1 ? (
        <div className={styles['item-count']}>
          {isLogin.shoppingBasket.length}
        </div>
      ) : (
        ''
      )}
      <CgShoppingCart className={styles['img-size']} />
    </Link>
  );
}
