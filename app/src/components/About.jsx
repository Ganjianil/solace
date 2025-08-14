import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Your Sanctuary for Relaxation at Solace Spa</h2>
            <p className="section-subtitle">
              At Solace Spa, we believe in creating a haven of serenity where 
              modern luxury meets traditional wellness. Our expert therapists 
              combine ancient healing techniques with contemporary spa treatments 
              to deliver an unparalleled experience of rejuvenation and tranquility.
            </p>
            
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Natural Ingredients" />
                </div>
                <div className="feature-content">
                  <h4>Natural Ingredients</h4>
                  <p>We use only the finest organic and natural ingredients sourced from around the world to ensure the highest quality treatments.</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Expert Therapists" />
                </div>
                <div className="feature-content">
                  <h4>Expert Therapists</h4>
                  <p>Our certified therapists bring years of experience and specialized training in various massage and wellness techniques.</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Luxurious Environment" />
                </div>
                <div className="feature-content">
                  <h4>Luxurious Environment</h4>
                  <p>Experience ultimate relaxation in our beautifully designed spa facilities that promote peace and tranquility.</p>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Spa Services</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tranquil Spa Environment" className="spa-room-image" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Tranquil Spa Environment</h4>
                  <p>Where wellness meets luxury</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="decorative-element large" style={{top: '10%', right: '-10%'}}></div>
      <div className="decorative-element medium" style={{bottom: '20%', left: '-8%'}}></div>
    </section>
  );
};

export default About;