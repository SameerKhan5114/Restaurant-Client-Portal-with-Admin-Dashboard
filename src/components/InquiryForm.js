import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const InquiryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>
      
      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit Inquiry
      </Button>
    </Form>
  );
};

export default InquiryForm;