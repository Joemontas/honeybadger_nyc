import React, { Component } from 'react';
import './App.css';
import Cookies from './Cookies/Cookies';

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="App">
        <Cookies flavor = "Sugar" />
        <Cookies flavor = "Chocolate" />
        <Cookies flavor = "Lemon" />
      </div>
    );
  }
}

export default App;
