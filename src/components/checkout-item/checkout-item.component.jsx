import React from 'react';

import {connect} from 'react-redux'

import { addItem, removeItem ,clearItemFromCart } from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'


const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem }) => {

    const {name, price, imageUrl, quantity} = cartItem;
    
    return (
    <div className='checkout-item'>
        <div 
            className='image-container'
        >
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
            <span className="value">{quantity}</span>
            <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
        </span>
        <span className='price'>{quantity * price}</span>
        <div onClick={() => clearItemFromCart(cartItem)} className='remove-button'>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);