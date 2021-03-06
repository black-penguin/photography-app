import React, { Component } from 'react';
import './css/reset.css';
import './css/App.css';
import './css/index.css';
import './css/styles.css';

import Nav from './components/Nav/Nav';
import router from './router';

class App extends Component
{
  render()
  {
    return (
      <div>
        <div className="tabs">
          <h1>Austin Wheelwright</h1>
          <h2 className="title">Photographer</h2>
          <div className="call_me">
            <a href="tel:385-225-5273">
              <span>Call Me</span>
            </a>
          </div>
        </div>
        <Nav />
        { router }
      </div>
    );
  }
}

export default App;
