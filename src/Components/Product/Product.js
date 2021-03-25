import React from 'react';
import './Product.css'

const Product = (props) => {
  return (
    <div className="product">
      <h4>{props.product.coursename}</h4>
      <h5>{props.product.price}</h5>
      <button className="enroll-button" onClick={() =>props.handleAddProduct(props.product)}>Enroll Now</button>
    </div>
  );
};

export default Product;