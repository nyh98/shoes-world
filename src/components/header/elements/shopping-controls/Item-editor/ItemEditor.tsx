import React, { useContext } from 'react';
import { BsPencil } from 'react-icons/bs';
import styles from './ItemEditor.module.css';
import { Link } from 'react-router-dom';
import { loginState } from '../../../../../context/LoginContext';

export default function ItemEditor() {
  const { isLogin } = useContext(loginState);
  return (
    <Link to={`/ItemEditor/${isLogin?.uid}`} className={styles.button}>
      <BsPencil className={styles['img-size']} />
    </Link>
  );
}
