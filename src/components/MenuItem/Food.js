// Food.js Component
//imports
import React from 'react';
import { foodItems } from '../../data/MenuItemData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useOrder } from '../OrderContext';
import { Link } from 'react-router-dom';
import '../../stylesheets/MenuItemsStyle.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Food component to display list of food items.
export const Food = () => {
  // custom hook to get the addToOrder function.
  const { addToOrder } = useOrder();
  
  // Toastify Notification
  const handleAddToOrder = (food) => {
    addToOrder(food);
    toast.success("Item Added To Order"); 
  };

  return (
    <div className="menu-container">
      <h1 className="centered-text">Food</h1>
      <div className="menu-items-container">
        {/* Map through each food item and display its details. */}
        {foodItems.map(food => (
          <div key={food.id} className="menu-item">
            <img src={food.img} alt={food.name} />
            <h2>{food.name}</h2>
            <p>Price: €{food.price.toFixed(2)}</p>
            <button className="btn btn-secondary" onClick={() => handleAddToOrder(food)}>Add to Order</button>
          </div>
        ))}
      </div>
      {/* checkout page */}
      <Link to="/checkout" className="btn btn-secondary checkout-btn">Go to Checkout</Link>
    </div>
  );
}

export default Food;
