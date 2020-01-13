import React, { useState, useEffect } from 'react';
import HomePage from './views/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Shop from './views/shop/shop.component';
import Header from './components/header/header.component';
import AuthPage from './views/authpage/authpage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

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
  }, []);

  useEffect(() => {
    console.log('currentUser', currentUser);
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser}></Header>
      <Switch>
        <Route path="/shop" exact component={Shop} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
