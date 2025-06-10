import { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import MenuSection from '../components/MenuSection';
import ReservationForm from '../components/ReservationForm';
import InquiryForm from '../components/InquiryForm';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('reservation');

  const handleReservationSubmit = async (formData) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/reservations`, formData);
      toast.success('Reservation submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit reservation. Please try again.');
    }
  };

  const handleInquirySubmit = async (formData) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/inquiries`, formData);
      toast.success('Inquiry submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Book a Table or Send Inquiry</h2>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3 justify-content-center"
          >
            <Tab eventKey="reservation" title="Make a Reservation">
              <ReservationForm onSubmit={handleReservationSubmit} />
            </Tab>
            <Tab eventKey="inquiry" title="Send Inquiry">
              <InquiryForm onSubmit={handleInquirySubmit} />
            </Tab>
          </Tabs>
        </Container>
      </section>
      
      <ContactSection />
    </div>
  );
};

export default HomePage;