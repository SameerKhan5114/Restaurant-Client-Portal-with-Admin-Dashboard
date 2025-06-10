import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="mb-4">About Our Restaurant</h2>
            <p>
              Founded in 2005, our restaurant has been serving delicious meals made from locally-sourced ingredients. 
              Our chefs bring years of experience and passion to every dish they create.
            </p>
            <p>
              We pride ourselves on providing exceptional service and a warm, inviting atmosphere for all our guests.
            </p>
          </Col>
          <Col md={6}>
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" 
              alt="Restaurant interior" 
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;