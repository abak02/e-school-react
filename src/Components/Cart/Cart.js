import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        let price = Number(element.price);
        total=total+price;
        
    }
    return (
        <div>
            <div className="container">
                <div className="">
                    <h4>Cart</h4>
                    <p>Selected Course : {cart.length}</p>
                    <p>Total Cost : {Number(total.toFixed(2))}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;