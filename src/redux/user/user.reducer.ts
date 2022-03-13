import { Reducer } from 'redux';
import { UserActionTypes, UserState, UserActions } from './user.types';

const INITIAL_STATE: UserState = {
  currentUser: null
}

const userReducer: Reducer<UserState,UserActions> = (state = INITIAL_STATE, action) => {
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