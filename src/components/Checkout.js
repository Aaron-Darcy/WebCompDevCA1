// Checkout.js
// Imports 
import React from 'react';
import { useOrder } from './OrderContext';
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';
import "../stylesheets/CheckoutStyle.css"; 

// Checkout component for displaying the user's order and total price
export const Checkout = () => {
  // order and removeFromOrder function from  Order Context
  const { order, removeFromOrder } = useOrder(); 

  // Calculate the total price by iterating over the order items
  const totalPrice = order.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    // container for the checkout page
    <div className="checkout-container">
      <h1 className="checkout-title">Your Order</h1>
      <ul className="order-list">
        {/* Map over the order items and display them as list items */}
        {order.map(item => (
          <li key={item.id} className="order-item">
            {/* Item image */}
            <img src={item.img} alt={item.name} className="order-item-img" />
            {/* Item name */}
            <h2 className="order-item-name">{item.name}</h2>
            {/* Item quantity */}
            <p className="order-item-qty">Quantity: {item.qty}</p>
            {/* Price per item */}
            <p className="order-item-price">Price per item: €{item.price.toFixed(2)}</p>
            {/* Remove item button */}
            <Button variant="danger" onClick={() => removeFromOrder(item)}>Remove Item</Button>
          </li>
        ))}
      </ul>
      {/* Display the total price of the order */}
      <h2 className="total-price">Total Price: €{totalPrice.toFixed(2)}</h2>

      {/* Link back to the main menu */}
      <Link to="/">
        <Button variant="secondary" className="back-btn"> Back to Main Menu</Button>
      </Link>
    </div>
  );
}

export default Checkout;
