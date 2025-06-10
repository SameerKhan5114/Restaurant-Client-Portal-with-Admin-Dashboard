import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: null,
    time: '',
    guests: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.date) {
      alert('Please select a date');
      return;
    }
    
    const reservationData = {
      ...formData,
      date: formData.date.toISOString()
    };
    
    onSubmit(reservationData);
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
      
      <Row className="mb-3">
        <Form.Group as={Col} controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group as={Col} controlId="guests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            type="number"
            name="guests"
            min="1"
            max="20"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
        <Form.Group as={Col} controlId="date">
          <Form.Label>Date</Form.Label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            className="form-control"
            minDate={new Date()}
            required
          />
        </Form.Group>
        
        <Form.Group as={Col} controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select time</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
          </Form.Select>
        </Form.Group>
      </Row>
      
      <Button variant="primary" type="submit">
        Make Reservation
      </Button>
    </Form>
  );
};

export default ReservationForm;