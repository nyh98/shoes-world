import React, { useContext } from 'react';
import { loginState } from '../../context/LoginContext';
import { Navigate, useParams } from 'react-router-dom';
import { Item } from '../../types/types';
import ItemBox from '../../components/main/item-box/ItemBox';
import styles from './WishListItems.module.css';
import { addToWishList, login } from '../../backEnd/fireBase';

export default function WishListItems() {
  const { isLogin, setLogin } = useContext(loginState);
  const { uid } = useParams();

  const addToWishListHandler = async () => {
    if (!isLogin) {
      login().then(res => setLogin(res));
      return;
    }
    // await addToWishList(isLogin.uid, uploadItem);
  };

  if (!isLogin || uid !== isLogin.uid) return <Navigate to={'/'} />;

  return (
    <>
      <h3 className={styles.header}>찜 목록</h3>
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
    </>
  );
}
