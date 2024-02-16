import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  addToShoppingBasket,
  getData,
  login,
  setShoppingBasket,
  setToWishList,
} from '../../backEnd/fireBase';
import { useParams } from 'react-router-dom';
import { Item, User } from '../../types/types';
import styles from './ItemDetail.module.css';
import { loginState } from '../../context/LoginContext';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import ErrorPage from '../error/ErrorPage';

export default function ItemDetail() {
  const { itemId } = useParams();
  const { isLogin, setLogin } = useContext(loginState);
  const { isLoading, error, data } = useQuery(['itemDetail', itemId], () =>
    getData('items', itemId ? itemId : '')
  );
  const [uploadItem, setUploadItem] = useState<Item>({
    itemName: '',
    brandName: '',
    imgUrl: '',
    price: '',
    itemId: '',
    size: [''],
    quantity: 1,
  });

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
      itemArr.push({
        itemId: uploadItem.itemId,
        brandName: uploadItem.brandName,
        imgUrl: uploadItem.imgUrl,
        price: uploadItem.price,
        itemName: uploadItem.itemName,
      });
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

  const addToShoppingBasketHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.currentTarget.disabled = true;
    if (!isLogin) {
      login().then(res => setLogin(res));
      e.currentTarget.disabled = false;
      return;
    }
    if (!uploadItem.size[0]) {
      alert('옵션을 선택해 주세요');
      e.currentTarget.disabled = false;
      return;
    }
    const itemArr = [...isLogin.shoppingBasket];
    const index = itemArr.findIndex(
      (item: Item) =>
        item.itemId === uploadItem.itemId && item.size[0] === uploadItem.size[0]
    );

    //기존에 있던 아이템이면 수량 증가
    if (index !== -1) {
      itemArr[index].quantity!++;
      await setShoppingBasket(isLogin.uid, itemArr);
      setLogin((prev: User) => ({
        ...prev,
        shoppingBasket: itemArr,
      }));
      alert('장바구니에 추가 되었습니다');
      window.location.reload();
      return;
    }
    await addToShoppingBasket(isLogin.uid, uploadItem);
    setLogin((prev: User) => ({
      ...prev,
      shoppingBasket: [...itemArr, uploadItem],
    }));
    alert('장바구니에 추가 되었습니다');
    window.location.reload();
  };

  useEffect(() => {
    //데이터 로드시 장바구니에 담기 전 셋팅
    if (data) {
      setUploadItem({
        itemName: data.detail.itemName,
        brandName: data.detail.brandName,
        imgUrl: data.detail.imgUrl,
        price: data.detail.price,
        itemId: data.detail.itemId,
        size: [''],
        quantity: 1,
      });
    }
  }, [data]);

  if (isLoading) return <>로딩페이지</>;

  if (error) return <ErrorPage />;

  return (
    <div className={styles.parent}>
      <img
        src={data?.detail.imgUrl}
        alt="item-img"
        className={styles['img-size']}
      />
      <div className={styles['wish-button']} onClick={wishListHandler}>
        {printWishListImg()}
      </div>
      <div className={styles.container}>
        <h3>{data?.detail.itemName}</h3>
        <div>{data?.detail.brandName}</div>
        <p>{Number(data?.detail.price).toLocaleString('ko-kr')}원</p>
        <select
          onChange={e =>
            setUploadItem(prev => ({ ...prev, size: [e.target.value] }))
          }
        >
          <optgroup label="size">
            <option value="" selected disabled hidden>
              옵션
            </option>
            {data?.detail.size.map((item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </optgroup>
        </select>
        <div className={styles['button-parent']}>
          <button
            className={styles.button}
            onClick={addToShoppingBasketHandler}
          >
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
}
