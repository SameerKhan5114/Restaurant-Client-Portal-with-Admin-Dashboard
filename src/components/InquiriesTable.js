import { useState } from 'react';
import { Table, Badge, Dropdown, Modal, Form, Button } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';

const statusVariant = {
  New: 'secondary',
  'In Progress': 'warning',
  Closed: 'success'
};

const InquiriesTable = ({ inquiries, onUpdate, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [notes, setNotes] = useState('');

  const handleStatusChange = (id, status) => {
    onUpdate(id, { status });
  };

  const handleShowNotes = (inquiry) => {
    setSelectedInquiry(inquiry);
    setNotes(inquiry.notes);
    setShowModal(true);
  };

  const handleSaveNotes = () => {
    onUpdate(selectedInquiry._id, { notes });
    setShowModal(false);
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map(inquiry => (
            <tr key={inquiry._id}>
              <td>{inquiry.name}</td>
              <td>{inquiry.email}</td>
              <td>{inquiry.phone}</td>
              <td>{inquiry.message.substring(0, 50)}...</td>
              <td>{format(parseISO(inquiry.createdAt), 'MMM dd, yyyy')}</td>
              <td>
                <Badge bg={statusVariant[inquiry.status]}>
                  {inquiry.status}
                </Badge>
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary" size="sm">
                    Actions
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleStatusChange(inquiry._id, 'In Progress')}>
                      Mark as In Progress
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleStatusChange(inquiry._id, 'Closed')}>
                      Mark as Closed
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleShowNotes(inquiry)}>
                      {inquiry.notes ? 'View/Edit Notes' : 'Add Notes'}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item 
                      className="text-danger" 
                      onClick={() => onDelete(inquiry._id)}
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Inquiry Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveNotes}>
            Save Notes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InquiriesTable;