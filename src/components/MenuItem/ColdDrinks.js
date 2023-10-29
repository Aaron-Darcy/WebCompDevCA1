// Cold Drinks.js component page
// imports
import React from 'react';
import { coldDrinkItems } from '../../data/MenuItemData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useOrder } from '../OrderContext'; 
import { Link } from 'react-router-dom';
import '../../stylesheets/MenuItemsStyle.css'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ColdDrinks component to display list of cold drink items.
export const ColdDrinks = () => {
  // custom hook to get the addToOrder function.
  const { addToOrder } = useOrder();  

  // Toastify Notification
  const handleAddToOrder = (drink) => {
    addToOrder(drink);
    toast.success("Item Added To Order"); 
  };

  return (
    <div className="menu-container">
      <h1 className="centered-text">Cold Drinks</h1>
      <div className="menu-items-container">
        {/* Map through each cold drink and display its details. */}
        {coldDrinkItems.map(drink => (
          <div key={drink.id} className="menu-item">
            <img src={drink.img} alt={drink.name} />
            <h2>{drink.name}</h2>
            <p>Price: €{drink.price.toFixed(2)}</p>
            <button className="btn btn-secondary" onClick={() => handleAddToOrder(drink)}>Add to Order</button>
          </div>
        ))}
      </div>
      {/* checkout page. */}
      <Link to="/checkout" className="btn btn-secondary checkout-btn">Go to Checkout</Link>
    </div>
  );
}

export default ColdDrinks;
