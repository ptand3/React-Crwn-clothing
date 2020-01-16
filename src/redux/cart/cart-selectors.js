
/*Selectors are functions that is used to retrieve or fetch the data from the state store. When a redux state 
changes everytime the  component reendering takes  place which is ineffective.To avoid that we use selectors which 
is used to splice the data from the state to have the minimal updated state
*/

import { createSelector } from "reselect";

const selectCart = state => state.cart;  //input selectors dont use createSelector libary from reselect

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems  //we take only the selected cart state property 
); 

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity, 0
    )
);