// <!--Class  component comes up with some in built function that
// we can use and also helps to defines the state in that component!-->


import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from './components/header/header.component';
import SignInAndSignUpComponent from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import './App.css';
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {  //Open Subscription or open messaging to get the currently signed in user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  };
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser ={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shoppage" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpComponent} />

        </Switch>

      </div>
    )
  }
}

export default App;

