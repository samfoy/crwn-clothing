import { FC } from 'react';

import { CartItem } from '../../redux/cart/cart.types';
import './checkout-item.style.scss';

const CheckoutItem: FC<CheckoutItemProps> = ({
  cartItem: { name, imageUrl, price, quantity }
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

type CheckoutItemProps = {
  cartItem: CartItem;
};

export default CheckoutItem;
