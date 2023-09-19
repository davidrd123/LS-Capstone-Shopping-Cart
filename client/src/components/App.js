import React, { useState, useEffect } from 'react';
// import Cart from 'Cart';
import Product from './Product';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import mockData from '../mockData/data';

// import './assets/index.css';

const App = () => {
  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
      </header>
      <main>
        <ProductList products={mockData} />
      </main>
    </div>
  )
}

export default App;