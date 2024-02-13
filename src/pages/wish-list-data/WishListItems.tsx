import React, { useContext } from 'react';
import { loginState } from '../../context/LoginContext';
import { Navigate, useParams } from 'react-router-dom';
import ItemBox from '../../components/main/item-box/ItemBox';
import styles from './WishListItems.module.css';

export default function WishListItems() {
  const { isLogin } = useContext(loginState);
  const { uid } = useParams();

  if (!isLogin || uid !== isLogin.uid) return <Navigate to={'/'} />;

  return (
    <>
      <h3 className={styles.header}>찜 목록</h3>
      <div className={styles.header}>
        {isLogin.wishList.length === 0 ? '목록이 없습니다' : ''}
      </div>

      <div className={styles.container}>
        {isLogin.wishList.map(item => (
          <ItemBox
            key={item.itemId}
            itemId={item.itemId}
            brandName={item.brandName}
            itemName={item.itemName}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </>
  );
}
