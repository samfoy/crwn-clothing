import { UserActionTypes } from "./user.types";

import type { IUser } from "../../types";

export const setCurrentUser = (user: IUser) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});