import React from "react"
import ReactDOM from "react-dom/client"
import mockData from "../mockData/data"

const Product = ({ title, price, quantity}) => {
  return React.createElement("div", {
    className: "product-details",
    children: [
      React.createElement("h3", null, title),
      React.createElement("p", {className: "price"}, `$${price}`),
      React.createElement("p", {className: "quantity"}, `${quantity} left in stock`),
      React.createElement("div", {
        className: "actions product-actions",
        children: [
          React.createElement("button", {className: "add-to-cart"}, "Add to Cart"),
          React.createElement("button", {className: "edit"}, "Edit"),
        ]

      }),
      React.createElement("button", {
        className: "delete-button",
        children: [
          React.createElement("span", null, "X")
        ]
      })
    ]
  })
}

const ProductList = ({ products }) => {
  return React.createElement("ul", {
    className: "product-list",
    children: products.map(({title, price, quantity}, index) => 
      React.createElement("li", {
        className: "product",
        children: [
          React.createElement(Product, {
            key: index,
            title,
            price, 
            quantity
          })
        ]
      })
    )
  })
}

const App = () => {
  return React.createElement("div", {
    id: "app",
    children: [
      React.createElement("header", {
        children: [
          React.createElement("h1", null,  "The Shop!")
        ]
      }, null),
      React.createElement("main", {
        children: [
          React.createElement(ProductList, { products: mockData })
        ]
      })
    ]
  })
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));