import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Spa Reception Area',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Elegant reception area with modern amenities'
    },
    {
      id: 2,
      title: 'Relaxation Room',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Peaceful relaxation space for pre-treatment meditation'
    },
    {
      id: 3,
      title: 'Massage Room',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Private massage room with ambient lighting'
    },
    {
      id: 4,
      title: 'Aromatherapy Setup',
      category: 'Treatment',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Essential oils and aromatherapy equipment'
    },
    {
      id: 5,
      title: 'Spa Garden',
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Tranquil garden area for outdoor relaxation'
    },
    {
      id: 6,
      title: 'Hydrotherapy Pool',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Therapeutic hydrotherapy pool'
    },
    {
      id: 7,
      title: 'Steam Room',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Detoxifying steam room facility'
    },
    {
      id: 8,
      title: 'Product Display',
      category: 'Products',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Premium spa products and treatments'
    }
  ];

  const categories = ['All', 'Interior', 'Treatment', 'Facilities', 'Products', 'Exterior'];
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