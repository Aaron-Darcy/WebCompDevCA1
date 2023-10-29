import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import "../stylesheets/RestaurantMenuStyle.css"
import sevenup from '../assets/images/7up.png';
import burgerchips from '../assets/images/burgerchips.png';
import tea from '../assets/images/tea.png';

export const RestaurantMenu = () => {
  return (
    <div>

      {/* Logout Button at the top-right */}
      <div className="logout-container">
        <LogoutButton />
      </div>

      {/* Title */}
      <h1 className="centered-text">Main Menu</h1>
      
      {/* Menu items */}
      <div className="menu-items-container">
      
        {/* Cold Drinks Section */}
        <div className="menu-section">
          <div className="menu-image-container">
            <img src={sevenup} alt="Cold Drinks" className="menu-image" />
          </div>
          <Link to="/cold-drinks">
            <button className="btn btn-secondary btn-large">Cold Drinks</button>
          </Link>
        </div>
        
        {/* Food Section */}
        <div className="menu-section">
          <div className="menu-image-container">
            <img src={burgerchips} alt="Food" className="menu-image" />
          </div>
          <Link to="/Food">
            <button className="btn btn-secondary btn-large">Food</button>
          </Link>
        </div>

        {/* Hot Drinks Section */}
        <div className="menu-section">
          <div className="menu-image-container">
            <img src={tea} alt="Hot Drinks" className="menu-image" />
          </div>
          <Link to="/hot-drinks">
            <button className="btn btn-secondary btn-large">Hot Drinks</button>
          </Link>
        </div>
        
      </div>
      
    </div>
  );
}

export default RestaurantMenu;
