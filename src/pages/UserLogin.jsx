import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (email === 'praful@freshspecs.com' && password === 'password') {
      setError('');
      alert('Login successful!');

    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    
    <Container className='loginpage'>
      <Row className="justify-content-md-center mt-5">
        <Col md="4">
          <div className='formlogin'>
          <h3 className="text-center">Login</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button style={{marginTop:"10px"}} variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
