import { UserActionTypes, IUser } from "./user.types";

export const setCurrentUser = (payload: IUser | null) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: payload
});