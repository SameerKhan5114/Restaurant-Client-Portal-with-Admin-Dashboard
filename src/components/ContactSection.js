import { Container, Row, Col } from 'react-bootstrap';

const ContactSection = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Contact Us</h2>
        <Row>
          <Col md={6}>
            <h4>Location</h4>
            <p> 98, Beswa, Rajasthan</p>
            
            <h4 className="mt-4">Hours</h4>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
            
            <h4 className="mt-4">Contact Information</h4>
            <p>Phone: +91-9828268502</p>
            <p>Email: sk8038303@gmail.com</p>
          </Col>
          <Col md={6}>
            <div className="map-container">
              <iframe
                title="Restaurant Location"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAP_API_KEY}&q=123+Main+Street,City,State`}
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;