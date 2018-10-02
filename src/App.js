import React, { Component } from 'react';

import CheckoutContent from './containers/CheckoutContent/CheckoutContent';
import CheckoutCart from './containers/CheckoutCart/CheckoutCart';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <CheckoutContent/>
          <CheckoutCart/>
        </div>
      </div>
    );
  }
}

export default App;
