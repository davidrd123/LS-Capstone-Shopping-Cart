import React from 'react';

const Cart = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  // console.log(`[Cart] cartItems: ${JSON.stringify(cartItems)}`);
  const handleCheckout = () => onCheckout();

  const rows = cartItems.map((item, index) => (
    <tr key={index}>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>{`$${item.price.toFixed(2)}`}</td>
    </tr>
  ));
  // console.log(`[Cart] rows: ${rows}`);

  return (
    <div className='cart'>
      <h2>Your cart</h2>
      <table className='cart-items'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className='total'>{`Total: $${total.toFixed(2)}`}</td>
          </tr>
        </tfoot>
      </table>
      <div className='checkout-button'>
        <button type='button' onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;