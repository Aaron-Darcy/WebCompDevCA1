// Imports
// MenuOrderManager.js
import React, { createContext, useContext, useState } from 'react';
import { coldDrinkItems, hotDrinkItems, foodItems, defaultImage } from '../data/MenuItemData';

// Creating a context for managing menu orders and items
const MenuOrderContext = createContext();

// Exporting context hook 
export const useMenuOrder = () => useContext(MenuOrderContext);

export const MenuOrderProvider = ({ children }) => {

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

  // Function to remove a quantity of 1 from an item in the order
  const removeFromOrder = (itemId) => {
    setOrder(prevOrder =>
      prevOrder.reduce((newOrder, item) => {
        
        // If the current item matches the item to remove, and it has more than 1 quantity
        if (item.id === itemId && item.qty > 1) {
          // Add the item back with one less in quantity
          newOrder.push({ ...item, qty: item.qty - 1 });
        } else if (item.id !== itemId) {
          // If it's not the item to remove, add it back to the new order array
          newOrder.push(item);
        }
        // If the item only had 1 qty or it's not the item to remove, it's already handled above
        return newOrder;
      }, []) // Start with an empty array to build the new order
    );
  };



  // Function to delete a menu item from the menu items state
  const deleteMenuItem = (itemId, category) => {
    setMenuItems(prevItems => ({
      ...prevItems,
      // Remove the item from the specific category
      [category]: prevItems[category].filter(item => item.id !== itemId)
    }));
  };
  // Function to add a menu item from the menu items state
  const addMenuItem = (newItem, category) => {
    setMenuItems(prevItems => ({
      ...prevItems,
      [category]: [...prevItems[category], { ...newItem, img: defaultImage }]
    }));
  };

  // Providing the context to its children, which includes functions and state
  return (
    <MenuOrderContext.Provider value={{
      order,
      addToOrder,
      removeFromOrder,
      menuItems,
      deleteMenuItem,
      addMenuItem
    }}>
      {children}
    </MenuOrderContext.Provider>
  );
};
