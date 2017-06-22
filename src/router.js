import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Portfolio from './components/Portfolio/Portfolio';

export default (
  <Switch>
    <Route component={ App } exact path="/" />
    <Route component={ Portfolio } path="/portfolio" />
  </Switch>
)
