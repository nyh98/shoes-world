import React from 'react';
import { BsPencil } from 'react-icons/bs';
import styles from './ItemEditor.module.css';
import { Link } from 'react-router-dom';

export default function ItemEditor() {
  return (
    <Link to={'/'} className={styles.button}>
      <BsPencil className={styles['img-size']} />
    </Link>
  );
}
