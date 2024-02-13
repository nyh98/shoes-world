import React, { useContext, useState } from 'react';
import { ItemBasic, User } from '../../../types/types';
import styles from './ItemBox.module.css';
import { Link } from 'react-router-dom';
import { loginState } from '../../../context/LoginContext';
import { login, setToWishList } from '../../../backEnd/fireBase';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';

export default function ItemBox({
  itemName,
  brandName,
  imgUrl,
  price,
  itemId,
}: ItemBasic) {
  const { isLogin, setLogin } = useContext(loginState);
  const [item] = useState({ itemId, brandName, imgUrl, price, itemName });

  function printWishListImg() {
    //빈 하트
    if (!isLogin) {
      return <IoIosHeartEmpty className={styles['wish-img']} />;
    }

    const index = isLogin.wishList.findIndex(item => item.itemId === itemId);
    //꽉 찬 하트
    if (index !== -1) {
      return <IoMdHeart className={styles['wish-img']} />;
    }

    //빈 하트
    if (index === -1) {
      return <IoIosHeartEmpty className={styles['wish-img']} />;
    }
  }

  const wishListHandler = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!isLogin) {
      login().then(res => setLogin(res));
      return;
    }

    const itemArr = [...isLogin.wishList];
    const index = itemArr.findIndex(item => item.itemId === itemId);
    //찜목록에 없으면 추가
    if (index === -1) {
      itemArr.push(item);
      setToWishList(isLogin.uid, itemArr);
      setLogin((prev: User) => ({
        ...prev,
        wishList: itemArr,
      }));
      return;
    }

    //찜목록에 있으면 삭제
    if (index >= 0) {
      itemArr.splice(index, 1);
      setToWishList(isLogin.uid, itemArr);
      setLogin((prev: User) => ({
        ...prev,
        wishList: itemArr,
      }));
    }
  };

  return (
    <article className={styles.container}>
      <div className={styles['wish-button']} onClick={wishListHandler}>
        {printWishListImg()}
      </div>
      <Link to={`/itemDetail/${itemId}`} className={styles['link-style']}>
        <img src={imgUrl} alt="shoes" className={styles['img-size']} />
        <div className={styles['brand-font']}>{brandName}</div>
        <div className={styles['name-font']}>{itemName}</div>
        <div className={styles['price-font']}>
          {Number(price).toLocaleString('ko-kr')}
        </div>
      </Link>
    </article>
  );
}
