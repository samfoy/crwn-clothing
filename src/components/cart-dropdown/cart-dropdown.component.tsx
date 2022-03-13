import { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../redux/root-reducer';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.style.scss';

const CartDropdown: FC<CartDropdownProps> = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT </CustomButton>
  </div>
);

const mapStateToProps = (state: State) => ({
  cartItems: selectCartItems(state)
});
const connector = connect(mapStateToProps);
type CartDropdownProps = ConnectedProps<typeof connector>;

export default connector(CartDropdown);
