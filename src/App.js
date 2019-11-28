// <!--Class  component comes up with some in built function that
// we can use and also helps to defines the state in that component!-->

import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage.component";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}

export default App;

