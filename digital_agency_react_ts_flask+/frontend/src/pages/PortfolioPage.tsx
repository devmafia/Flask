import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../css/PortfolioPage.css';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce platform with payment integration.',
    // image: '/assets/ecommerce.jpg',
  },
  {
    id: 2,
    title: 'Mobile App for Delivery',
    description: 'Cross-platform app for real-time delivery tracking.',
    // image: '/assets/delivery-app.jpg',
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'A modern corporate website for a financial company.',
    // image: '/assets/corporate-website.jpg',
  },
  {
    id: 4,
    title: 'Social Media Marketing',
    description: 'Comprehensive SMM strategy for a tech startup.',
    // image: '/assets/smm.jpg',
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Our Portfolio</h2>
              <p>Explore some of the amazing projects we have worked on.</p>
            </Col>
          </Row>

          <Row>
            {projects.map((project) => (
              <Col md={6} lg={4} className="mb-4" key={project.id}>
                <Card className="portfolio-card">
                  {/* <Card.Img variant="top" src={project.image} alt={project.title} /> */}
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PortfolioPage;
