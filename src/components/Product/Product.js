import React from "react";
import ProductItem from "./ProductItem";
import "./Product.css";

const Product = (props) => {
  const ButtonClickHandler = (id) =>{
    const Product = props.productlist.find((product)=>(product.id === id))
    props.onsetData(Product)
  }
  return (
    <div className="product-list">
      {props.productlist.map((item) => (
        <div key={item.id} className="product-item">
          <ProductItem
            title={item.title}
            price={item.price}
            image={item.imageUrl}
          />
          <button className="add-to-cart-button" onClick={()=>ButtonClickHandler(item.id)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
