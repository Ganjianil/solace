import React, { useState, useEffect } from 'react';
import { useBooking } from '../contexts/BookingContext';
import './BookingPopup.css';

const BookingPopup = () => {
  const { isPopupOpen, selectedService, closeBookingPopup, redirectToWhatsApp } = useBooking();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    redirectToWhatsApp(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleCancel = () => {
    closeBookingPopup();
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  if (!isPopupOpen) return null;

  return (
    <div className="booking-popup-overlay" onClick={handleCancel}>
      <div className="booking-popup-content" onClick={e => e.stopPropagation()}>
        <div className="popup-header">
          <h3>Book Your Appointment</h3>
          <p>Fill in your details and we'll connect you via WhatsApp</p>
          <button className="popup-close" onClick={handleCancel}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="booking-popup-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="popup-name">Full Name *</label>
              <input
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="popup-phone">Phone Number *</label>
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="popup-email">Email Address *</label>
              <input
                type="email"
                id="popup-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="popup-service">Select Service *</label>
              <select
                id="popup-service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Choose your service</option>
                <option value="Ayurvedic Massage">Ayurvedic Massage</option>
                <option value="Aromatherapy">Aromatherapy</option>
                <option value="Swedish Massage">Swedish Massage</option>
                <option value="Deep Tissue Massage">Deep Tissue Massage</option>
                <option value="Chocolate Massage">Chocolate Massage</option>
                <option value="Dry Massage">Dry Massage</option>
                <option value="Pain Relief Massage">Pain Relief Massage</option>
                <option value="Lomi Lomi Massage">Lomi Lomi Massage</option>
                <option value="4 Hands Massage">4 Hands Massage</option>
                <option value="Premium Massage">Premium Massage</option>
                <option value="Massage Therapy">Massage Therapy</option>
                <option value="Skin Care">Skin Care</option>
                <option value="Body Treatments">Body Treatments</option>
                <option value="Waxing">Waxing</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="popup-date">Preferred Date *</label>
              <input
                type="date"
                id="popup-date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="popup-time">Preferred Time *</label>
              <select
                id="popup-time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">Select time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="8:00 PM">8:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="popup-message">Additional Message (Optional)</label>
            <textarea
              id="popup-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="3"
              placeholder="Any special requests or additional information..."
            ></textarea>
          </div>

          <div className="popup-actions">
            <button type="button" className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" fill="currentColor"/>
              </svg>
              Book via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;