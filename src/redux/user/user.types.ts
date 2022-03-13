import firebase from "firebase/compat";

export const UserActionTypes = {
  SET_CURRENT_USER : 'SET_CURRENT_USER'
} as const


export interface IUser extends firebase.firestore.DocumentData {
  id: string
}

export type UserState = {
  currentUser: IUser | null;
};

export type SetCurrentUserAction = {
  type: 'SET_CURRENT_USER';
  payload: IUser | null
}

export type UserActions = 
  | SetCurrentUserAction