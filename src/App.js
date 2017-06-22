import React, { Component } from 'react';
import './css/reset.css';
import './css/App.css';
import './css/index.css';
import './css/styles.css';

class App extends Component
{
  render()
  {
    return (
      <div>
        <div className="tabs">
          <h1>Austin Wheelwright</h1>
          <h2 className="title">Photographer</h2>
          <div className="contact">
            <p>Tap to Call Me</p>
          </div>
        </div>
        <div>
          <ul>
          <a href="./index.html"><li>Home</li></a>
          <a href="./portfolio.html"><li>Portfolio</li></a>
          <a href="./contact.html"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
