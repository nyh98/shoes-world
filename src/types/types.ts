export interface Props {
  children?: React.ReactNode;
  userName?: string;
  userProfileURL?: string | undefined;
}

export interface LoginContextDefault {
  loginChecked: null | any;
  setLoginChecked: Function;
}
