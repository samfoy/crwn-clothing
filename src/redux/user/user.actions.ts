import { UserActionTypes } from "./user.actionTypes";

import type { IUser } from "../../types";

export const setCurrentUser = (user: IUser) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});