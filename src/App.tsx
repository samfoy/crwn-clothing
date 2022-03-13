import React, { Dispatch } from 'react';
import { Route, Switch } from 'react-router';
import firebase from 'firebase/compat';
import { connect, ConnectedProps } from 'react-redux';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { IUser, UserAction } from './types';

export type MyUser = firebase.firestore.DocumentData & {
  id: string;
};

type AppState = {
  currentUser: MyUser | null;
};

class App extends React.Component<AppProps, AppState> {
  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  async componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (!userRef) return;
        userRef.onSnapshot(snapshot => {
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user) as UserAction)
});

const connector = connect(null, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
