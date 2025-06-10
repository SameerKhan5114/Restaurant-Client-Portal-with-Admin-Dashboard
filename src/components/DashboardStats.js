import { Card, Row, Col } from 'react-bootstrap';

const DashboardStats = ({ stats }) => {
  return (
    <Row className="mb-4">
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Total Reservations</Card.Title>
            <Card.Text className="display-6">{stats.totalReservations}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>New Reservations</Card.Title>
            <Card.Text className="display-6">{stats.newReservations}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Total Inquiries</Card.Title>
            <Card.Text className="display-6">{stats.totalInquiries}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>New Inquiries</Card.Title>
            <Card.Text className="display-6">{stats.newInquiries}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardStats;