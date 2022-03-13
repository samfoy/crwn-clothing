import type { UserAction, UserState } from '../../types';

const INITIAL_STATE: UserState = {
  currentUser: null
}

const userReducer = (state: UserState = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;