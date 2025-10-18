import React, { useState } from "react";
import { useBooking } from "../contexts/BookingContext";
import "./Contact.css";

const Contact = () => {
  const { openBookingPopup } = useBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open booking popup instead of showing alert
    openBookingPopup();
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleBookAppointment = () => {
    openBookingPopup();
  };

  // Coordinates: 17°24'18.8"N 78°28'49.3"E
  const latitude = 17.405222;
  const longitude = 78.480361;
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzE4LjgiTiA3OMKwMjgnNDkuMyJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin`;

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to experience the ultimate in relaxation and wellness? Contact
          us today to book your appointment or learn more about our services.
          We're here to help you on your journey to rejuvenation.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Visit Us"
                />
              </div>
              <h4>Visit Us</h4>
              <p>
                Solace Wellness Spa
                <br />
                Flat no 201 H no 3-6-369/2, Himayathnagar
                <br />
                Circle 16,Hyderabad
                <br />
                <small>17°24'18.8"N 78°28'49.3"E</small>
              </p>
              <a
                href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                View on Google Maps
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Call Us"
                />
              </div>
              <h4>Call Us</h4>
              <p>
                <a href="tel:8121682010">+91 8121682010</a>
                <br />
                <span className="hours">Mon - Sun: 9:00 AM - 9:00 PM</span>
              </p>
              <a
                href="https://wa.me/918121682010?text=Hello! I would like to book an appointment at Solace Wellness Spa."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img
                  src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Email Us"
                />
              </div>
              <h4>Email Us</h4>
              <p>
                <a href="mailto:solacewellnessspa71@gmail.com">
                  solacewellnessspa71@gmail.com
                </a>
                <br />
                <span className="response-time">
                  We respond within 24 hours
                </span>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Opening Hours"
                />
              </div>
              <h4>Opening Hours</h4>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday - Sunday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="hour-item special">
                  <span>Public Holidays</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="services">Service Inquiry</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn submit-btn">
                  <span>Send Message</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={handleBookAppointment}
                >
                  <span>Book Appointment</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="map-container">
          <div className="map-header">
            <h3>Find Us on Map</h3>
            <p>
              Located in Hyderabad, Telangana - easily accessible by all modes
              of transport.
            </p>
          </div>
          <div className="map-wrapper">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Solace Wellness Spa Location"
            ></iframe>
            <div className="map-overlay-info">
              <div className="map-info-card">
                <div className="map-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="map-info-content">
                  <h4>Solace Wellness Spa</h4>
                  <p>Hyderabad, Telangana</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="decorative-element large"
        style={{ top: "40%", right: "-15%" }}
      ></div>
      <div
        className="decorative-element medium"
        style={{ bottom: "35%", left: "-12%" }}
      ></div>
    </section>
  );
};

export default Contact;
