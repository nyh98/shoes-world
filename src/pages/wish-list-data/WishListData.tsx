import React, { useContext } from 'react';
import WishItemBox from '../../components/main/wish-item-box/WishItemBox';
import { loginState } from '../../context/LoginContext';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getData } from '../../backEnd/fireBase';

export default function WishListData() {
  const { isLogin } = useContext(loginState);
  const { uid } = useParams();
  const { isLoading, error, data } = useQuery(
    'wishList',
    () => getData('users', uid ? uid : ''),
    {}
  );

  if (!isLogin || uid !== isLogin.uid) {
    return <Navigate to={'/'} />;
  }

  if (isLoading) {
    return <>로딩중</>;
  }

  if (error) {
    return <>에러페이지</>;
  }

  return (
    <div>
      <WishItemBox />
    </div>
  );
}
