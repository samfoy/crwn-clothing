import { createSelector } from "reselect";

import { Selector } from "react-redux";
import { State } from "../root-reducer";
import { CartState } from "./cart.types";

const selectCart: Selector<State, CartState> = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
)