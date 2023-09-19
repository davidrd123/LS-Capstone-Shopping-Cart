import React from "react"
import ReactDOM from "react-dom/client"
import mockData from "../mockData/data"

const Product = ({ title, price, quantity}) => {
  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <button className="edit">Edit</button>
      </div>
      <button className="delete-button">
        <span>X</span>
      </button>
    </div>
  )
}

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

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));