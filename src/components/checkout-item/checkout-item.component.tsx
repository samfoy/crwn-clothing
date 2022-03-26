import { FC, useContext } from 'react';
import { CartContext, Item } from '../../contexts/cart.context';

import './checkout-item.style.scss';

const CheckoutItem: FC<CheckOutItemProps> = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(
    CartContext
  );

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

type CheckOutItemProps = {
  cartItem: Item;
};

export default CheckoutItem;
