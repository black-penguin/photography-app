import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'

export default (
  <Switch>
    <Route component={ Home } exact path="/home" />
    <Route component={ Portfolio } path="/portfolio" />
    <Route component={ Contact} path="/contact" />
  </Switch>
)
