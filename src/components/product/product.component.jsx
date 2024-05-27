import React from "react";
import "./product.styles.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          10 inch Tablet Android 13 Tablets, 6(2+4) GB + 64GB ROM 512GB Expand,
          Quad-Core Processor, 1280x800 IPS Screen, GPS, WiFi, Dual Camera,
          Bluetooth, 6000mAh Battery{" "}
        </p>
        <p className="product__price">
          <small></small>
          <strong>$30</strong>
        </p>
        <div className="product__rating">⭐⭐⭐⭐</div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/410m0InPF4L._MCnd_AC_.jpg"
        alt="tablet"
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
