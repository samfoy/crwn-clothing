import { Item } from '../../types';

export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART'
} as const;

interface ToggleCartHiddenAction {
  type: typeof CartActionTypes.TOGGLE_CART_HIDDEN;
  payload: null;
}

interface AddItemAction {
  type: typeof CartActionTypes.ADD_ITEM;
  payload: Item | CartItem;
} 

interface ClearItemFromCartAction {
  type: typeof CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: CartItem;
}

interface RemoveItemAction {
  type: typeof CartActionTypes.REMOVE_ITEM;
  payload: CartItem;
}

export type CartActions = 
  | ToggleCartHiddenAction 
  | AddItemAction
  | RemoveItemAction
  | ClearItemFromCartAction

export interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

export type CartItem = Item & {
  quantity: number;
};
