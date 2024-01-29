import React from 'react';
import styles from './ShoppingBasket.module.css';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function ShoppingBasket() {
  return (
    <Link to={'/shoppingList'} className={styles.button}>
      <CgShoppingCart style={{ width: '20px', height: '20px' }} />
    </Link>
  );
}
