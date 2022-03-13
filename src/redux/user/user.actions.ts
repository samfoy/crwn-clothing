import type { IUser } from "../../types";

export const setCurrentUser = (user: IUser) => ({
  type: 'SET_CURRENT_USER',
  payload: user
});