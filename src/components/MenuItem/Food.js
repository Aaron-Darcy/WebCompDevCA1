import React from 'react';
import { foodItems } from '../../data/MenuItemData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useOrder } from '../OrderContext';
import { Link } from 'react-router-dom';

// The Food component to display list of food items.
export const Food = () => {
  // Use the custom hook to get the addToOrder function.
  const { addToOrder } = useOrder();

  return (
    <div>
      <h1>Food</h1>
      <ul>
        {/* Map through each food item and display its details. */}
        {foodItems.map(food => (
          <li key={food.id}>
            <img src={food.img} alt={food.name} style={{ width: '100px' }} />
            <h2>{food.name}</h2>
            <p>Price: ${food.price.toFixed(2)}</p>
            {/* Button to add the selected food item to the order. */}
            <button className="btn btn-secondary mr-3" onClick={() => addToOrder(food)}>Add to Order</button>
          </li>
        ))}
      </ul>
      {/* Link to navigate to the checkout page. */}
      <Link to="/checkout" className="btn btn-secondary mt-3">Go to Checkout</Link>
    </div>
  );
}

export default Food;
