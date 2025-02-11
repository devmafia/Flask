import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/AboutUsPage.css'; // Кастомні стилі

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      <section className="mission-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Our Mission</h2>
              <p>
                We are committed to delivering exceptional digital experiences
                that drive results for our clients.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="mission-item">
                <h3>Innovation</h3>
                <p>We thrive on creating innovative solutions tailored to your business.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="mission-item">
                <h3>Quality</h3>
                <p>Delivering top-notch quality and consistency in every project we undertake.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Meet Our Team</h2>
              <p>We are a group of passionate professionals dedicated to your success.</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src="/path-to-team1.jpg" />
                <Card.Body>
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>CEO & Founder</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src="/path-to-team2.jpg" />
                <Card.Body>
                  <Card.Title>Jane Smith</Card.Title>
                  <Card.Text>Lead Developer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="team-card">
                <Card.Img variant="top" src="/path-to-team3.jpg" />
                <Card.Body>
                  <Card.Title>Mike Johnson</Card.Title>
                  <Card.Text>Project Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="values-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Our Values</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="value-box text-center">
                <i className="bi bi-lightbulb-fill"></i>
                <h4>Creativity</h4>
                <p>We believe in pushing creative boundaries to achieve excellence.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-box text-center">
                <i className="bi bi-people-fill"></i>
                <h4>Collaboration</h4>
                <p>Success is a result of great teamwork and client collaboration.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="value-box text-center">
                <i className="bi bi-award-fill"></i>
                <h4>Excellence</h4>
                <p>We strive for excellence in every aspect of our work.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="testimonials-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>What Our Clients Say</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="testimonial">
                <p>
                  "Working with this team was a seamless experience. They brought our ideas to life!"
                </p>
                <h5>— Sarah Williams, Client</h5>
              </div>
            </Col>
            <Col md={6}>
              <div className="testimonial">
                <p>
                  "Their attention to detail and commitment to quality is exceptional."
                </p>
                <h5>— David Brown, Client</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUsPage;
