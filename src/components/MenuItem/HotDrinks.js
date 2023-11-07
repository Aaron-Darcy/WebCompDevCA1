// HotDrinks.js
// Imports
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMenuOrder } from '../MenuOrderManager';
import { Link } from 'react-router-dom';
import '../../stylesheets/MenuItemsStyle.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminItemForm from '../AdminItemForm';


export const HotDrinks = () => {
  // Extracting functions and state from OrderContext
  const { addToOrder, menuItems, deleteMenuItem } = useMenuOrder();

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

  return (
    // Menu Container
    <Container fluid="lg" className="menu-container">
      <h1 className="centered-text">Hot Drinks</h1>
      
      {/* Grid layout for HotDrink Drinks cards */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {menuItems.hotDrinks.map(drink => (
          // Individual column & card  for each drink item
          <Col key={drink.id}>
            <Card className="h-100">
              {/* Image for the drink */}
              <Card.Img variant="top" src={drink.img || 'default-image-url'} alt={drink.name} className="card-img-top" />
              <Card.Body>
                {/* Drink name and price display */}
                <Card.Title>{drink.name}</Card.Title>
                <Card.Text>Price: €{drink.price.toFixed(2)}</Card.Text>
                {/* Buttons for adding to order and (if admin) deleting from menu */}
                <div className="d-grid gap-2">
                  <Button variant="secondary" size="sm" onClick={() => handleAddToOrder(drink)}>Add to Order</Button>
                  {isAdmin && (
                    <Button variant="danger" size="sm" onClick={() => handleDeleteItemFromMenu(drink.id)}>Delete from Menu</Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* button Link to the checkout page & main Menu */}
      <Link to="/checkout" className="btn btn-secondary checkout-btn">Go to Checkout</Link>
      <Link to="/RestaurantMenu" className="btn btn-secondary checkout-btn">Go to Menu</Link>

      {/* If Admin display AdminItemForm.js Component */}
      {isAdmin && <AdminItemForm category="hotDrinks" />}
    </Container>
  );
};

export default HotDrinks;