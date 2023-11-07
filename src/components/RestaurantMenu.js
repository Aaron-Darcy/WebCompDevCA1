// RestaurantMenu.js
// imports
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './Authentication/LogoutButton';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../stylesheets/RestaurantMenuStyle.css"
import burgerchips from '../assets/images/burgerchips.png';
import tea from '../assets/images/tea.png';
import { coldDrinksMenuImage } from '../data/MenuItemData';

export const RestaurantMenu = () => {
  return (
    <Container fluid="lg" className="restaurant-menu">
      {/* Logout Button at the top-right */}
      <Row>
        <Col className="logout-container">
          <LogoutButton />
        </Col>
      </Row>

      {/* Title */}
      <Row>
        <Col>
          <h1 className="centered-text">Main Menu</h1>
        </Col>
      </Row>

      {/* Menu items */}
      <Row xs={1} md={3} className="g-4">
        {/* Cold Drinks Section */}
        <Col>
          <Card className="menu-card">
            <Card.Img variant="top" src={coldDrinksMenuImage} alt="Cold Drinks" />
            <Card.Body>
              <Card.Title>Cold Drinks</Card.Title>
              <Link to="/cold-drinks" className="d-grid">
                <Button className="btn btn-secondary btn-large w-100">View Cold Drinks</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Food Section */}
        <Col>
          <Card className="menu-card">
            <Card.Img variant="top" src={burgerchips} alt="Food" />
            <Card.Body>
              <Card.Title>Food</Card.Title>
              <Link to="/Food" className="d-grid">
                <Button className="btn btn-secondary btn-large w-100">View Food Items</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Hot Drinks Section */}
        <Col>
          <Card className="menu-card">
            <Card.Img variant="top" src={tea} alt="Hot Drinks" />
            <Card.Body>
              <Card.Title>Hot Drinks</Card.Title>
              <Link to="/hot-drinks" className="d-grid">
                <Button className="btn btn-secondary btn-large w-100">View Hot Drinks</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RestaurantMenu;
