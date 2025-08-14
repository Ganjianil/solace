import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>SOLACE</h2>
            <span> WELLNESS SPA</span>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul>
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection("services")}>
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => scrollToSection("gallery")}>
                  GALLERY
                </a>
              </li>
              <li>
                <a href="#blog" onClick={() => scrollToSection("blog")}>
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={() => scrollToSection("testimonials")}
                >
                  TESTIMONIAL
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:8121682010" className="phone-number">
              📞 8121682010
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;