import React from 'react';
import HomePage from './views/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Shop from './views/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>

      <Header></Header>
      <Switch>
        <Route path='/shop' exact component={Shop} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
