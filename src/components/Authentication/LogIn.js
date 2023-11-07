// LogIn.js
// Imports
import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { userLogIns } from '../../data/userLogIns';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../stylesheets/LogInStyle.css"
import logInLogo from "../../assets/images/LogInLogo.jpeg";

// Login component Function
const Login = () => {
    
    // State for username and password inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    //Hook To Navigate to Different Routes
    const navigate = useNavigate();
  
    // Handler for login submit
    const handleLogin = (e) => {
      e.preventDefault();
      
      // Find user in the userLogIns array
      const user = userLogIns.find(u => u.username === username && u.password === password);
      
      // If user exists, set role in local storage and navigate to menu
      if (user) {
        localStorage.setItem("userRole", user.role);
        navigate('/RestaurantMenu');
      } else {
        // Show error message if login is invalid
        toast.error("Invalid Username or Password, Please Try Again");
      }

      // Reload the page - Page wont load otherwise
      window.location.reload();
    };

    // login form
    return (
        <div className="login-wrapper">
            {/* Logo at the top of the login form */}
            <img src={logInLogo} alt="Login Logo" className="login-logo" />
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="4">
                        {/* Login Form */}
                        <Form onSubmit={handleLogin}>
                            {/* Username input */}
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>

                            {/* Password input */}
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>

                            {/* Login button */}
                            <Button variant="btn btn-success" type="submit" className='log-in-button'>
                                Log in
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
