import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/HomePage.css'; // Для кастомних стилів

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="hero-section d-flex align-items-center justify-content-center text-center">
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">Your Digital Agency</h1>
            <p className="lead">
              We provide innovative solutions to boost your digital presence.
            </p>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="primary" className="me-3" size="lg">
                Explore Services
              </Button>
              <Button variant="outline-black" size="lg">
                Get in Touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

      <section className="about-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>About Us</h2>
              <p>
                We are a full-service digital agency that transforms your business
                with creativity and technology.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="icon-box text-center">
                <i className="bi bi-palette-fill"></i>
                <h3>Design</h3>
                <p>Creative designs that captivate your audience.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="icon-box text-center">
                <i className="bi bi-code-slash"></i>
                <h3>Development</h3>
                <p>Robust web and mobile development solutions.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="icon-box text-center">
                <i className="bi bi-graph-up"></i>
                <h3>Marketing</h3>
                <p>Results-driven digital marketing strategies.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="portfolio-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Our Portfolio</h2>
              <p>
                Explore some of the projects we are proud to showcase.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="portfolio-item">
                <img src="/path-to-project1.jpg" alt="Project 1" className="img-fluid" />
                <h4>Project 1</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="portfolio-item">
                <img src="/path-to-project2.jpg" alt="Project 2" className="img-fluid" />
                <h4>Project 2</h4>
              </div>
            </Col>
            <Col md={4}>
              <div className="portfolio-item">
                <img src="/path-to-project3.jpg" alt="Project 3" className="img-fluid" />
                <h4>Project 3</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>What Our Clients Say</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="testimonial">
                <p>
                  "This agency transformed our business. Highly recommend!"
                </p>
                <h5>— John Doe, CEO of ExampleCorp</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial">
                <p>
                  "Innovative solutions and incredible service."
                </p>
                <h5>— Jane Smith, Marketing Manager</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="testimonial">
                <p>
                  "They truly understand what it means to deliver quality."
                </p>
                <h5>— Mike Johnson, Startup Founder</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
