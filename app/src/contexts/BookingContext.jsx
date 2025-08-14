import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openBookingPopup = (service = '') => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const closeBookingPopup = () => {
    setIsPopupOpen(false);
    setSelectedService('');
  };

  const formatWhatsAppMessage = (formData) => {
    const message = `Hello! I would like to book an appointment at Solace Wellness Spa.

*Booking Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
${formData.message ? `Additional Message: ${formData.message}` : ''}

Please confirm my appointment. Thank you!`;

    return encodeURIComponent(message);
  };

  const redirectToWhatsApp = (formData) => {
    const phoneNumber = '918121682010'; // Your spa's WhatsApp number
    const message = formatWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    closeBookingPopup();
  };

  const value = {
    isPopupOpen,
    selectedService,
    openBookingPopup,
    closeBookingPopup,
    redirectToWhatsApp
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
