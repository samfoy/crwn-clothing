import { AnyAction } from "redux";
import { Item } from "../../types";
import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state: CartState = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state;
  }
}

export interface CartState {
  hidden: boolean,
  cartItems: Item[]
}

export default cartReducer;