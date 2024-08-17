import React from 'react';
import "./checkout.styles.css";
import CheckoutProduct from "../checkout-product/checkout-product.component";
import Subtotal from "../subtotal/subtotal.component";

const Checkout = () => {
    return (
        <div className={'checkout'}>
            <div className="checkout__left">
                <img className="checkout__ad" src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt="ad"/>
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    <CheckoutProduct />
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal  />
            </div>
        </div>
    );
};

export default Checkout;
