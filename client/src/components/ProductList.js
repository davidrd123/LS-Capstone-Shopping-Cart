import React from 'react'
import Product from './Product'

const ProductList = ({ products, onDeleteProduct, onAddToCart, onUpdateProduct }) => {
  return (
    <ul className="product-list">
      {products.map(({id, title, price, quantity}) => (
        <li className="product" key={id}>
          <Product 
            id={id}
            title={title} 
            price={price} 
            quantity={quantity} 
            onDeleteProduct={onDeleteProduct} 
            onAddToCart={onAddToCart}
            onUpdateProduct={onUpdateProduct}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductList