import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';


import './assets/index.css';

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