import React from 'react';
import { Outlet } from 'react-router-dom';
import BrandNavigater from '../../components/main/brand-navigater/BrandNavigater';

export default function Shop() {
  return (
    <>
      <BrandNavigater />
      <Outlet />
    </>
  );
}
