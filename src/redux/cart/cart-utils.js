//cart Utils is a function that is a single file and can be used in a multiple locations for add item

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
                 ? {...cartItem , quantity : cartItem.quantity + 1 } 
                 : cartItem//return the new array of the same object with the increased quantity
        )
    }
    //if no existing cartItem 
    return [...cartItems , {...cartItemToAdd , quantity: 1}];
};
