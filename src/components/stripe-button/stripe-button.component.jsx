import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss'


const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100; // Stripe needs price in cents

    const publishableKey = "pk_test_51J3efVCK178qAfmdBNcdhYko2wegXYec16cuENQKASA6muW9xZ1NWCl1RgewZZHh0rcfF599lCttZi5PDnAMUrAv00LO91v5br";

    const onToken = token => {
        console.log(token);
        alert('Payment went well !');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;