import React from 'react';
import HomePage from './views/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/' component={HomePage} />
      <Route path='/topics' exact component={HomePage} />
      <Route path='/topics/:topicId' component={HomePage} />
    </Switch>
  );
}

export default App;
