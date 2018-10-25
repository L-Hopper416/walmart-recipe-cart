import React, { Component } from 'react';

import API from "./utils/API";


class App extends Component {
  
  loadCart = items => {
    API.loadCart(items)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const fake = [
      {
        url: "https://grocery.walmart.com/ip/Gala-Apples-each/44390953",
        quantity: 2
      }
    ]
    return (
      <div className="App">
          <button onClick={() => this.loadCart(fake)} children = {"load cart"} />
      </div>
    );
  }
}

export default App;
