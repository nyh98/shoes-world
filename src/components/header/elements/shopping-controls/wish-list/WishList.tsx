import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function WishList() {
  return (
    <Link to={'/wishList'} style={{ color: 'black' }}>
      <FaRegHeart style={{ width: '20px', height: '20px' }} />
    </Link>
  );
}
