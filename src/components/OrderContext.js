// OrderContext.js
// Imports
import React, { createContext, useContext, useState } from 'react';
import { coldDrinkItems, hotDrinkItems, foodItems } from '../data/MenuItemData'; 

// Creating a context for the order system
const OrderContext = createContext(); 

// Exporting hook for access to the context
export const useOrder = () => useContext(OrderContext); 

export const OrderProvider = ({ children }) => {
  // State to keep track of items in the order
  const [order, setOrder] = useState([]); 

  // State to keep track of available menu items
  const [menuItems, setMenuItems] = useState({
    coldDrinks: coldDrinkItems,
    hotDrinks: hotDrinkItems,
    food: foodItems
  });

  // Function to add an item to the order
  const addToOrder = (item) => {
    const existingItem = order.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      // If item already exists in order, increment quantity by 1
      setOrder(prevOrder =>
        prevOrder.map(orderItem =>
          orderItem.id === item.id ? { ...orderItem, qty: orderItem.qty + 1 } : orderItem
        )
      );
    } else {
      // If item is new add to order with a quantity of 1
      setOrder(prevOrder => [...prevOrder, { ...item, qty: 1 }]);
    }
  };

  // Function to remove an item from the order
  const removeFromOrder = (itemId) => {
    setOrder(prevOrder => prevOrder.filter(orderItem => orderItem.id !== itemId));
  };

  // Function to delete a menu item from the menu items state
  const deleteMenuItem = (itemId, category) => {
    setMenuItems(prevItems => ({
      ...prevItems,
      // Remove the item from the specific category
      [category]: prevItems[category].filter(item => item.id !== itemId) 
    }));
  };

  // Providing the context to its children, which includes functions and state
  return (
    <OrderContext.Provider value={{
      order,
      addToOrder,
      removeFromOrder,
      menuItems,
      deleteMenuItem
    }}>
      {children}
    </OrderContext.Provider>
  );
};
