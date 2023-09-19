import React from 'react'
import Product from './Product'

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map(({id, title, price, quantity}) => (
        <li className="product" key={id}>
          <Product title={title} price={price} quantity={quantity} />
        </li>
      ))}
    </ul>
  )
}

export default ProductList