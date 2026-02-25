import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from '../components/ProductList';

export default function Products({ category }) {
 
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);
  return (
    <div className="main-area">
      {/* <h2>{category.toUpperCase()}</h2> */}
      <div className="products-container">
        <ProductList products={products} />
      </div>
    </div>
  );
}
