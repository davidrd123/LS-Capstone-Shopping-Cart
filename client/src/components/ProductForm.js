import React, { useState } from 'react';

const ProductForm = ({ formType, initialValues = { title: '', price: '', quantity: '' }, submitText, onSubmit, onCancel }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === 'edit' && !values.id) {
      console.error('You need to pass an id for editing');
      return;
    }
    
    console.log(`[ProductForm] handleSubmit: ${JSON.stringify(values)}`);
    onSubmit(values);
  }

  const handleCancel = () => {
    setValues(initialValues);
    if (typeof onCancel === 'function') {
      onCancel();
    } else {
      console.error('You need to define onCancel as a function');
    }
  }

  return (
    <>
    <h3>{submitText} Product</h3>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor='product-name'>Product Name</label>
        <input
          type='text'
          id='product-name'
          name='title'
          onChange={handleChange}
          value={values.title}
          required={true}
        />
      </div>
      <div className="input-group">
        <label htmlFor='product-price'>Product Price</label>
        <input
          type='number'
          id='product-price'
          name='price'
          onChange={handleChange}
          value={values.price}
          required={true}
        />
      </div>
      <div className="input-group">
        <label htmlFor='product-quantity'>Product Quantity</label>
        <input
          type='number'
          id='product-quantity'
          name='quantity'
          onChange={handleChange}
          value={values.quantity}
          min={0}
          required={true}
        />
      </div>
      <div className='actions form-actions'></div>
      <button type='submit'>{submitText}</button>
      <button type='button' onClick={handleCancel}>Cancel</button>
    </form>
    </>
  )
}

export default ProductForm;