// Food.Js
// Imports
import React from 'react';
import { useOrder } from '../OrderContext'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom'; 
import '../../stylesheets/MenuItemsStyle.css'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export const Food = () => {
  // Extracting functions and state from OrderContext
  const { addToOrder, menuItems, deleteMenuItem } = useOrder();

  // Handler for adding a hot drink to the order
  const handleAddToOrder = (food) => {
    addToOrder(food, 'food'); 
    toast.success("Item Added To Order"); 
  };

  // Function to handle deleting a food item from the menu
  const handleDeleteItemFromMenu = (id) => {
    deleteMenuItem(id, 'food'); 
    toast.success("Item Removed from Menu"); 
  };

  // Check if the logged-in user is an admin
  const isAdmin = localStorage.getItem("userRole")?.toLowerCase() === 'admin';

  return (
    <div className="menu-container">
      <h1 className="centered-text">Food</h1> 
      <div className="menu-items-container">
        {/* Iterate over the food items and create an element for each */}
        {menuItems.food.map(food => (
          <div key={food.id} className="menu-item">
            <img src={food.img} alt={food.name} /> 
            <h2>{food.name}</h2> 
            <p>Price: €{food.price.toFixed(2)}</p> 
            {/* Add to Order button */}
            <button className="btn btn-secondary" onClick={() => handleAddToOrder(food)}>Add to Order</button>
            {/* Delete from Menu button, shown only to admins */}
            {isAdmin && (
              <button className="btn btn-danger" onClick={() => handleDeleteItemFromMenu(food.id)}>Delete from Menu</button>
            )}
          </div>
        ))}
      </div>
      {/* Link to the checkout page */}
      <Link to="/checkout" className="btn btn-secondary checkout-btn">Go to Checkout</Link>
      <Link to="/RestaurantMenu" className="btn btn-secondary checkout-btn">Go to Menu</Link>
    </div>
  );
};

export default Food;
