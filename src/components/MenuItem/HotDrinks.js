import React from 'react';
import { hotDrinkItems } from '../../data/MenuItemData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useOrder } from '../OrderContext';
import { Link } from 'react-router-dom';

// The HotDrinks component to display list of hot drink items.
export const HotDrinks = () => {
  // Use the custom hook to get the addToOrder function.
  const { addToOrder } = useOrder();

  return (
    <div>
      <h1>Hot Drinks</h1>
      <ul>
        {/* Map through each hot drink and display its details. */}
        {hotDrinkItems.map(drink => (
          <li key={drink.id}>
            <img src={drink.img} alt={drink.name} style={{ width: '100px' }} />
            <h2>{drink.name}</h2>
            <p>Price: ${drink.price.toFixed(2)}</p>
            {/* Button to add the selected drink to the order. */}
            <button className="btn btn-secondary mr-3" onClick={() => addToOrder(drink)}>Add to Order</button>
          </li>
        ))}
      </ul>
      {/* Link to navigate to the checkout page. */}
      <Link to="/checkout" className="btn btn-secondary mt-3">Go to Checkout</Link>
    </div>
  );
}

export default HotDrinks;
