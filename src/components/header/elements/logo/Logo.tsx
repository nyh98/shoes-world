import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <Link to={'/'} className={styles.logo}>
      Shoes World
    </Link>
  );
}
