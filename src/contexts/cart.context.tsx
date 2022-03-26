import { createContext, useState, useEffect, FC } from 'react';

const addCartItem = (cartItems: Item[], cartItemToAdd: Item) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingItem) {
    return cartItems.map(
      cartItem =>
        cartItem.id === cartItemToAdd.id && cartItem.quantity
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
    );
  }

  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};

const removeCartItem = (cartItems: Item[], cartItemToRemove: Item) => {
  const existingItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingItem && existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(
    cartItem =>
      cartItem.id === cartItemToRemove.id && cartItem.quantity
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
  );
};

const clearCartItem = (cartItems: Item[], cartItemToClear: Item) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  toggleCartHidden: () => [],
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider: FC = ({ children }) => {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState<Item[]>([]);
  const [ cartCount, setCartCount ] = useState(0);
  const [ cartTotal, setCartTotal ] = useState(0);

  useEffect(
    () => {
      const newCartCount = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity!,
        0
      );
      setCartCount(newCartCount);
    },
    [ cartItems ]
  );

  useEffect(
    () => {
      const newCartTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity! * cartItem.price,
        0
      );
      setCartTotal(newCartTotal);
    },
    [ cartItems ]
  );

  const addItemToCart = (item: Item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const removeItemFromCart = (item: Item) => {
    setCartItems(removeCartItem(cartItems, item));
  };

  const clearItemFromCart = (item: Item) => {
    setCartItems(clearCartItem(cartItems, item));
  };
  const toggleCartHidden = () => setIsCartOpen(!isCartOpen);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    toggleCartHidden,
    cartCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: (val: boolean) => void;
  cartItems: Item[];
  addItemToCart: (item: Item) => void;
  removeItemFromCart: (item: Item) => void;
  clearItemFromCart: (item: Item) => void;
  toggleCartHidden: () => void;
  cartCount: number;
  cartTotal: number;
};

export type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
};
