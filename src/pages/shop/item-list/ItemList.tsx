import React from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../../backEnd/fireBase';
import ItemBox from '../../../components/main/item-box/ItemBox';
import styles from './ItemList.module.css';
import { DataProps, Item } from '../../../types/types';

export default function ItemList({ brandNaem }: DataProps) {
  const { isLoading, error, data } = useQuery(['items', brandNaem], () =>
    getData('items', brandNaem)
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
            price={item.price}
          />
        );
      })}
    </div>
  );
}
