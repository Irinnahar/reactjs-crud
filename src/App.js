import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Crud from './Crud/Crud';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> React Todo App</h1>
        </header>        
        <Crud/>
      </div>
    );
  }
}

export default App;
