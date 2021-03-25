import React from 'react';
import data from '../../data/data.json'
import {useState,useEffect} from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
  const [cart,setCurt]= useState([]);
  const [products,setProducts] = useState([]);
  useEffect(() =>{
    setProducts(data);
  },[])

  const handleAddProduct = (product) => {
    const newCart = [...cart,product];
    setCurt(newCart);
  }

  let total = 0;
  for(let i = 0; i < cart.length; i++){
    const product =cart[i];
    total = total + product.price;

  }

  
  return (
    <div className="shop-container">
      <div className="product-container">
      
        {
          products.map(prod => <Product product={prod} handleAddProduct={handleAddProduct}></Product>)
        }
      
      </div>
      <div className="cart-container">
        <h3>Order Summary </h3>
        <h4>Items Ordered : {cart.length}</h4>
        <h4>Total Price : {total}</h4>
      </div>
      
    </div>
  );
};

export default Shop;