import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h2 className="mb-4">Page Not Found</h2>
          <p className="mb-4">Oops! The page you are looking for does not exist.</p>
          <Button as={Link as any} to="/" variant="primary">Go to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
