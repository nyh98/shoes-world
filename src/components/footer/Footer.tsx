import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.font}>
        현재 페이지는 학습용으로 제작한 쇼핑몰 페이지 입니다. by nyh98
      </p>
      <p className={styles.font} style={{ marginTop: '0' }}>
        The current page is a shopp page created for learning purposes. Posted
        by nyh98
      </p>
    </div>
  );
}
