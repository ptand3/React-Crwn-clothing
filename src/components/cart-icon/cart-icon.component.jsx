import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import {  selectCartItemsCount }  from  "../../redux/cart/cart-selectors" ;
import { createStructuredSelector } from "reselect";


const CartIcon = ({itemCount , dispatch }) => {
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

//Pulling of the state into the component

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// })

export default connect(mapStateToProps)(CartIcon);
