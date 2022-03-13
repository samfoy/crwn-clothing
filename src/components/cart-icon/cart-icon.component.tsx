import { FC, ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';
import { Dispatch } from 'redux';
import { CartAction } from '../../redux/cart/cart.reducer';

const CartIcon: FC<CartIconProps> = ({ toggleCartHidden }): ReactElement => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch<CartAction>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const connector = connect(null, mapDispatchToProps);
type CartIconProps = ConnectedProps<typeof connector>;

export default connector(CartIcon);
