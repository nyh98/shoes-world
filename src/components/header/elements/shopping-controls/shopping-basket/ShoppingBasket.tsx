import React, { useContext } from 'react';
import styles from './ShoppingBasket.module.css';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { loginState } from '../../../../../context/LoginContext';
import { login } from '../../../../../backEnd/fireBase';

export default function ShoppingBasket() {
  const { loginChecked, setLoginChecked } = useContext(loginState);

  if (!loginChecked) {
    return (
      <div
        className={styles.button}
        onClick={async () => {
          await login().then(res => setLoginChecked(res));
        }}
      >
        <CgShoppingCart className={styles['img-size']} />
      </div>
    );
  }

  return (
    <Link to={`/shoppingList/${loginChecked?.uid}`} className={styles.button}>
      <CgShoppingCart className={styles['img-size']} />
    </Link>
  );
}
