import React, { useState } from 'react';
import './Gallery.css';
import inside from "/inside.jpeg"
import inside2 from "/inside2.jpeg";
import inside3 from "/inside3.jpeg"
import inside4 from "/inside4.jpeg";
import inside5 from "/inside5.jpeg";
import inside6 from "/inside6.jpeg";
import inside7 from "/inside7.jpeg";
import inside8 from "/inside8.jpeg";
import inside9 from "/inside9.jpeg";
import inside10 from "/inside10.jpeg";
import inside11 from "/inside11.jpeg";
import inside12 from "/inside12.jpeg";
import inside13 from "/inside13.jpeg";
import inside14 from "/inside14.jpeg";
import inside16 from "/inside16.jpeg";
import out from "/out.jpeg"
import out1 from "/out1.jpeg"
import out2 from "/out2.jpeg"
import outt from "/outt.jpeg"





const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: "Spa Reception Area",
      category: "Interior",
      image: inside,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 2,
      title: "Relaxation Room",
      category: "Interior",
      image: inside2,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 3,
      title: "Massage Room",
      category: "Interior",
      image: inside3,
      description: "Private massage room with ambient lighting",
    },
    {
      id: 4,
      title: "Relaxation Room",
      category: "Interior",
      image: inside4,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 5,
      title: "Massage room",
      category: "Interior",
      image: inside5,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 6,
      title: "Massage room",
      category: "Interior",
      image: inside6,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 7,
      title: "Relaxation Room",
      category: "Interior",
      image: inside7,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 8,
      title: "Relaxation Room",
      category: "Interior",
      image: inside8,
      description: "Premium spa products and treatments",
    },
    {
      id: 9,
      title: "Relaxation Room",
      category: "Interior",
      image: inside9,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 10,
      title: "Relaxation Room",
      category: "Interior",
      image: inside10,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 11,
      title: "Relaxation Room",
      category: "Interior",
      image: inside11,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 12,
      title: "Relaxation Room",
      category: "Interior",
      image: inside12,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 13,
      title: "Relaxation Room",
      category: "Interior",
      image: inside13,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 14,
      title: "Relaxation Room",
      category: "Exterior",
      image: inside14,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 15,
      title: "Relaxation Room",
      category: "Interior",
      image: inside16,
      description: "Elegant reception area with modern amenities",
    },
    {
      id: 16,
      title: "Relaxation Room",
      category: "Exterior",
      image: out,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 17,
      title: "Spa Reception Area",
      category: "Exterior",
      image: out1,
      description: "Elegant reception area with modern amenities",
    },
    {
      id: 18,
      title: "Relaxation Room",
      category: "Exterior",
      image: out2,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
    {
      id: 19,
      title: "Relaxation Room",
      category: "Exterior",
      image: outt,
      description: "Peaceful relaxation space for pre-treatment meditation",
    },
  ];

  const categories = ['All', 'Interior', 'Exterior'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <h2 className="section-title">Beautiful Skin Starts Here</h2>
        <p className="section-subtitle">
          Take a virtual tour of our luxurious spa facilities and see where your journey 
          to wellness and relaxation begins. Every corner is designed for your comfort and tranquility.
        </p>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image">
                <img src={image.image} alt={image.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                    <span className="category-tag">{image.category}</span>
                  </div>
                  <div className="view-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V8L15 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-cta">
          <div className="cta-content">
            <h3>Experience Our Spa in Person</h3>
            <p>Book a tour of our facilities and see firsthand the luxury and tranquility that awaits you.</p>
            <button className="btn">Schedule a Visit</button>
          </div>
          <div className="cta-image">
            <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Spa Experience" />
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="modal-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p className="modal-category">{selectedImage.category}</p>
              <p className="modal-description">{selectedImage.description}</p>
              <button className="btn">Book Treatment</button>
            </div>
          </div>
        </div>
      )}
      
      <div className="decorative-element large" style={{top: '30%', left: '-12%'}}></div>
      <div className="decorative-element medium" style={{bottom: '25%', right: '-10%'}}></div>
    </section>
  );
};

export default Gallery;