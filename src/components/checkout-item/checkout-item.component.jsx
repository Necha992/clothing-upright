import React from 'react';

import {connect} from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import {addItem} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'


const CheckoutItem = ({cartItem : {name, price, imageUrl, quantity}, addItem }) => {

    
    return (
    <div className='checkout-item'>
        <div 
            className='image-container'
        >
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

// export default connect(null, mapDispatchToProps)(CheckoutItem);
export default CheckoutItem;