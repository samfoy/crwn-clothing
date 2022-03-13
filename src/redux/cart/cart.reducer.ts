import { CartActionTypes } from "./cart.actionTypes";

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (state: CartState = INITIAL_STATE, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    default:
      return state;
  }
}

export interface CartState {
  hidden: boolean
}

export interface CartAction {
  type: string;
  payload?: boolean;
}

export default cartReducer;