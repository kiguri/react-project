import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HbMAHFduAugDsuoQ9e4JplFhP4ojr8JYnW6S4kghDeujQ93HTTYKAy6ssaMTlEvN0sJlXZYjH3fY1r0NvvFcHU700DqiWHxzh';
    const onToken = token => {
        alert("Payment Successful")
    }
    return (
        <StripeCheckout
            label="Pay now"
            name="Clothing shop"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}
export default StripeCheckoutButton;