import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function WishList() {
  return (
    <Link to={'/wishList'}>
      <FaRegHeart style={{ width: '25px', height: '25px' }} />
    </Link>
  );
}
