// Checkout.js
// Imports 
import React from 'react';
import { useMenuOrder } from './MenuOrderManager';
import Button from 'react-bootstrap/Button'; 
import { Link } from 'react-router-dom';
import "../stylesheets/CheckoutStyle.css"; 

export const Checkout = () => {
  // Extracting order and removeFromOrder function from the Order Context
  const { order, removeFromOrder } = useMenuOrder(); 

  // Calculate the total price by iterating over the order items
  const totalPrice = order.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    // Main container for the checkout page
    <div className="container my-4">
      <h1 className="checkout-title text-center">Your Order</h1>
      <ul className="list-unstyled">
        {/* Map over the order items and display them as list items with Bootstrap classes for layout */}
        {order.map(item => (
          <li key={item.id} className="order-item d-flex flex-column flex-md-row align-items-center mb-3">
            <img src={item.img} alt={item.name} className="order-item-img img-fluid img-thumbnail mr-md-3" />
            <div className="flex-grow-1">
              <h2 className="order-item-name h5">{item.name}</h2>
              <p className="order-item-qty">Quantity: {item.qty}</p>
              <p className="order-item-price">Price per item: €{item.price.toFixed(2)}</p>
            </div>
            <Button variant="danger" onClick={() => removeFromOrder(item.id)}>Remove Item</Button>
          </li>
        ))}
      </ul>
      <h2 className="total-price h4 text-center">Total Price: €{totalPrice.toFixed(2)}</h2>

      {/* Link back to the main menu */}
      <div className="d-flex justify-content-center">
        <Link to="/">
          <Button variant="secondary" className="back-btn">Back to Main Menu</Button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
