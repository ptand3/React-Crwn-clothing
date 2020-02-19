// <!--Class  component comes up with some in built function that
// we can use and also helps to defines the state in that component!-->


import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from './components/header/header.component';
import CheckOutPage  from "./pages/checkoutpage/checkoutpage.component" ;
import SignInAndSignUpComponent from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import './App.css';
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
//import { selectCurrentUser }  from "./redux/user/user-selectors" ;
import { auth ,createUserProfileDocument } from "./firebase/firebase.utils";


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {  //Open Subscription or open messaging to get the currently signed in user
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  //user authenticated object with lot of properties

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snaphot => {
          //setting the state of the current user in our app
          setCurrentUser({
            id: snaphot.id,
            ...snaphot.data()
          });
        });
      }

      setCurrentUser(userAuth);  //when the user is signed out
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shoppage" component={ShopPage} />
          <Route exacct path="/checkoutpage" component={CheckOutPage} />
          <Route exact path="/signin" render = { () => this.props.currentUser ? (<Redirect to ="/"/>) : (<SignInAndSignUpComponent/>) } />

        </Switch>

      </div>
    )
  }
}

const mapStateToProps = ( { user :{currentUser} }) => ({
  currentUser
});


///The functions to dispatch actions to the Reducers
//Each field in the object will become a separate prop for your own component, and the value should normally be a function that dispatches an action when called.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch property dispatches the action object whenver called
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

