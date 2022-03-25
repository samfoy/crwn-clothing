import { FC, Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header: FC<HeaderProps> = ({ currentUser, hidden }) => {
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
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
      <Outlet />


    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);
