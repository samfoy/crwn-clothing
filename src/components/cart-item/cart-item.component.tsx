import { FC } from 'react';
import { CartItem as CartItemType } from '../../redux/cart/cart.types';
import './cart-item.style.scss';

const CartItem: FC<CartItemProps> = ({
  item: { imageUrl, price, name, quantity }
}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

type CartItemProps = { item: CartItemType };

export default CartItem;
