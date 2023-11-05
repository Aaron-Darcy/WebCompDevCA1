// HotDrinks.JS 
// Imports
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useOrder } from '../OrderContext'; 
import { Link } from 'react-router-dom';
import '../../stylesheets/MenuItemsStyle.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HotDrinks = () => {

  // Extracting functions and state from OrderContext
  const { addToOrder, menuItems, deleteMenuItem } = useOrder();

  // Handler for adding a hot drink to the order
  const handleAddToOrder = (drink) => {
    addToOrder(drink, 'hotDrinks'); 
    toast.success("Item Added To Order");
  };

  // Handler for deleting a hot drink item from the menu
  const handleDeleteItemFromMenu = (id) => {
    deleteMenuItem(id, 'hotDrinks'); 
    toast.success("Item Removed from Menu");
  };

  // Checking if the user is an admin for conditional rendering of the delete button
  const isAdmin = localStorage.getItem("userRole")?.toLowerCase() === 'admin';

  return (
    <div className="menu-container">
      <h1 className="centered-text">Hot Drinks</h1>
      <div className="menu-items-container">
        {/* Mapping through each hot drink and rendering its card */}
        {menuItems.hotDrinks.map(drink => (
          <div key={drink.id} className="menu-item">
            <img src={drink.img} alt={drink.name} />
            <h2>{drink.name}</h2>
            <p>Price: €{drink.price.toFixed(2)}</p>
            <button className="btn btn-secondary" onClick={() => handleAddToOrder(drink)}>Add to Order</button>
            {/* Admins have the ability to delete items from the menu */}
            {isAdmin && (
              <button className="btn btn-danger" onClick={() => handleDeleteItemFromMenu(drink.id)}>Delete from Menu</button>
            )}
          </div>
        ))}
      </div>
      {/* Link to navigate to the checkout page */}
      <Link to="/checkout" className="btn btn-secondary checkout-btn">Go to Checkout</Link>
      <Link to="/RestaurantMenu" className="btn btn-secondary checkout-btn">Go to Menu</Link>
    </div>
  );
};

export default HotDrinks;
