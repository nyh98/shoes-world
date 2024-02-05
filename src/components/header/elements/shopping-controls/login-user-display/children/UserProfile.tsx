import React from 'react';
import { Props } from '../../../../../../types/types';
import styles from './UserStyle.module.css';

export default function UserProfile({ userProfileURL }: Props) {
  return (
    <div>
      <img src={userProfileURL} alt="" className={styles['img-style']} />
    </div>
  );
}
