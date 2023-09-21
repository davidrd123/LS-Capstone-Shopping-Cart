import axios from 'axios';

const baseUrl = '/api/products'

const getAll = async () => {
  // console.log(`Fetching products from ${baseUrl}`)
  const response = await axios.get(baseUrl);
  // console.log(`[productService] getAll: ${JSON.stringify(response.data)}`);
  return response.data;
}

const createProduct = async (product) => {
  const response = await axios.post(baseUrl, product);
  return response.data;
}

const updateProduct = async (product) => {
  const response = await axios.put(`${baseUrl}/${product.id}`, product);
  return response.data;
}

const deleteProduct = async (productId) => {
  console.log(`productService | deleteProduct | productId: ${productId}`);
  const response = await axios.delete(`${baseUrl}/${productId}`);
  return response.data;
}

export default {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
};