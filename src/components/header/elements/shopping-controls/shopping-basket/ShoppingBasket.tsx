import React from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export default function ShoppingBasket() {
  return (
    <Link to={'/shoppingList'} style={{ color: 'black' }}>
      <CgShoppingCart style={{ width: '20px', height: '20px' }} />
    </Link>
  );
}
