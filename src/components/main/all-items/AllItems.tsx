import React from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../../backEnd/fireBase';
import ItemBox from '../item-box/ItemBox';
import { Item } from '../../../types/types';
import styles from './AllItems.module.css';
import ErrorPage from '../../../pages/error/ErrorPage';
import ItemLoading from '../../../pages/loading/item-loading/ItemLoading';

export default function AllItems() {
  const { isLoading, error, data } = useQuery('allItems', () =>
    getData('items', 'specific')
  );

  if (isLoading) return <ItemLoading />;

  if (error) return <ErrorPage />;

  return (
    <div className={styles.container}>
      {data?.allItems.map((item: Item) => {
        return (
          <ItemBox
            itemName={item.itemName}
            brandName={item.brandName}
            imgUrl={item.imgUrl}
            price={item.price}
            itemId={item.itemId}
            key={item.itemId}
          />
        );
      })}
    </div>
  );
}
