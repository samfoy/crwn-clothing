import { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { AnyAction, Dispatch} from 'redux';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.style.scss';

const CartDropdown: FC<CartDropdownProps> = ({ cartItems, toggleCartHidden }) => {
  let navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT{' '}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const connector = connect(mapStateToProps, mapDispatchToProps);
type CartDropdownProps = ConnectedProps<typeof connector>;

export default connector(CartDropdown);
