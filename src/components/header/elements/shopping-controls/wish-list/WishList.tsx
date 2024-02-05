import React from 'react';
import styles from './WishList.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function WishList() {
  return (
    <Link to={'/wishList'} className={styles.button}>
      <FaRegHeart className={styles['img-size']} />
    </Link>
  );
}
