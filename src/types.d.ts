import firebase from "firebase/compat";
export interface Section {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: Item[]
}

export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface IUserBase extends firebase.firestore.DocumentData {
  id: string
}

export type IUser = IUserBase | null

export type UserState = {
  currentUser: IUser | null;
};

export type UserAction = {
  type: 'SET_CURRENT_USER';
  payload: IUser
}