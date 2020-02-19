//cart Utils is a function that is a single file and can be used in a multiple locations for add item

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(    //if there is alraedy an existing cart item
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem//return the new array of the same object with the increased quantity
        )
    }
    //if no existing cartItem 
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

//This functionality will remove the items from the checkout  if the qauntity is 1 and if not then it will decrease the quantity 
//from the existing cartitem

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id //if the cart item to remove alraedy exists
    );

    //apply the remove item functionality
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem =>
            cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}

