import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../css/ServicesPage.css';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and modern websites for businesses of all sizes.',
    // image: '/assets/web-development.jpg',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile applications with seamless user experience.',
    // image: '/assets/mobile-app-development.jpg',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Helping businesses grow with SEO, SEM, and social media strategies.',
    // image: '/assets/digital-marketing.jpg',
  },
  {
    id: 4,
    title: 'Graphic Design',
    description: 'Designing modern and eye-catching graphics for web and print media.',
    // image: '/assets/graphic-design.jpg',
  },
  {
    id: 5,
    title: 'SEO Optimization',
    description: 'Improving search engine rankings to increase website visibility.',
    // image: '/assets/seo-optimization.jpg',
  },
  {
    id: 6,
    title: 'E-commerce Solutions',
    description: 'Building and optimizing e-commerce platforms for various industries.',
    // image: '/assets/ecommerce-solutions.jpg',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <section className="services-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Our Services</h2>
              <p>We offer a wide range of digital services to help your business succeed.</p>
            </Col>
          </Row>

          <Row>
            {services.map((service) => (
              <Col md={6} lg={4} className="mb-4" key={service.id}>
                <Card className="service-card">
                  <Card.Img variant="top" src={service.image} alt={service.title} />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button variant="primary">Learn More</Button>
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

export default ServicesPage;
