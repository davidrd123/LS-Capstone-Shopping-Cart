import React, { useState } from 'react';
import ProductForm from './ProductForm';

const Product = ({ id, title, price, quantity, onDeleteProduct, onAddToCart, onUpdateProduct }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleAddToCart = () => onAddToCart(id);
  const handleDeleteProduct = () => onDeleteProduct(id);
  const handleEditProduct = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);
  const handleUpdateProduct = (updatedProduct) => {
    onUpdateProduct(updatedProduct);
    setIsEditing(false);
  }

  return (
    <>
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity"><span className={`${quantity <= 0 ? 'quantity-none-left' : ''}`}>{quantity}</span> left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button className="edit" onClick={handleEditProduct}>Edit</button>
        </div>
        <button className="delete-button" onClick={handleDeleteProduct}>
          <span>X</span>
        </button>
      </div>
      {isEditing && (
        <div className="edit-form">
          <ProductForm
            formType='edit'
            initialValues={{ id, title, price, quantity }}
            submitText='Update'
            onSubmit={handleUpdateProduct}
            onCancel={handleCancelEdit}
          />
        </div>
      )}
    </>
  )
}

export default Product