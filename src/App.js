import React from 'react';
import HomePage from './views/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Shop from './views/shop/shop.component';

function App() {
  return (
    <Switch>
      <Route path='/shop' exact component={Shop} />
      <Route path='/' component={HomePage} />
    </Switch>
  );
}

export default App;
