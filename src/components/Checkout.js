import React from 'react';
import { useOrder } from './OrderContext';

export const Checkout = () => {
  const { order, removeFromOrder } = useOrder();

  // Calculate the total price
  const totalPrice = order.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h1>Your Order</h1>
      <ul>
        {order.map(item => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} style={{ width: '100px' }} />
            <h2>{item.name}</h2>
            <p>Quantity: {item.qty}</p>
            <p>Price per item: ${item.price.toFixed(2)}</p>
            <button onClick={() => removeFromOrder(item)}>Remove from Order</button>
          </li>
        ))}
      </ul>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default Checkout;
