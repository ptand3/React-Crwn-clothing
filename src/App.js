// <!--Class  component comes up with some in built function that
// we can use and also helps to defines the state in that component!-->


import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import './App.css';


const Hats = () => (
  <div className="hats">
    HATS PAGE
  </div>
)

const Jackets = () => (
  <div className="jackets">
    JACKETS PAGE
  </div>
)


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={Hats} />
          <Route path="/jackets" component={Jackets} />
        </Switch>

      </div>
    )
  }
}

export default App;

