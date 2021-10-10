import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ji4aEKwKWxlNwUoGw5RzkCB6R3kitErFtY0J5W4FocKO0PbTwEeq8BLxpBqagi1Aye0ZrGKpZYNlQuzmF9USUzH00jPjvu70t';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }
    return (
        <StripeCheckout
            label='Pay now'
            now='CRWN Clothin Ldt.'
            billingAddress
            shippingAdress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;