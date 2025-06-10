import { Table, Badge, Dropdown } from 'react-bootstrap';
import { format, parseISO } from 'date-fns';

const statusVariant = {
  New: 'secondary',
  Confirmed: 'success',
  Cancelled: 'danger'
};

const ReservationsTable = ({ reservations, onUpdate, onDelete }) => {
  const handleStatusChange = (id, status) => {
    onUpdate(id, status);
  };

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date & Time</th>
          <th>Guests</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map(reservation => (
          <tr key={reservation._id}>
            <td>{reservation.name}</td>
            <td>{reservation.email}</td>
            <td>{reservation.phone}</td>
            <td>
              {format(parseISO(reservation.date), 'MMM dd, yyyy')} at {reservation.time}
            </td>
            <td>{reservation.guests}</td>
            <td>
              <Badge bg={statusVariant[reservation.status]}>
                {reservation.status}
              </Badge>
            </td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" size="sm">
                  Actions
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleStatusChange(reservation._id, 'Confirmed')}>
                    Confirm
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleStatusChange(reservation._id, 'Cancelled')}>
                    Cancel
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item 
                    className="text-danger" 
                    onClick={() => onDelete(reservation._id)}
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
  );
};

export default ReservationsTable;