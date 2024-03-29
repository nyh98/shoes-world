import React from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../../backEnd/fireBase';
import ItemBox from '../item-box/ItemBox';
import styles from './ItemList.module.css';
import { Item } from '../../../types/types';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../../pages/error/ErrorPage';
import ItemLoading from '../../../pages/loading/item-loading/ItemLoading';

export default function ItemList() {
  const { brandName } = useParams();
  const { isLoading, error, data } = useQuery(['items', brandName], () =>
    getData('items', brandName ? brandName : '')
  );

  if (isLoading) return <ItemLoading />;

  if (error) return <ErrorPage />;

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
