// imports
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { userLogIns } from './userLogIns';
import { useNavigate } from 'react-router-dom';

// LogIn Function
const Login = () => {
    // State Hooks for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // use Navigate initialization 
    const navigate = useNavigate(); 

    // Handler for logIn
    const handleLogin = (e) => {
        e.preventDefault();
        
        // Validate user using .find method on userLogIns array imported from userLogIns.js 
        const user = userLogIns.find(u => u.username === username && u.password === password);

        // Validate the user
        if (user) {
            localStorage.setItem("userRole", user.role);
            console.log("Logged in as", user.role);

            // Redirect based on user role
            if (user.role.toLowerCase() === 'admin') {
                navigate('/AdminDashboard');
                
            } else {
                navigate('/MainMenu');
            }
        } else {
            console.log("Invalid login credentials");
            // You can display a notification or an alert here to let the user know about the invalid credentials
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="4">
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
