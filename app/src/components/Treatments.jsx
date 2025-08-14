import React from "react";
import { useBooking } from '../contexts/BookingContext';
import "./Treatments.css";

const Treatments = () => {
  const { openBookingPopup } = useBooking();

  const treatments = [
    {
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Massage Therapy",
      description:
        "Professional therapeutic massage treatments designed to relieve stress, improve circulation, and promote overall wellness.",
      features: [
        "Deep tissue massage",
        "Swedish massage",
        "Hot stone therapy",
        "Aromatherapy",
      ],
      icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Skin Care",
      description:
        "Comprehensive facial treatments and skin care services to rejuvenate and nourish your skin for a healthy, glowing complexion.",
      features: [
        "Anti-aging facials",
        "Deep cleansing",
        "Hydrating treatments",
        "Skin analysis",
      ],
      icon: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Body Treatments",
      description:
        "Full-body wellness treatments including body wraps, scrubs, and detoxification therapies for complete rejuvenation.",
      features: [
        "Body wraps",
        "Exfoliating scrubs",
        "Detox treatments",
        "Moisturizing therapy",
      ],
      icon: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      title: "Waxing",
      description:
        "Professional waxing services using high-quality products for smooth, long-lasting results with minimal discomfort.",
      features: [
        "Full body waxing",
        "Facial waxing",
        "Brazilian waxing",
        "Eyebrow shaping",
      ],
      icon: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  const additionalServices = [
    {
      title: "Pain Relief Massage",
      description:
        "Specialized massage techniques targeting chronic pain and muscle tension.",
      duration: "60 minutes",
      benefits: [
        "Reduces chronic pain",
        "Improves mobility",
        "Muscle tension relief",
      ],
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Deep Tissue Massage",
      description:
        "Intensive massage therapy focusing on deeper layers of muscle tissue.",
      duration: "75 minutes",
      benefits: [
        "Breaks down scar tissue",
        "Reduces inflammation",
        "Improves posture",
      ],
      image:
        "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Dry Massage",
      description:
        "Traditional dry massage technique without oils for muscle stimulation.",
      duration: "45 minutes",
      benefits: ["Improves circulation", "Energizes body", "Muscle toning"],
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const handleBookNow = (treatmentName) => {
    openBookingPopup(treatmentName);
  };

  return (
    <section className="treatments section">
      <div className="container">
        <h2 className="section-title">Making You More Stylish</h2>
        <p className="section-subtitle">
          Our comprehensive range of treatments combines traditional techniques
          with modern wellness practices to help you look and feel your absolute
          best.
        </p>

        <div className="treatments-grid">
          {treatments.map((treatment, index) => (
            <div key={index} className="treatment-card">
              <div className="treatment-image">
                <img src={treatment.image} alt={treatment.title} />
                <div className="treatment-overlay">
                  <div className="treatment-icon">
                    <img src={treatment.icon} alt={`${treatment.title} icon`} />
                  </div>
                </div>
              </div>

              <div className="treatment-content">
                <h3>{treatment.title}</h3>
                <p className="treatment-description">{treatment.description}</p>

                <ul className="treatment-features">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <button className="btn treatment-btn" onClick={() => handleBookNow(treatment.title)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="additional-services">
          <h3 className="services-title">Specialized Massage Services</h3>
          <div className="services-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-duration">{service.duration}</div>
                </div>

                <div className="service-content">
                  <div className="service-header">
                    <h4>{service.title}</h4>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <div className="service-benefits">
                    <h5>Benefits:</h5>
                    <ul>
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn btn-outline service-book-btn" onClick={() => handleBookNow(service.title)}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="decorative-element large"
        style={{ top: "25%", right: "-12%" }}
      ></div>
      <div
        className="decorative-element medium"
        style={{ bottom: "20%", left: "-10%" }}
      ></div>
    </section>
  );
};

export default Treatments;