import React, { useState } from 'react';
import styles from './BannerImg.module.css';
import { useQuery } from 'react-query';
import { getData } from '../../../backEnd/fireBase';
import { BannerImgItem } from '../../../types/types';
import BannerImgBox from './banner-img-box/BannerImgBox';

export default function BannerImg() {
  const { isLoading, error, data } = useQuery('bannerImgs', () =>
    getData('items', 'bannerImgs')
  );

  if (isLoading) return <>로딩 페이지</>;

  if (error) return <>에러 페이지</>;

  return (
    <div className={styles.container}>
      {data?.urls.map((item: BannerImgItem) => (
        <BannerImgBox
          brandName={item.brandName}
          bannerImgUrl={item.url}
          key={item.brandName}
        />
      ))}
    </div>
  );
}
