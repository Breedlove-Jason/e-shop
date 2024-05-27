import React from "react";
import "./product.styles.css";

const Product = ({ id, title, price, rating, image }) => {
  return (
    <div className="product">
      <div className="product__info" id={id}>
        <p>{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
