import React from 'react';
import { Item } from '../../../types/types';
import styles from './ItemBox.module.css';
import { Link } from 'react-router-dom';

export default function ItemBox({
  itemName,
  brand,
  imgUrl,
  price,
  itemId,
}: Item) {
  return (
    <article className={styles.container}>
      <Link to={`/itemDetail/${itemId}`} className={styles['link-style']}>
        <img src={imgUrl} alt="shoes" className={styles['img-size']} />
        <div className={styles['brand-font']}>{brand}</div>
        <div>{itemName}</div>
        <div className={styles['price-font']}>{price}</div>
      </Link>
    </article>
  );
}