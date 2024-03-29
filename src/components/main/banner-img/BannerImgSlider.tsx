import React from 'react';
import styles from './BannerImgSlider.module.css';
import { useQuery } from 'react-query';
import { getData } from '../../../backEnd/fireBase';
import BannerImgBox from './banner-img-box/BannerImgBox';
import { BannerImgItem } from '../../../types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ErrorPage from '../../../pages/error/ErrorPage';

export default function BannerImgSlider() {
  const { isLoading, error, data } = useQuery('bannerImgs', () =>
    getData('items', 'bannerImgs')
  );

  if (isLoading) return <></>;

  if (error) return <ErrorPage />;

  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className={styles.swiper}
    >
      {data?.urls.map((item: BannerImgItem) => (
        <SwiperSlide className={styles['swiper-slide']} key={item.brandName}>
          <BannerImgBox brandName={item.brandName} bannerImgUrl={item.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
