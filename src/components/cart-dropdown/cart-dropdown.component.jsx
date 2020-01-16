import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import  { selectCartItems }  from "../../redux/cart/cart-selectors" ;



const CartDropDown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                { 
                cartItems.map(cartItem => (
                 <CartItem  key ={cartItem.id}  item ={cartItem} />))
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({ //mapStateToProps will return the palin object containing the data from the store that the component needs
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);  //connect allows the component to connect to the store