import React from 'react';
import styles from './Header.module.css';
import Logo from './elements/logo/Logo';
import ShoppingControls from './elements/shopping-controls/ShoppingControls';

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <ShoppingControls />
    </div>
  );
}
