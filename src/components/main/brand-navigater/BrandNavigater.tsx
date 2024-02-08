import React from 'react';
import styles from './BrandNavigater.module.css';
import { Link } from 'react-router-dom';

export default function BrandNavigater() {
  return (
    <div className={styles.container}>
      <p className={styles.navigater}>
        <Link to={'/shop/adidas'} className={styles.link}>
          adidas
        </Link>
      </p>
      <p className={styles.navigater}>
        <Link to={'/shop/Jordan'} className={styles.link}>
          Jordan{' '}
        </Link>
      </p>
      <p className={styles.navigater}>
        <Link to={'/shop/Nike'} className={styles.link}>
          Nike{' '}
        </Link>
      </p>
      <p className={styles.navigater}>
        <Link to={'/shop/Vans'} className={styles.link}>
          Vans{' '}
        </Link>
      </p>
    </div>
  );
}
