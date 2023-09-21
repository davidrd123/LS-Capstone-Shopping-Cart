import axios from 'axios';

const baseUrl = 'http://localhost:5001/api'

const getCartItems = async () => {
  const response = await axios.get(`${baseUrl}/cart`);
  return response.data;
}

const addToCart = async (productId) => {
  console.log(`product: ${productId}`)
  const response = await axios.post(`${baseUrl}/add-to-cart`, { productId });
  return response.data;
}

const checkout = async () => {
  const response = await axios.post(`${baseUrl}/checkout`);
  return response.data;
}

export default {
  getCartItems,
  addToCart,
  checkout,
};