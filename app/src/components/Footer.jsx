import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>SOLACE</h3>
              <span> WELLNESS SPA</span>
            </div>
            <p className="footer-description">
              Experience the ultimate in relaxation and wellness at 
              Solace Wellness Spa. We combine traditional healing techniques
              with modern luxury to provide you with an unforgettable spa
              experience.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span>📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <span>💬</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection("services")}>
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => scrollToSection("gallery")}>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={() => scrollToSection("testimonials")}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#services">Ayurvedic Massage</a>
              </li>
              <li>
                <a href="#services">Aromatherapy</a>
              </li>
              <li>
                <a href="#services">Swedish Massage</a>
              </li>
              <li>
                <a href="#services">Deep Tissue Massage</a>
              </li>
              <li>
                <a href="#services">Chocolate Massage</a>
              </li>
              <li>
                <a href="#services">Pain Relief Therapy</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p> Solace Wellness Spa</p>
                  <p>123 Wellness Street</p>
                  <p>Spa District, City - 500001</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <a href="tel:8121682010">+91 8121682010</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <a href="mailto:solacewellnessspa71@gmail.com">
                    solacewellnessspa71@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <p>Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to our newsletter for exclusive offers, wellness tips,
              and updates on new services.
            </p>
            <form className="newsletter-form">
              <div className="newsletter-input">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="footer-badges">
              <div className="badge">
                <span>🏆</span>
                <div>
                  <small>Best Spa</small>
                  <small>Award 2024</small>
                </div>
              </div>
              <div className="badge">
                <span>⭐</span>
                <div>
                  <small>4.9/5 Rating</small>
                  <small>500+ Reviews</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                &copy; {currentYear} Solace Wellness Spa. All rights
                reserved.
              </p>
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
            <button
              className="back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>⬆️</span>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
