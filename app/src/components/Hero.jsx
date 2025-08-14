import React, { useState } from "react";
import { useBooking } from "../contexts/BookingContext";
import "./Hero.css";

const Hero = () => {
  const { openBookingPopup } = useBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open popup instead of showing alert
    openBookingPopup(formData.service);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });
  };

  const handleBookNowClick = () => {
    // Open booking popup
    openBookingPopup();
  };

  const handleLearnMoreClick = () => {
    // Scroll to about section
    const aboutSection = document.getElementById("services");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Tranquil <span className="highlight">Luxury Spa</span> for Body
              and Soul
            </h1>
            <p>
              Solace Spa combines tranquility and luxury to provide the ultimate
              relaxation experience. Let us rejuvenate your body and soul with
              our specialized treatments designed to refresh your mind and
              revitalize your spirit.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={handleBookNowClick}>
                Book Now
              </button>
              <button
                className="btn btn-outline"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="appointment-form">
            <div className="form-container">
              <h3>Get an Appointment</h3>
              <p className="form-subtitle">
                Book your perfect spa experience today
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Your Service</option>
                    <option value="Ayurvedic Massage">Ayurvedic Massage</option>
                    <option value="Aromatherapy">Aromatherapy</option>
                    <option value="Swedish Massage">Swedish Massage</option>
                    <option value="Deep Tissue Massage">
                      Deep Tissue Massage
                    </option>
                    <option value="Chocolate Massage">Chocolate Massage</option>
                    <option value="Dry Massage">Dry Massage</option>
                    <option value="Pain Relief Massage">
                      Pain Relief Massage
                    </option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn submit-btn">
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
