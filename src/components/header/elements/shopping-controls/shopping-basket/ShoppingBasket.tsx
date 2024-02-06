import React, { useContext } from 'react';
import styles from './ShoppingBasket.module.css';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { loginState } from '../../../../../context/LoginContext';

export default function ShoppingBasket() {
  const { loginChecked } = useContext(loginState);
  return (
    <Link to={`/shoppingList/${loginChecked?.uid}`} className={styles.button}>
      <CgShoppingCart className={styles['img-size']} />
    </Link>
  );
}
