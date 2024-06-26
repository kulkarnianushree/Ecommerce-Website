import React from 'react';
import './ProductItem.css';

const ProductItem = (props) => {
  return (
    <div className="product-card">
      <div>{props.title}</div>
      <img className="product-image" src={props.image} alt={props.title} />
      <div>{props.price}</div>
    </div>
  );
};

export default ProductItem;
