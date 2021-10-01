import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart, name } = props
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h2>Item Order:{props.cart.length}</h2>
            <h1>Total:{total}</h1>

        </div>
    );
};

export default Cart;