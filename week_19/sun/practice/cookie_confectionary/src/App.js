import React, { Component } from 'react';
import './App.css';
import Cookies from './Cookies/Cookies';

class App extends Component {
  state = {
    cookies: [
      {flavor: 'Sugar '},
      {flavor: 'Chocolate '},
      {flavor: 'Lemon '}
    ]
  }

  addCookie = () => {
    this.state.cookies[0].flavor = 'Sugar' 
  }

  render() {
    return (
      <div className="App">
        <Cookies flavor={this.state.cookies[0].flavor} qty={this.state.qty} />
        <button onClick={this.addCookie}>Add Cookie</button>
        <Cookies flavor ={this.state.cookies[1].flavor} qty={this.state} />
        <button onClick={this.addCookie}>Add Cookie</button>
        <Cookies flavor ={this.state.cookies[2].flavor} qty={this.state} />
        <button onClick={this.addCookie}>Add Cookie</button>
      </div>
    );
  }
}

export default App;
