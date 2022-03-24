import React, { Dispatch } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Unsubscribe } from 'firebase/auth';
import './App.scss';

import Home from './routes/home/home.component';
import ShopPage from './routes/shop/shop.component';
import CheckoutPage from './components/checkout/checkout.component';
import Header from './routes/header/header.component';
import SignInAndSignUpPage from './routes/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selector';

import { setCurrentUser } from './redux/user/user.actions';
import { IUser, UserActions } from './redux/user/user.types';
import { auth, createUserDocument } from './firebase/firebase.utils';
import { State } from './redux/root-reducer';
import { onSnapshot } from 'firebase/firestore';

class App extends React.Component<AppProps, State> {
  unsubscribeFromAuth: Unsubscribe | null = null;

  async componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        if (!userRef) return;
        onSnapshot(userRef, snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(null);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route
              path="signin"
              element={
                this.props.currentUser ? (
                  <Navigate replace to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Route>
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
  setCurrentUser: (user: IUser | null) => dispatch(setCurrentUser(user))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
