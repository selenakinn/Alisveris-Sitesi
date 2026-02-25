import react, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';

export default function SideBar({ category, handleCatChange }) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <>
      <div className="side-container">
        <h2>Categories</h2>
        <CategoryList categories={categories} />
      </div>
    </>
  );
}
