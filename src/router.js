import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

export default (
  <Switch>
    <Route component={ App } exact path="/" />
    <Route component={ Portfolio } path="/portfolio" />
    <Route component={ Contact} path="/contact" />
  </Switch>
)
