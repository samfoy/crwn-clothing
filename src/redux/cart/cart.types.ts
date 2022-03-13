import { Item } from "../../types";

export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM'
} as const

interface ToggleCartHiddenAction {
  type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
  payload: null
}

interface AddItemAction {
  type: typeof CartActionTypes.ADD_ITEM;
  payload: CartItem
}

export type CartActions =
  | ToggleCartHiddenAction
  | AddItemAction

export interface CartState {
  hidden: boolean,
  cartItems: CartItem[]
}

export type CartItem = Item & {
  quantity: number
}