import React, { useEffect } from 'react';
import HomePage from './views/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Shop from './views/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './views/authpage/authpage.component';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    return auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser(
            {
              id: snapshot.id,
              ...snapshot.data()
            },
            () => console.log('i was called')
          );
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/shop" exact component={Shop} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
