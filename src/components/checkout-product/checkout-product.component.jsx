import React from 'react';
import './checkout-product.styles.css';

const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <img
        className={'checkoutProduct__image'}
        src={'https://m.media-amazon.com/images/I/61fd2oCrvyL._AC_UY218_.jpg'}
        alt={'Macbook M2 Pro'}
      />
      <div className="checkoutProduct__info">
        <p className={'checkoutProduct__title'}>Macbook M2 Pro</p>
        <p className={'checkoutProduct__price'}>
          <strong>
            <small>$</small>1299.99
          </strong>
        </p>
        <div className={'checkoutProduct__rating'}>⭐⭐⭐⭐⭐</div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
