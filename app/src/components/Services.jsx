import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Ayurvedic Massage',
      description: 'Ancient healing techniques using traditional Ayurvedic oils and methods to balance your mind, body, and spirit.',
      features: ['Traditional oils', 'Chakra balancing', 'Stress relief', 'Detoxification']
    },
    {
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Aromatherapy',
      description: 'Therapeutic massage using essential oils to enhance physical and emotional well-being through the power of scent.',
      features: ['Essential oils', 'Mood enhancement', 'Relaxation', 'Mental clarity']
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      title: 'Swedish Massage',
      description: 'Classic relaxation massage using long, flowing strokes to improve circulation and release muscle tension.',
      features: ['Full body relaxation', 'Improved circulation', 'Muscle tension relief', 'Stress reduction']
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">The Art Of Natural Beauty</h2>
        <p className="section-subtitle">
          Discover our signature treatments designed to rejuvenate your body and soul. 
          Each service is carefully crafted to provide you with the ultimate spa experience.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <div className="overlay-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="btn service-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <div className="cta-badge">
              <span className="discount-text">20%</span>
              <span className="discount-label">OFF</span>
            </div>
            <div className="cta-text">
              <h3>Get 20% Off For Your First Visit</h3>
              <p>Experience the luxury of Solace Spa with our first-time visitor discount. Book your appointment today and discover the ultimate in relaxation and rejuvenation.</p>
              <button className="btn cta-btn">Book Now</button>
            </div>
          </div>
          <div className="cta-image">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Spa Treatment" />
          </div>
        </div>
      </div>
      
      <div className="decorative-element large" style={{top: '15%', right: '-12%'}}></div>
      <div className="decorative-element medium" style={{bottom: '10%', left: '-8%'}}></div>
    </section>
  );
};

export default Services;