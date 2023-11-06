// HotDrinks.js
// Imports
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useOrder } from '../OrderContext';
import { Link } from 'react-router-dom';
import '../../stylesheets/MenuItemsStyle.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HotDrinks = () => {
  // Extracting functions and state from OrderContext
  const { addToOrder, menuItems, deleteMenuItem, addMenuItem } = useOrder();

  // State for new menu item form
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    price: ''
  });

  // Checking if the user is an admin for conditional rendering of the delete button
  const isAdmin = localStorage.getItem("userRole")?.toLowerCase() === 'admin';

  // Handler for adding a drink to the order
  const handleAddToOrder = (drink) => {
    addToOrder(drink, 'hotDrinks');
    toast.success("Item Added To Order");
  };

  // Handler for deleting a drink item from the menu
  const handleDeleteItemFromMenu = (id) => {
    deleteMenuItem(id, 'hotDrinks');
    toast.success("Item Removed from Menu");
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Handle form submission to add a new menu item
  const handleSubmit = (e) => {
    e.preventDefault();
    addMenuItem({ ...newItem, price: parseFloat(newItem.price) }, 'hotDrinks');
    toast.success("New Item Added to Menu");
    setNewItem({ id: '', name: '', price: '' });
  }; 

  return (
    <div className="menu-container">
      <h1 className="centered-text">Hot Drinks</h1>
      <div className="menu-items-container">
        {/* Map through each hot drink item and display its details. */}
        {menuItems.hotDrinks.map(drink => (
          <div key={drink.id} className="menu-item">
            <img src={drink.img || 'default-image-url'} alt={drink.name} />
            <h2>{drink.name}</h2>
            <p>Price: €{drink.price.toFixed(2)}</p>
            <button className="btn btn-secondary" onClick={() => handleAddToOrder(drink)}>Add to Order</button>
            {/* Delete from Menu button, shown only to admins */}
            {isAdmin && (
              <button className="btn btn-danger" onClick={() => handleDeleteItemFromMenu(drink.id)}>Delete from Menu</button>
            )}
          </div>
        ))}
      </div>
      {/* Link to the checkout page & main Menu */}
      <Link to="/checkout" className="btn btn-secondary checkout-btn">Go to Checkout</Link>
      <Link to="/RestaurantMenu" className="btn btn-secondary checkout-btn">Go to Menu</Link>

      {/* Admin form for adding new items */}
      {isAdmin && (
        <form onSubmit={handleSubmit}>
          {/* Form fields for item ID, name, and price */}
          <input
            type="text"
            name="id"
            value={newItem.id}
            onChange={handleInputChange}
            placeholder="ID"
            required
          />
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="number" 
            name="price"
            value={newItem.price}
            onChange={handleInputChange}
            placeholder="Price"
            required
          />
          <button type="submit" className="btn btn-primary">Add Hot Drink</button>
        </form>
      )}
    </div>
  );
};

export default HotDrinks;
