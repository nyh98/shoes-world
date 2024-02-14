import React from 'react';
import styles from './HomeLoading.module.css';
import ItemLoading from '../item-loading/ItemLoading';

export default function HomeLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.slide}></div>
      <div className={styles['banner-container']}>
        <div className={styles.banner}></div>
        <div className={styles.banner}></div>
        <div className={styles.banner}></div>
        <div className={styles.banner}></div>
      </div>
      <ItemLoading />
    </div>
  );
}
