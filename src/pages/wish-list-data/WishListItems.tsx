import React, { useContext } from 'react';
import { loginState } from '../../context/LoginContext';
import { Navigate, useParams } from 'react-router-dom';
import { Item } from '../../types/types';
import ItemBox from '../../components/main/item-box/ItemBox';
import styles from './WishListItems.module.css';

export default function WishListItems() {
  const { isLogin } = useContext(loginState);
  const { uid } = useParams();

  if (!isLogin || uid !== isLogin.uid) return <Navigate to={'/'} />;

  return (
    <div className={styles.container}>
      {isLogin.wishList.map((item: Item) => (
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
  );
}
