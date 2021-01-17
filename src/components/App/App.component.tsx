import React, { Component } from 'react'
import SignIn from '../Authentication/SignIn/SignIn.component';
import Home from '../Home/Home'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Home />
      </div>
    );
  }
}

export default App;