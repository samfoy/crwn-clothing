import { FC, Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOutUser } from '../../firebase/firebase.utils';
import { UserContext, UserContextType } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './navigation.style.scss';

const Navigation: FC = () => {
  const { currentUser } = useContext(UserContext) as UserContextType;
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="header">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link to="/shop" className="option">
            SHOP
          </Link>
          <Link to="/shop" className="option">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={signOutUser}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
