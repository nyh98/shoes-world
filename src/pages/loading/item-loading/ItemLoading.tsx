import React, { useState } from 'react';
import styles from './ItemLoading.module.css';
export default function ItemLoading() {
  const [arr] = useState(Array.from({ length: 10 }));

  return (
    <div className={styles.container}>
      {arr.map(_ => (
        <div>
          <div className={styles['img-size']}></div>
          <div className={styles.brand}></div>
          <div className={styles['item-name']}></div>
          <div className={styles.price}></div>
        </div>
      ))}
    </div>
  );
}
