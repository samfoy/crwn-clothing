import React, { Dispatch } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import firebase from 'firebase/compat';
import { connect, ConnectedProps } from 'react-redux';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { State } from './redux/root-reducer';
import { IUser, UserAction } from './types';

class App extends React.Component<AppProps, State> {
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
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return { currentUser: state.user.currentUser };
};

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user) as UserAction)
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);
