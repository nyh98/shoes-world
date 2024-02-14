import React from 'react';
import BannerImgSlider from '../../components/main/banner-img/BannerImgSlider';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useQuery } from 'react-query';
import { getData } from '../../backEnd/fireBase';
import { BannerImgItem } from '../../types/types';
import AllItems from '../../components/main/all-items/AllItems';
import ErrorPage from '../error/ErrorPage';

export default function Home() {
  const { isLoading, error, data } = useQuery('brandLogo', () =>
    getData('items', 'brandLogo')
  );

  if (isLoading) return <>로딩 페이지</>;

  if (error) return <ErrorPage />;

  return (
    <div className={styles.parent}>
      <BannerImgSlider />
      <div className={styles.container}>
        {data?.urls.map((item: BannerImgItem) => (
          <Link
            to={`/shop/${item.brandName}`}
            className={styles.navigater}
            key={item.brandName}
          >
            <img src={item.url} alt="brandLogo" className={styles.img} />
          </Link>
        ))}
      </div>
      <AllItems />
    </div>
  );
}
