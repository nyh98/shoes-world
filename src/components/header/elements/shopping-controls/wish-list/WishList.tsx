import React, { useContext } from 'react';
import styles from './WishList.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { loginState } from '../../../../../context/LoginContext';
import { login } from '../../../../../backEnd/fireBase';

export default function WishList() {
  const { loginChecked, setLoginChecked } = useContext(loginState);

  return (
    <Link to={`/wishList/${loginChecked?.uid}`} className={styles.button}>
      <FaRegHeart className={styles['img-size']} />
    </Link>
  );
}
