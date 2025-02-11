import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Table, Button, Modal, Alert } from 'react-bootstrap';
import { MessageContext } from '../context/MessageContext';
import { CallContext } from '../context/CallContext';
import '../css/AdminPanel.css';

const AdminPanel: React.FC = () => {
  const { messages, fetchMessages, deleteMessage } = useContext(MessageContext);
  const { calls, fetchCalls, deleteCall } = useContext(CallContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchMessages(token);
      fetchCalls(token);
    }
  }, [fetchMessages, fetchCalls]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = (message: any) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const handleDeleteMessage = (id: number) => {
    deleteMessage(id); 
  };

  const handleDeleteCall = (id: number) => {
    deleteCall(id);  
  };

  return (
    <div className="admin-panel">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="mb-4">Admin Panel</h2>
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="mb-5">
              <h3>Messages</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg: any) => (
                    <tr key={msg.id}>
                      <td>{msg.id}</td>
                      <td>{msg.name}</td>
                      <td>{msg.email}</td>
                      <td>{msg.message}</td>
                      <td>
                        <Button variant="danger" onClick={() => handleDeleteMessage(msg.id)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="mb-5">
              <h3>Call Requests</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {calls.map((call: any) => (
                    <tr key={call.id}>
                      <td>{call.id}</td>
                      <td>{call.name}</td>
                      <td>{call.phoneNumber}</td>
                      <td>
                        <Button variant="danger" onClick={() => handleDeleteCall(call.id)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMessage && (
            <div>
              <h5>Name: {selectedMessage.name}</h5>
              <p>Email: {selectedMessage.email}</p>
              <p>Message: {selectedMessage.message}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPanel;
