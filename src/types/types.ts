import { Dispatch, SetStateAction } from 'react';

export interface Props {
  children?: React.ReactNode;
  userName?: string;
  userProfileURL?: string | undefined;
}

export interface UploadStateProps {
  uploadItem?: UploadItem;
  setUploadItem: Dispatch<SetStateAction<UploadItem>>;
}

export interface LoginContextDefault {
  isLogin: null | User;
  setLogin: Function;
}

export interface User {
  admin: boolean;
  uid: string;
  userName: string;
  userProfileURL: string;
  wishList: ItemBasic[];
  shoppingBasket: Item[];
}

export interface ItemBasic {
  itemId: string;
  brandName: string;
  imgUrl: string;
  price: string;
  itemName: string;
}

export interface Item {
  [key: string]: string | string[] | number | undefined;
  itemName: string;
  brandName: string;
  imgUrl: string;
  price: string;
  itemId: string;
  size: string[];
  quantity?: number;
}

export interface BannerImgItem {
  brandName: string;
  bannerImgUrl?: string;
  url?: string;
}

export interface UploadItem {
  [key: string]: null | File | string[] | string;
  file: null | File;
  itemName: string;
  brandName: string;
  price: string;
  size: string[];
}
