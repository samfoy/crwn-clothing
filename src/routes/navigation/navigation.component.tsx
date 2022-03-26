import { FC, Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOutUser } from '../../firebase/firebase.utils';
import { UserContext, UserContextType } from '../../contexts/user.context';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './navigation.style.scss';

const Navigation: FC<HeaderProps> = ({ hidden }) => {
  const { currentUser } = useContext(UserContext) as UserContextType;
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
        {hidden ? null : <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Navigation);
