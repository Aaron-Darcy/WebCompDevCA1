import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
}

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    const existingItem = order.find(orderItem => orderItem.id === item.id);

    if (existingItem) {
        // item already exists in the order update its quantity
        setOrder(prevOrder => {
            return prevOrder.map(orderItem => {
                if (orderItem.id === item.id) {
                    return { ...orderItem, qty: orderItem.qty + 1 };
                } else {
                    return orderItem;
                }
            });
        });
    } else {
        // item doesn't exist in the order, add it with a quantity of 1
        setOrder(prevOrder => [...prevOrder, { ...item, qty: 1 }]);
    }
  };

const removeFromOrder = (item) => {
    const existingItem = order.find(orderItem => orderItem.id === item.id);

    if (existingItem) {
        // item's quantity is more than 1, decrease it by 1
        if (existingItem.qty > 1) {
            setOrder(prevOrder => {
                return prevOrder.map(orderItem => {
                    if (orderItem.id === item.id) {
                        return { ...orderItem, qty: orderItem.qty - 1 };
                    } else {
                        return orderItem;
                    }
                });
            });
        } else {
            // item quantity is 1, remove it entirely from the order
            setOrder(prevOrder => prevOrder.filter(orderItem => orderItem.id !== item.id));
        }
    }
};

  return (
    <OrderContext.Provider value={{ order, addToOrder, removeFromOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
