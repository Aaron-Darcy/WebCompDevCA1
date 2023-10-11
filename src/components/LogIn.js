// LogIn component which validates username and password or if they are an admin or a customer

//imports
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { userLogIns } from './userLogIns';

//LogIn Function
const Login = () => {

    //State Hooks for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //Handler for logIn
    const handleLogin = (e) => {
        e.preventDefault();
        
        // Validate user using .find method on userLogIns array imported from userLogIns.js 
        const user = userLogIns.find(u => u.username === username && u.password === password);

        //Validate the user
        if (user) {
            localStorage.setItem("userRole", user.role);
            console.log("Logged in as", user.role);
        } else {
            console.log("Invalid login credentials");
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
