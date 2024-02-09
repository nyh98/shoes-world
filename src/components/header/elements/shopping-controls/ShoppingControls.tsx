import React, { useContext } from 'react';
import styles from './ShoppingControls.module.css';
import WishList from './wish-list/WishList';
import ShoppingBasket from './shopping-basket/ShoppingBasket';
import { loginState } from '../../../../context/LoginContext';
import LoginAndOut from './login-and-out/LoginAndOut';
import LoginUserDisplay from './login-user-display/LoginUserDisplay';
import ItemEditorNav from './Item-editor/ItemEditorNav';

export default function ShoppingControls() {
  const { isLogin } = useContext(loginState);
  return (
    <div className={styles.container}>
      <WishList />
      <ShoppingBasket />
      {isLogin?.admin ? <ItemEditorNav /> : ''}
      {isLogin && <LoginUserDisplay />}
      <LoginAndOut />
    </div>
  );
}
