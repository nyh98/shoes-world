import React from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../../backEnd/fireBase';
import ItemBox from '../../../components/main/item-box/ItemBox';
import styles from './ItemList.module.css';
import { Item } from '../../../types/types';
import { useParams } from 'react-router-dom';

export default function ItemList() {
  const { brandName } = useParams();
  const { isLoading, error, data } = useQuery(['items', brandName], () =>
    getData('items', brandName ? brandName : '')
  );

  if (isLoading) return <>로딩 페이지</>;

  if (error) return <>에러 페이지</>;

  return (
    <div className={styles.container}>
      {data?.shoes.map((item: Item) => {
        return (
          <ItemBox
            key={item.itemId}
            itemId={item.itemId}
            itemName={item.itemName}
            brandName={item.brandName}
            imgUrl={item.imgUrl}
            size={item.size}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
