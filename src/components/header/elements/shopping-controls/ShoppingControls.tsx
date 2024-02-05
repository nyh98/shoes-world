import React from 'react';
import styles from './ShoppingControls.module.css';
import WishList from './wish-list/WishList';
import ShoppingBasket from './shopping-basket/ShoppingBasket';
import Login from './login/Login';
import ItemEditor from './Item-editor/ItemEditor';

export default function ShoppingControls() {
  return (
    <div className={styles.container}>
      <WishList />
      <ShoppingBasket />
      <ItemEditor />
      <Login />
    </div>
  );
}
