import React, { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { loginState } from '../../context/LoginContext';
import { Item } from '../../types/types';
import styles from './ShoppingBasketItems.module.css';
import OrderItemBox from '../../components/main/order-item-box/OrderItemBox';
import PriceCalculrator from '../../components/main/price-calculrator/PriceCalculrator';

export default function ShoppingBasketItems() {
  const { isLogin } = useContext(loginState);
  const { uid } = useParams();

  if (!isLogin || uid !== isLogin.uid) return <Navigate to={'/'} />;

  return (
    <>
      <h3 className={styles.header}>내 장바구니</h3>
      <div className={styles.header}>
        {isLogin.shoppingBasket.length === 0 ? '목록이 없습니다' : ''}
      </div>
      <div className={styles.container}>
        {isLogin.shoppingBasket.map((item: Item) => (
          <OrderItemBox
            itemId={item.itemId}
            brandName={item.brandName}
            itemName={item.itemName}
            price={item.price}
            imgUrl={item.imgUrl}
            size={item.size}
            quantity={item.quantity}
          />
        ))}
      </div>
      <PriceCalculrator />
      <p className={styles.buy}>주문 하기</p>
    </>
  );
}
