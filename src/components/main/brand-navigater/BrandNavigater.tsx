import React from 'react';
import styles from './BrandNavigater.module.css';
import { Link, useParams } from 'react-router-dom';

export default function BrandNavigater() {
  const { brandName } = useParams();

  return (
    <div className={styles.container}>
      <p
        className={
          brandName === 'adidas'
            ? styles['current-navigater']
            : styles.navigater
        }
      >
        <Link to={'/shop/adidas'} className={styles.link}>
          adidas
        </Link>
      </p>
      <p
        className={
          brandName === 'Jordan'
            ? styles['current-navigater']
            : styles.navigater
        }
      >
        <Link to={'/shop/Jordan'} className={styles.link}>
          Jordan
        </Link>
      </p>
      <p
        className={
          brandName === 'Nike' ? styles['current-navigater'] : styles.navigater
        }
      >
        <Link to={'/shop/Nike'} className={styles.link}>
          Nike
        </Link>
      </p>
      <p
        className={
          brandName === 'Vans' ? styles['current-navigater'] : styles.navigater
        }
      >
        <Link to={'/shop/Vans'} className={styles.link}>
          Vans
        </Link>
      </p>
    </div>
  );
}
