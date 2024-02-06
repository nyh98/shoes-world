export interface Props {
  children?: React.ReactNode;
  userName?: string;
  userProfileURL?: string | undefined;
}

export interface LoginContextDefault {
  loginChecked: null | User;
  setLoginChecked: Function;
}

interface User {
  admin: boolean;
  uid: string;
  userName: string;
  userProfileURL: string;
}
