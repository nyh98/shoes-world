export interface Props {
  children?: React.ReactNode;
  userName?: string;
  userProfileURL?: string | undefined;
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
}

export interface Item {
  itemName: string;
  brandName: string;
  imgUrl: string;
  price: string;
  itemId: string;
}

export interface BannerImgItem {
  brandName: string;
  bannerImgUrl?: string;
  url?: string;
}

export interface DataProps {
  brandNaem: string;
}
