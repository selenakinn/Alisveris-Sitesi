import Header from './components/Header';
import Footer from './components/Footer';
import './components/Layout.css';
import Products from './components/Products';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('electronics');
  function handleCatChange() {}
  return (
    <>
      <Header />
      <div className="content-section">
        {}
        <SideBar category={category} handleCatChange={handleCatChange} />
        <Products category={category} />
      </div>
      <Footer />
    </>
  );
}

export default App;
