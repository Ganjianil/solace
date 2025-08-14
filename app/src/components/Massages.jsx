import React from 'react';
import { useBooking } from '../contexts/BookingContext';
import './Massages.css';

const Massages = () => {
  const { openBookingPopup } = useBooking();

  const massages = [
    {
      name: 'AYUR',
      duration: '60 minutes',
      price: '₹1999',
      description: 'Traditional Ayurvedic massage using warm herbal oils',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: false
    },
    {
      name: 'DRY MASSAGE',
      duration: '45 minutes',
      price: '₹2499',
      description: 'Invigorating dry massage technique for muscle relief',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: true
    },
    {
      name: 'AROMA',
      duration: '60 minutes',
      price: '₹1999',
      description: 'Aromatherapy massage with essential oils',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: false
    },
    {
      name: 'CHOCOLATE MASSAGE',
      duration: '75 minutes',
      price: '₹2999',
      description: 'Luxurious chocolate-infused massage treatment',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: true
    },
    {
      name: 'SWEDISH',
      duration: '60 minutes',
      price: '₹1999',
      description: 'Classic Swedish massage for ultimate relaxation',
      image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: false
    },
    {
      name: 'LOMI LOMI MASSAGE',
      duration: '90 minutes',
      price: '₹2999',
      description: 'Hawaiian healing massage with flowing movements',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: false
    },
    {
      name: 'PAIN RELIEF',
      duration: '60 minutes',
      price: '₹1999',
      description: 'Therapeutic massage targeting pain and tension',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: false
    },
    {
      name: '4 HANDS MASSAGE',
      duration: '60 minutes',
      price: '₹2499',
      description: 'Synchronized massage by two therapists',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: true
    },
    {
      name: 'DEEP TISSUE',
      duration: '75 minutes',
      price: '₹2499',
      description: 'Intensive massage for deep muscle tension',
      image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: false
    },
    {
      name: 'PREMIUM MASSAGE',
      duration: '90 minutes',
      price: '₹3999',
      description: 'Our signature premium massage experience',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      popular: true
    }
  ];

  const handleBookNow = (massageName) => {
    openBookingPopup(massageName);
  };

  return (
    <section className="massages section">
      <div className="container">
        <h2 className="section-title">Our Massages</h2>
        <p className="section-subtitle">
          Choose from our extensive range of therapeutic and relaxation massages, 
          each designed to provide you with the ultimate wellness experience.
        </p>
        
        <div className="massages-grid">
          {massages.map((massage, index) => (
            <div key={index} className={`massage-card ${massage.popular ? 'popular' : ''}`}>
              {massage.popular && (
                <div className="popular-badge">
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="massage-image">
                <img src={massage.image} alt={massage.name} />
                <div className="massage-overlay">
                  <div className="overlay-content">
                    <div className="duration-badge">{massage.duration}</div>
                  </div>
                </div>
              </div>
              
              <div className="massage-content">
                <div className="massage-header">
                  <h3 className="massage-name">{massage.name}</h3>
                  <span className="massage-price">{massage.price}</span>
                </div>
                <p className="massage-description">{massage.description}</p>
                <button className="btn massage-btn" onClick={() => handleBookNow(massage.name)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="massage-info">
          <div className="info-card">
            <div className="info-icon">
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Flexible Timing" />
            </div>
            <h4>Flexible Timing</h4>
            <p>We offer flexible appointment times to fit your busy schedule. Book online or call us directly.</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Expert Therapists" />
            </div>
            <h4>Expert Therapists</h4>
            <p>All our massage therapists are certified professionals with years of experience in wellness treatments.</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Natural Products" />
            </div>
            <h4>Natural Products</h4>
            <p>We use only premium, natural oils and products that are gentle on your skin and beneficial for your health.</p>
          </div>
        </div>
      </div>
      
      <div className="decorative-element large" style={{top: '20%', left: '-10%'}}></div>
      <div className="decorative-element medium" style={{bottom: '15%', right: '-8%'}}></div>
    </section>
  );
};

export default Massages;