import React from 'react';
import { Route, Switch } from 'react-router';
import firebase from 'firebase/compat';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

export type MyUser = firebase.firestore.DocumentData & {
  id: string;
};

type AppState = {
  currentUser: MyUser | null;
};

class App extends React.Component<{}, AppState> {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (!userRef) return;
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:
              {
                id: snapshot.id,
                ...snapshot.data()
              }
          });
        });
      }
      this.setState({ currentUser: null });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
