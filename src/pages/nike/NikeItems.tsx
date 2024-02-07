import React from 'react';
import { useQuery } from 'react-query';
import { getData } from '../../backEnd/fireBase';
import ItemBox from '../../components/main/item-box/ItemBox';
import styles from './NikeItems.module.css';

export default function NikeItems() {
  const { isLoading, error, data } = useQuery('nikeItems', () =>
    getData('items', 'nike')
  );

  if (isLoading) return <>로딩 페이지</>;

  if (error) return <>에러 페이지</>;

  const item = data?.shoes[0];

  return (
    <div className={styles.container}>
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      <ItemBox
        key={item.itemId}
        itemId={item.itemId}
        itemName={item.itemName}
        brand={item.brand}
        imgUrl={item.imgUrl}
        price={item.price}
      />
      {/* {data?.shoes.map((item: any) => {
        return (
          <ItemBox
            key={item.itemId}
            itemId={item.itemId}
            itemName={item.itemName}
            brand={item.brand}
            imgUrl={item.imgUrl}
            price={item.price}
          />
        );
      })} */}
    </div>
  );
}
