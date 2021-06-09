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

