import React from 'react';
import { Item } from '../../../types/types';
import styles from './ItemBox.module.css';
import { Link } from 'react-router-dom';

export default function ItemBox({
  itemName,
  brandName,
  imgUrl,
  price,
  itemId,
  size,
}: Item) {
  return (
    <article className={styles.container}>
      <Link to={`/itemDetail/${itemId}`} className={styles['link-style']}>
        <img src={imgUrl} alt="shoes" className={styles['img-size']} />
        <div className={styles['brand-font']}>{brandName}</div>
        <div className={styles['name-font']}>{itemName}</div>
        <div className={styles['price-font']}>
          {Number(price).toLocaleString('ko-kr')}
        </div>
      </Link>
    </article>
  );
}
