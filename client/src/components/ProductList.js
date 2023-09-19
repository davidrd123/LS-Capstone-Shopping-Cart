import React from 'react'

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map(({title, price, quantity}, index) => (
        <li className="product" key={index}>
          <Product title={title} price={price} quantity={quantity} />
        </li>
      ))}
    </ul>
  )
}

export default ProductList