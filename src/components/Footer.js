import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Restaurant Name</h5>
            <p>Delicious food served with love since 2005.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p> 98, Beswa, Rajasthan</p>
            <p>Phone: +91-9828268502</p>
            <p>Email: sk8038303@gmail.com</p>
          </Col>
          <Col md={4}>
            <h5>Opening Hours</h5>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;