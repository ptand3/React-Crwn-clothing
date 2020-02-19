//Actions creaters that are fubctions to define the actions to be dispatched to the reducers

import CartActionTypes from "./cart-types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({  //function to remove the items at checkout or decrease the item
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItem = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
