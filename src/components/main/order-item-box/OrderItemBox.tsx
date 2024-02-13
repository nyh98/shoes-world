import React, { useContext } from 'react';
import styles from './OrderItemBox.module.css';
import { Item, User } from '../../../types/types';
import { loginState } from '../../../context/LoginContext';
import { setShoppingBasket } from '../../../backEnd/fireBase';

export default function OrderItemBox({
  itemName,
  quantity,
  imgUrl,
  price,
  size,
  itemId,
}: Item) {
  const { isLogin, setLogin } = useContext(loginState);

  const deleteItemHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isLogin) {
      const item = [...isLogin.shoppingBasket];
      const index = item.findIndex(
        item => item.itemId === itemId && item.size[0] === size[0]
      );
      if (index !== -1) {
        item.splice(index, 1);
        setLogin((prev: User) => ({ ...prev, shoppingBasket: item }));
        setShoppingBasket(isLogin.uid, item);
      }
    }
  };

  const increaseQuantityHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isLogin) {
      const item = [...isLogin.shoppingBasket];
      const index = item.findIndex(
        item => item.itemId === itemId && item.size[0] === size[0]
      );
      if (index !== -1 && item[index].quantity !== undefined) {
        item[index].quantity!++;
        setLogin((prev: User) => ({ ...prev, shoppingBasket: item }));
        setShoppingBasket(isLogin.uid, item);
      }
    }
  };

  const decreaseQuantityHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isLogin) {
      const item = [...isLogin.shoppingBasket];
      const index = item.findIndex(
        item => item.itemId === itemId && item.size[0] === size[0]
      );
      if (index !== -1 && item[index].quantity !== undefined) {
        item[index].quantity!--;
        setLogin((prev: User) => ({ ...prev, shoppingBasket: item }));
        setShoppingBasket(isLogin.uid, item);
      }
    }
  };
  return (
    <article className={styles.container}>
      <div className={styles['container-detail']}>
        <img src={imgUrl} alt="item-img" className={styles['img-size']} />
        <div className={styles['detail-box']}>
          <div className={styles['name-font']}>{itemName}</div>
          <div>옵션 : {size[0]}</div>
          <div>{Number(price).toLocaleString('ko-kr')}</div>
        </div>
      </div>
      <div className={styles['count-container']}>
        <button className={styles['delete-button']} onClick={deleteItemHandler}>
          x
        </button>
        <div className={styles['quantity-container']}>
          <button
            className={styles['quantity-button']}
            disabled={quantity !== undefined && quantity <= 1 ? true : false}
            onClick={decreaseQuantityHandler}
          >
            -
          </button>
          <div>{quantity ? quantity + '' : ''}</div>
          <button
            className={styles['quantity-button']}
            onClick={increaseQuantityHandler}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}
