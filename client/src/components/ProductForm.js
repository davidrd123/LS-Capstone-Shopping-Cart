import React from 'react';

const ProductForm = ({ initialValues, submitText, onSubmit, onCancel }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  const handleCancel = () => {
    setValues(initialValues);
    onCancel();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor='product-name'>Product Name</label>
        <input
          type='text'
          id='product-name'
          name='product-name'
          onchange={handleChange}
          value={values.name}
          required={true}
        />
      </div>
      <div className="input-group">
        <label htmlFor='product-price'>Product Price</label>
        <input
          type='number'
          id='product-price'
          name='product-price'
          onchange={handleChange}
          value={values.price}
          required={true}
        />
      </div>
      <div className="input-group">
        <label htmlFor='product-quantity'>Product Quantity</label>
        <input
          type='number'
          id='product-quantity'
          name='product-quantity'
          onchange={handleChange}
          value={values.quantity}
          min={0}
          required={true}
        />
      </div>
      <div className='actions form-actions'></div>
      <button type='submit'>{submitText}</button>
      <button type='button' onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default ProductForm;