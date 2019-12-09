import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import {connect } from "react-redux";

const Header = ({ currentUser }) => (  //recieving the updated user value from the UserReducer
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>

        <div className="options">
            <Link className="option" to="/shoppage">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                    :
                    (<Link className="option" to="/signin">SIGN IN</Link>)
            }
        </div>
    </div>
)

const mapStateToProps = state =>({  //The function is called whenever the store state changes
    user : state.user.currentUser
});

export default connect(mapStateToProps)(Header);  //Connect is a HOC that takes in the component as an arg and another function to connect the React Component to Redux Store