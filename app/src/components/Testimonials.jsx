import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Absolutely amazing experience at Solace Wellness Spa! The Ayurvedic massage was incredibly relaxing and the therapists are highly skilled. The ambiance is perfect for unwinding after a stressful week.',
      service: 'Ayurvedic Massage',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'I have been visiting Solace Wellness Spa for over a year now and every visit exceeds my expectations. The deep tissue massage helped tremendously with my back pain. Highly recommended!',
      service: 'Deep Tissue Massage',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'The chocolate massage was a unique and luxurious experience. The staff is professional and the facility is immaculately clean. Will definitely be returning for more treatments.',
      service: 'Chocolate Massage',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Pune',
      rating: 5,
      text: 'Exceptional service and wonderful atmosphere. The Swedish massage was exactly what I needed to relieve stress. The booking process was smooth and the staff was very accommodating.',
      service: 'Swedish Massage',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 5,
      name: 'Meera Reddy',
      location: 'Hyderabad',
      rating: 5,
      text: 'Solace Wellness Spa provides the perfect escape from city life. The aromatherapy session was heavenly and I left feeling completely rejuvenated. The pricing is also very reasonable.',
      service: 'Aromatherapy',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 6,
      name: 'Arjun Gupta',
      location: 'Chennai',
      rating: 5,
      text: 'Outstanding spa experience! The pain relief massage worked wonders for my chronic shoulder pain. The therapist was knowledgeable and the treatment was very effective.',
      service: 'Pain Relief Massage',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Here's what our valued clients have to say 
          about their transformative experiences at Solace wellness Spa.
        </p>
        
        <div className="testimonials-container">
          <div className="testimonial-slider">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="client-avatar">
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                      <div className="client-info">
                        <h4 className="client-name">{testimonial.name}</h4>
                        <p className="client-location">{testimonial.location}</p>
                        <div className="rating">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="testimonial-content">
                      <div className="quote-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                        </svg>
                      </div>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="service-tag">
                        <span>{testimonial.service}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Treatments Done</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
        
        <div className="testimonials-cta">
          <div className="cta-content">
            <h3>Ready to Experience the Difference?</h3>
            <p>Join hundreds of satisfied clients who have discovered the ultimate in relaxation and wellness.</p>
            <button className="btn">Book Your Appointment</button>
          </div>
          <div className="cta-image">
            <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Spa Experience" />
          </div>
        </div>
      </div>
      
      <div className="decorative-element large" style={{top: '35%', right: '-15%'}}></div>
      <div className="decorative-element medium" style={{bottom: '30%', left: '-12%'}}></div>
    </section>
  );
};

export default Testimonials;