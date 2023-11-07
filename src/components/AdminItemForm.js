// AdminItemForm.js
// Imports
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useMenuOrder } from './MenuOrderManager';
import { toast } from 'react-toastify';

const AdminItemForm = ({ category }) => {
    const { addMenuItem, menuItems } = useMenuOrder();

    // State for new menu item form
    const [newItem, setNewItem] = useState({
        id: '',
        name: '',
        price: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'id') {
            setNewItem({ ...newItem, [name]: parseInt(value, 10) });
        } else {
            setNewItem({ ...newItem, [name]: value });
        }
    };

    // Handle form submission to add a new menu item
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if ID is an integer and unique
        const doesIdExist = Object.keys(menuItems).some(
            (category) => menuItems[category].find((item) => item.id === newItem.id)
        );

        if (doesIdExist) {
            toast.error("An item with this ID already exists.");
            return;
        }

        addMenuItem({ ...newItem, price: parseFloat(newItem.price) }, category);
        toast.success("New Item Added to Menu");
        // Reset the form
        setNewItem({ id: '', name: '', price: '' });
    };

    return (
        <div>
            <h1 className="text-center">Admin Menu</h1>
            <Card className="mb-4">
                <Card.Header as="h5">Add New Item to Menu</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formItemId">
                            <Form.Label>ID (Unique Integer)</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                name="id"
                                value={newItem.id.toString()}
                                onChange={handleInputChange}
                                placeholder="Enter unique integer ID"
                                required
                            />
                        </Form.Group>
                        {/* Form group for item name */}
                        <Form.Group className="mb-3" controlId="formItemName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newItem.name}
                                onChange={handleInputChange}
                                placeholder="Enter item name"
                                required
                            />
                        </Form.Group>
                        {/* Form group for item price */}
                        <Form.Group className="mb-3" controlId="formItemPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                step="0.01"
                                name="price"
                                value={newItem.price}
                                onChange={handleInputChange}
                                placeholder="Enter item price"
                                required
                            />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg" type="submit">
                                Add Item to Menu
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AdminItemForm;
