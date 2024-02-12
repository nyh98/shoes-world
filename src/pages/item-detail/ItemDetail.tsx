import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { addToShoppingBasket, getData, login } from '../../backEnd/fireBase';
import { useParams } from 'react-router-dom';
import { Item, User } from '../../types/types';
import styels from './ItemDetail.module.css';
import { loginState } from '../../context/LoginContext';

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
  });

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
    await addToShoppingBasket(isLogin.uid, uploadItem);
    const updateUser = await getData('users', isLogin.uid);
    setLogin((prev: User) => ({
      ...prev,
      shoppingBasket: updateUser?.shoppingBasket,
      wishList: updateUser?.wishList,
    }));
    alert('장바구니에 추가 되었습니다');
    window.location.reload();
  };

  useEffect(() => {
    //데이터 로드시 장바구니에 담기 전 셋팅
    if (data) {
      setUploadItem(prev => ({
        ...prev,
        itemName: data.detail.itemName,
        brandName: data.detail.brandName,
        imgUrl: data.detail.imgUrl,
        price: data.detail.price,
        itemId: data.detail.itemId,
        size: [''],
      }));
    }
  }, [data]);

  if (isLoading) return <>로딩페이지</>;

  if (error) return <>에러 페이지</>;

  return (
    <div className={styels.parent}>
      <img
        src={data?.detail.imgUrl}
        alt="item-img"
        className={styels['img-size']}
      />
      <div className={styels.container}>
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
              <option value={item}>{item}</option>
            ))}
          </optgroup>
        </select>
        <div className={styels['button-parent']}>
          <button
            className={styels.button}
            onClick={addToShoppingBasketHandler}
          >
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
}
