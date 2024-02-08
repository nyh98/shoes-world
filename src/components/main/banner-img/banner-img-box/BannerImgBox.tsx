import React from 'react';
import { BannerImgItem } from '../../../../types/types';
import styles from './BannerImgBox.module.css';

export default function BannerImgBox({
  brandName,
  bannerImgUrl,
}: BannerImgItem) {
  return (
    <article className={styles.container}>
      <img src={bannerImgUrl} alt="brandImg" className={styles.img} />
      <p>{brandName}</p>
    </article>
  );
}
