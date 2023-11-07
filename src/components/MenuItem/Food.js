// Food.js
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


export const Food = () => {
  // Extracting functions and state from OrderContext
  const { addToOrder, menuItems, deleteMenuItem } = useMenuOrder();

  // Checking if the user is an admin for conditional rendering of the delete button
  const isAdmin = localStorage.getItem("userRole")?.toLowerCase() === 'admin';

  // Handler for adding an item to the order
  const handleAddToOrder = (item) => {
    addToOrder(item, 'food');
    toast.success("Item Added To Order");
  };

  // Handler for deleting a food item from the menu
  const handleDeleteItemFromMenu = (id) => {
    deleteMenuItem(id, 'food');
    toast.success("Item Removed from Menu");
  };

  return (
    //Menu Container
    <Container fluid="lg" className="menu-container">
      <h1 className="centered-text">Food</h1>
      
      {/* Grid layout for Food cards */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {menuItems.food.map(item => (
          // Individual column & card  for each Food item
          <Col key={item.id}>
            <Card className="h-100">
              {/* Image for the Food */}
              <Card.Img variant="top" src={item.img || 'default-image-url'} alt={item.name} className="card-img-top" />
              <Card.Body>
                {/* Drink name and price display */}
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: €{item.price.toFixed(2)}</Card.Text>
                {/* Buttons for adding to order and (if admin) deleting from menu */}
                <div className="d-grid gap-2">
                  <Button variant="secondary" size="sm" onClick={() => handleAddToOrder(item)}>Add to Order</Button>
                  {isAdmin && (
                    <Button variant="danger" size="sm" onClick={() => handleDeleteItemFromMenu(item.id)}>Delete from Menu</Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Link to the checkout page & main Menu */}
      <Link to="/checkout" className="btn btn-secondary checkout-btn">Go to Checkout</Link>
      <Link to="/RestaurantMenu" className="btn btn-secondary checkout-btn">Go to Menu</Link>

      {/* If Admin display AdminItemForm.js Component */}
      {isAdmin && <AdminItemForm category="food" />}
    </Container>
  );
};

export default Food;