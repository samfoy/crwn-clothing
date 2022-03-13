import type { UserAction, UserState } from '../../types';
import { UserActionTypes } from './user.actionTypes';

const INITIAL_STATE: UserState = {
  currentUser: null
}

const userReducer = (state: UserState = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;