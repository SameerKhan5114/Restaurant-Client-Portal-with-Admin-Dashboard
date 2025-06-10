import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Tab, Tabs, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import DashboardStats from '../components/DashboardStats';
import ReservationsTable from '../components/ReservationsTable.js';
import InquiriesTable from '../components/InquiriesTable';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('reservations');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [statsRes, reservationsRes, inquiriesRes] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/dashboard`),
          axios.get(`${process.env.REACT_APP_API_BASE_URL}/reservations`),
          axios.get(`${process.env.REACT_APP_API_BASE_URL}/inquiries`)
        ]);
        
        setStats(statsRes.data.data);
        setReservations(reservationsRes.data.data);
        setInquiries(inquiriesRes.data.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch data');
        toast.error('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdateReservation = async (id, status) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/reservations/${id}`, { status });
      setReservations(prev => prev.map(r => r._id === id ? { ...r, status } : r));
      toast.success('Reservation updated successfully');
    } catch (err) {
      toast.error('Failed to update reservation');
    }
  };

  const handleDeleteReservation = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/reservations/${id}`);
      setReservations(prev => prev.filter(r => r._id !== id));
      toast.success('Reservation deleted successfully');
    } catch (err) {
      toast.error('Failed to delete reservation');
    }
  };

  const handleUpdateInquiry = async (id, data) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/inquiries/${id}`, data);
      setInquiries(prev => prev.map(i => i._id === id ? { ...i, ...data } : i));
      toast.success('Inquiry updated successfully');
    } catch (err) {
      toast.error('Failed to update inquiry');
    }
  };

  const handleDeleteInquiry = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/inquiries/${id}`);
      setInquiries(prev => prev.filter(i => i._id !== id));
      toast.success('Inquiry deleted successfully');
    } catch (err) {
      toast.error('Failed to delete inquiry');
    }
  };

  if (loading && !stats) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      
      {stats && <DashboardStats stats={stats} />}
      
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-4"
      >
        <Tab eventKey="reservations" title="Reservations">
          <ReservationsTable 
            reservations={reservations} 
            onUpdate={handleUpdateReservation}
            onDelete={handleDeleteReservation}
          />
        </Tab>
        <Tab eventKey="inquiries" title="Inquiries">
          <InquiriesTable 
            inquiries={inquiries}
            onUpdate={handleUpdateInquiry}
            onDelete={handleDeleteInquiry}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AdminDashboard;