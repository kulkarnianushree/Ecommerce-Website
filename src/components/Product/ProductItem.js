// src/components/ProductItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = (props) => {
  const navigate = useNavigate();

  const navigateToProductDetails = () => {
    navigate(`/ProductDetails/${props.id}`);
  };

  return (
    <div className="product-card">
      <div>{props.title}</div>
      <img
        className="product-image"
        src={props.image}
        alt={props.title}
        onClick={navigateToProductDetails}
      />
      <div>{props.price}</div>
    </div>
  );
};

export default ProductItem;
