import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} My Company. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>
              <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
              <a href="/terms" className="text-white ms-2">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
