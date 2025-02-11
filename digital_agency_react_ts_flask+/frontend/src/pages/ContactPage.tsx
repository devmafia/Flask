import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/ContactPage.css'; // Custom styles

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [callbackPhone, setCallbackPhone] = useState({
    name: '',
    phoneNumber: ''
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCallbackInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCallbackPhone({
      ...callbackPhone,
      [name]: value,
    });
  };

  const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/messages', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("Message sent successfully:", response.data);
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
        console.error("Error sending message:", error.response?.data || error.message);
        setFormStatus('Failed to send message.');
    }
};

  const handleSubmitCallback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/calls', callbackPhone);
      setFormStatus('Callback request sent successfully!');
      setCallbackPhone({ name: '', phoneNumber: '' });
    } catch (error) {
      setFormStatus('Failed to request callback.');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-form-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Contact Us</h2>
              <p>We'd love to hear from you! Please fill out the form below.</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form onSubmit={handleSubmitMessage}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                  Send Message
                </Button>
                {formStatus && <p className="mt-4">{formStatus}</p>}
              </Form>
            </Col>
            <Col md={6} className="contact-info">
              <h4>Our Contact Information</h4>
              <p><strong>Phone:</strong> +1 234 567 890</p>
              <p><strong>Email:</strong> contact@agency.com</p>
              <p><strong>Address:</strong> 123 Digital Avenue, Tech City</p>
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.455076027408!2d144.95373531585842!3d-37.817209979751675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d48ad8a1fdb%3A0xf57729b8b028f0b6!2s123%20Digital%20Avenue!5e0!3m2!1sen!2sus!4v1632445467123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="callback-widget-section py-5 bg-light">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Request a Callback</h2>
              <p>Need more information? Let us call you!</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={handleSubmitCallback}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={callbackPhone.name}
                    onChange={handleCallbackInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPhoneNumber" className="mt-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={callbackPhone.phoneNumber}
                    onChange={handleCallbackInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="mt-4">
                  Request a Call
                </Button>
                {formStatus && <p className="mt-4">{formStatus}</p>}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
