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
  )