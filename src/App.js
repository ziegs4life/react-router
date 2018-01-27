import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FAQ from './FAQ.js';
import AboutMe from './AboutMe.js'

import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About Me</Link>
        </header>


        <Route path="/faq" component={FAQ}/>
        <Route path="/about" component={AboutMe}/>

      </div>
    );
  }
}

export default App;
