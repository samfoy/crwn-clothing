import { Item } from '../../types';
import { CartActionTypes, CartItem } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: Item | CartItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item: CartItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item: CartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
