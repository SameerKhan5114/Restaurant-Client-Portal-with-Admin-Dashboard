import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section className="hero-section text-white text-center py-5">
      <Container>
        <h1 className="display-4 mb-4">Welcome to Our Restaurant</h1>
        <p className="lead mb-4">Experience the finest dining in town</p>
        <Button variant="primary" size="lg" href="#reservation">
          Book a Table
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;