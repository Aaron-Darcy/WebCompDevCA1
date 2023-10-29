import React from 'react';
import { useOrder } from './OrderContext';
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';
import "../stylesheets/CheckoutStyle.css"      

export const Checkout = () => {
  const { order, removeFromOrder } = useOrder();

  // Calculate the total price
  const totalPrice = order.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Your Order</h1>
      <ul className="order-list">
        {order.map(item => (
          <li key={item.id} className="order-item">
            <img src={item.img} alt={item.name} className="order-item-img" />
            <h2 className="order-item-name">{item.name}</h2>
            <p className="order-item-qty">Quantity: {item.qty}</p>
            <p className="order-item-price">Price per item: €{item.price.toFixed(2)}</p>
            <Button variant="danger" onClick={() => removeFromOrder(item)}>Remove Item</Button>
          </li>
        ))}
      </ul>
      <h2 className="total-price">Total Price: €{totalPrice.toFixed(2)}</h2>

      <Link to="/">
        <Button variant="secondary" className="back-btn"> Back to Main Menu</Button>
      </Link>
    </div>
  );
}

export default Checkout;
