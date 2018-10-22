import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";

class App extends Component {
  loadCart = items => {
    API.loadCart([{name: "pizza crust"},{name: "pickles"}])
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.loadCart()} children = {"load cart"} />
        </header>
      </div>
    );
  }
}

export default App;
