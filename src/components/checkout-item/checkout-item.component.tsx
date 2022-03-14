import { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import {
  addItem,
  clearItemFromCart,
  removeItem
} from '../../redux/cart/cart.actions';
import { CartActions, CartItem } from '../../redux/cart/cart.types';

import './checkout-item.style.scss';

const CheckoutItem: FC<CheckoutItemProps> = ({
  cartItem,
  clearItem,
  addItem,
  removeItem
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActions>) => ({
  clearItem: (item: CartItem) => dispatch(clearItemFromCart(item)),
  addItem: (item: CartItem) => dispatch(addItem(item)),
  removeItem: (item: CartItem) => dispatch(removeItem(item))
});

const connector = connect(null, mapDispatchToProps);

type CheckoutItemProps = ConnectedProps<typeof connector> & {
  cartItem: CartItem;
};

export default connector(CheckoutItem);
