import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
// import   { selectCurrentUser } from "../../redux/user/user-selectors";
// import { selectCartHidden } from  "../../redux/cart/cart-selectors" ;
// import { createStructuredSelector } from "reselect";


const Header = ({ currentUser, hidden }) => (  //recieving the updated user value from the UserReducer

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
            <CartIcon />
        </div>
        {hidden ? null : <CartDropDown />}  {/* By Default the cart icon is hidden if false cart dropdown will show*/}
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({  //The function is called whenever the store state changes
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);  //Connect is a HOC that takes in the component as an arg and another function to connect the React Component to Redux Store