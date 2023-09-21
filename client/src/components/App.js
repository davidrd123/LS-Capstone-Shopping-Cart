import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import Product from './Product';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import productService from '../services/product';
import cartService from '../services/cart';
import mockData from '../mockData/data';

import '../assets/index.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [addFormVisible, setAddFormVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await productService.getAll();
        // console.log(`App | useEffect | fetchProducts: ${JSON.stringify(products)}`);
        setProducts(products);
      } catch (error) {
        console.error(`Failed to fetch products: ${error.message}`);
      }
    };
    const fetchCartItems = async () => {
      try {
        const cartItems = await cartService.getCartItems();
        // console.log(`App | useEffect | fetchCartItems: ${JSON.stringify(cartItems)}`);
        setCartItems(cartItems);
      } catch (error) {
        console.error(`Failed to fetch cart items: ${error.message}`);
      }
    };

    fetchProducts();
    fetchCartItems();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const { product: updatedProduct, item: newItem } = await cartService.addToCart(productId);
      console.log(`[handleAddToCart] updatedProduct: ${JSON.stringify(updatedProduct)}`);

      if (updatedProduct.error) {
        alert('Not enough stock!');
        return;
      }

      updateProducts(updatedProduct);
      updateCartItems(newItem);

    } catch (error) {
      console.error(`Failed to add item to cart: ${error.message}`);
    }
  }

  // Helper function to update products
  const updateProducts = (updatedProduct) => {
    setProducts(prevProducts =>
      prevProducts.map((p) => p.id === updatedProduct.id ? updatedProduct : p)  
    );
  }

  // Helper function to update cart items
  const updateCartItems = (newItem) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.productId === newItem.productId);
      if (existingItem) {
        return prevCartItems.map(item => item.productId === newItem.productId ? newItem : item);
      }
      return [...prevCartItems, newItem];
    });
  }

  const handleAddProduct = async (product) => {
    try {
      const newProduct = await productService.createProduct(product);
      setProducts(prevProducts => [...prevProducts, newProduct]);
      setAddFormVisible(false);
    } catch (error) {
      console.error(`Failed to add product: ${error.message}`);
    }
  }

  const handleUpdateProduct = async (product) => {
    try {
      const updatedProduct = await productService.updateProduct(product);
      setProducts(prevProducts => prevProducts.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    } catch (error) {
      console.error(`Failed to update product: ${error.message}`);
    }
  }

  const handleDeleteProduct = async (productId) => {
    try {
      await productService.deleteProduct(productId);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    } catch (error) {
      console.error(`Failed to delete product: ${error.message}`);
    }
  }

  const handleCheckout = async () => {
    try {
      await cartService.checkout();
      setCartItems([]);
      alert('Thank you for your purchase!');
    } catch (error) {
      console.error(`Failed to checkout: ${error.message}`);
    }
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart cartItems={cartItems} onCheckout={handleCheckout} />
      </header>
      <main>
        <ProductList 
          products={products}
          onDeleteProduct={handleDeleteProduct}
          onAddToCart={handleAddToCart}
          onUpdateProduct={handleUpdateProduct}
        />
      <div className={addFormVisible ? 'add-form visible' : 'add-form'}>
        <p>
          <button 
            className='add-product-button'
            type='button'
            onClick={() => setAddFormVisible(true)}
          >
            Add A Product
          </button>
        </p>
        <ProductForm
          formType='add'
          initialValues={{ title: '', price: '', quantity: '' }}
          submitText='Add'
          onSubmit={handleAddProduct}
          onCancel={() => setAddFormVisible(false)}
        />
        </div>
      </main>
    </div>
  )
}

export default App;