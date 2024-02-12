import React from 'react';
import styles from './OrderItemBox.module.css';
import { Item } from '../../../types/types';

export default function OrderItemBox({
  itemName,
  quantity,
  imgUrl,
  price,
  size,
}: Item) {
  return (
    <article className={styles.container}>
      <div className={styles['container-detail']}>
        <img src={imgUrl} alt="item-img" className={styles['img-size']} />
        <div className={styles['detail-box']}>
          <div className={styles['name-font']}>{itemName}</div>
          <div>{size[0]}</div>
          <div>{Number(price).toLocaleString('ko-kr')}</div>
        </div>
      </div>
      <div>- {quantity ? quantity + '' : ''} +</div>
    </article>
  );
}
