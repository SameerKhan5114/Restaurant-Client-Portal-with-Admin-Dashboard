import { Container, Row, Col, Card } from 'react-bootstrap';

const menuItems = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh salmon with lemon butter sauce and seasonal vegetables',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2'
  },
  {
    id: 2,
    name: 'Beef Tenderloin',
    description: 'Premium cut beef with red wine reduction and mashed potatoes',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947'
  },
  {
    id: 3,
    name: 'Vegetable Pasta',
    description: 'Fresh pasta with seasonal vegetables in a creamy sauce',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center and vanilla ice cream',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e'
  }
];

const MenuSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Menu</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          {menuItems.map(item => (
            <Col key={item.id}>
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src={item.image} 
                  alt={item.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <h5 className="text-primary">₹{item.price.toFixed(2)}</h5>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuSection;