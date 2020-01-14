import CartActionTypes from "./cart-types";
 import { addItemToCart }  from  "../cart/cart-utils" ;

const INITIAL_STATE = {
    hidden: true  , //Initially the cart is hidden  when the page loads
    cartItems : [] //initially the cart item is empty
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM :
            return {
                ...state ,
                cartItems :  addItemToCart(state.cartItems , action.payload)//new cartitems array is cartitem with loaded items and the payload of that action type
            }
        default:
            return state;
    }
}

export default CartReducer ;


