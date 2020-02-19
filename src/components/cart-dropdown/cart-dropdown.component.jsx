import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import  { selectCartItems }  from "../../redux/cart/cart-selectors" ;
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom" ;
import { toggleCartHidden  } from "../../redux/cart/cart-actions";

const CartDropDown = ({ cartItems , history , dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { cartItems.length ? //If cart is non empty
                cartItems.map(cartItem => (
                 <CartItem  key ={cartItem.id}  item ={cartItem} />))
                 : 
                 <span className = "empty-message">The Cart is Empty</span>
                }
            </div>
            <CustomButton onClick ={() => {
              history.push("/checkoutpage");
              dispatch(toggleCartHidden()) ;  //By default connect passes dispatch as a second param to the component so we can easily dispatch actions.
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({ //mapStateToProps will return the plain object containing the data from the store that the component needs
    cartItems : selectCartItems
})

/*withRouter is a higher order component that will pass closest route's match, 
current location, and history props to the wrapped component whenever it renders. 
simply it connects component to the router. It gives the user access to history.push thus it can redirect the user*/


export default withRouter(connect(mapStateToProps)(CartDropDown));  //connect allows the component to connect to the store