export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCurrentItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)


    if(existingCurrentItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}

export const removeItemToCart = (cartItems, cartItemToRemove) =>{

    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ? 
        {
            ...cartItem, quantity: cartItem.quantity - 1
        }
        : cartItem
    )

}



