import { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { State } from '../../redux/root-reducer';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header: FC<HeaderProps> = ({ currentUser }) => {
  return (
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
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return { currentUser: state.user.currentUser };
};

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);
