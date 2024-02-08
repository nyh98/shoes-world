import React from 'react';
import { BannerImgItem } from '../../../../types/types';

export default function BannerImgBox({
  brandName,
  bannerImgUrl,
}: BannerImgItem) {
  return (
    <article>
      <img src={bannerImgUrl} alt="brandImg" />
      <div>{brandName}</div>
    </article>
  );
}
