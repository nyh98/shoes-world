import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { loginState } from '../../context/LoginContext';
import ItemBox from '../../components/main/item-box/ItemBox';
import { Item } from '../../types/types';
import styles from './ShoppingBasketItems.module.css';

export default function ShoppingBasketItems() {
  const { isLogin } = useContext(loginState);
  const { uid } = useParams();

  if (!isLogin || uid !== isLogin.uid) return <Navigate to={'/'} />;

  return (
    <>
      <h3 className={styles.header}>내 장바구니</h3>
      <div className={styles.container}>
        {isLogin.shoppingBasket.map((item: Item) => (
          <ItemBox
            itemId={item.itemId}
            brandName={item.brandName}
            itemName={item.itemName}
            price={item.price}
            imgUrl={item.imgUrl}
            size={item.size}
          />
        ))}
      </div>
    </>
  );
}
