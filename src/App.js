// <!--Class  component comes up with some in built function that
// we can use and also helps to defines the state in that component!-->


import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shoppage" component={ShopPage} />
        </Switch>

      </div>
    )
  }
}

export default App;

