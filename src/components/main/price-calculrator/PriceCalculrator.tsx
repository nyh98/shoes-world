import React, { useContext } from 'react';
import styles from './PriceCalculrator.module.css';
import { loginState } from '../../../context/LoginContext';
import { Item } from '../../../types/types';

export default function PriceCalculrator() {
  const { isLogin } = useContext(loginState);

  const shippingFee = 3000;

  function getTotalPrice() {
    if (isLogin?.shoppingBasket[0]) {
      const itemPriceArr = isLogin.shoppingBasket.map(
        (item: Item) => Number(item.price) * (item.quantity ? item.quantity : 1)
      );
      const totalPrice = itemPriceArr.reduce((a, b) => a + b);
      const result = {
        itemTotalPrice: totalPrice.toLocaleString('ko-kr'),
        allTotalPrice: totalPrice
          ? (totalPrice + shippingFee).toLocaleString('ko-kr')
          : null,
      };
      return result;
    }
  }

  const calculrator = getTotalPrice();
  return (
    <div className={styles.container}>
      <div className={styles.price}>
        상품 총액
        <br />
        {calculrator?.itemTotalPrice}
      </div>
      <div className={styles.sign}>+</div>
      <div className={styles.price}>
        배송비 <br />
        {shippingFee.toLocaleString('ko-kr')}
      </div>
      <div className={styles.sign}>=</div>
      <div className={styles.price}>
        총가격 <br />
        {calculrator?.allTotalPrice}
      </div>
    </div>
  );
}
