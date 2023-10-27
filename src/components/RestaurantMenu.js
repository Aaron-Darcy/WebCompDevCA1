import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

export const RestaurantMenu = () => {
  return (
    <div>
      <h1>Main Menu</h1>
      <Link to="/cold-drinks">
        <button>Cold Drinks</button>
      </Link>
      <Link to="/Food">
        <button>Food</button>
      </Link>
      <Link to="/hot-drinks">
        <button>Hot Drinks</button>
      </Link>
      <LogoutButton />
    </div>
  );
}

export default RestaurantMenu;
