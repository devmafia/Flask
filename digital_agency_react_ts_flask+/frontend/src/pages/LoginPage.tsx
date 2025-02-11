import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import '../css/LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (email && password) {
      try {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        
        localStorage.setItem('token', response.data.token);

        setEmail('');
        setPassword('');
        setError(null);
        console.log('Logged in successfully');

        // Redirect to another page (e.g., dashboard)
        window.location.href = 'http://localhost:3000/admin';
      } catch (err) {
        setError('Invalid credentials');
        console.error(err);
      }
    } else {
      setError('Please fill in both fields.');
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <section className="login-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={4}>
              <div className="login-card p-4">
                <h2 className="text-center mb-4">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </Button>
                </Form>
                <div className="text-center mt-3">
                  <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LoginPage;
