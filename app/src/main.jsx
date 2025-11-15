import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Set up SEO meta tags
const setupSEO = () => {
  // Basic meta tags
  document.title = 'Solace Wellness Spa - Luxury Spa & Massage Therapy | Ayurvedic Treatments';
  
  // Meta description
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = 'Experience ultimate relaxation at Solace Wellness Spa in Hyderabad. Premium massage therapy, Ayurvedic treatments, aromatherapy, and luxury spa services. Book your appointment today for rejuvenation & wellness.';
  document.head.appendChild(metaDescription);

  // Meta keywords
  const metaKeywords = document.createElement('meta');
  metaKeywords.name = 'keywords';
  metaKeywords.content = 'spa hyderabad, massage therapy, ayurvedic massage, aromatherapy, wellness spa, luxury spa, deep tissue massage, swedish massage, pain relief massage, chocolate massage, body treatments, skin care, waxing, relaxation, rejuvenation, stress relief, telangana spa';
  document.head.appendChild(metaKeywords);

  // Author
  const metaAuthor = document.createElement('meta');
  metaAuthor.name = 'author';
  metaAuthor.content = 'Solace Wellness Spa';
  document.head.appendChild(metaAuthor);

  // Viewport (already exists but ensuring it's set)
  let viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(viewport);
  }

  // Charset (already exists but ensuring it's set)
  let charset = document.querySelector('meta[charset]');
  if (!charset) {
    charset = document.createElement('meta');
    charset.setAttribute('charset', 'UTF-8');
    document.head.appendChild(charset);
  }

  // Robots
  const metaRobots = document.createElement('meta');
  metaRobots.name = 'robots';
  metaRobots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
  document.head.appendChild(metaRobots);

  // Language
  const metaLanguage = document.createElement('meta');
  metaLanguage.name = 'language';
  metaLanguage.content = 'English';
  document.head.appendChild(metaLanguage);

  // Geo tags
  const metaGeoRegion = document.createElement('meta');
  metaGeoRegion.name = 'geo.region';
  metaGeoRegion.content = 'IN-TG';
  document.head.appendChild(metaGeoRegion);

  const metaGeoPlacename = document.createElement('meta');
  metaGeoPlacename.name = 'geo.placename';
  metaGeoPlacename.content = 'Hyderabad, Telangana, India';
  document.head.appendChild(metaGeoPlacename);

  const metaGeoPosition = document.createElement('meta');
  metaGeoPosition.name = 'geo.position';
  metaGeoPosition.content = '17.405222;78.480361';
  document.head.appendChild(metaGeoPosition);

  const metaICBM = document.createElement('meta');
  metaICBM.name = 'ICBM';
  metaICBM.content = '17.405222, 78.480361';
  document.head.appendChild(metaICBM);

  // Open Graph tags for social media
  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.content = 'Solace Wellness Spa - Luxury Spa & Massage Therapy in Hyderabad';
  document.head.appendChild(ogTitle);

  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute('property', 'og:description');
  ogDescription.content = 'Experience ultimate relaxation at Solace Wellness Spa in Hyderabad. Premium massage therapy, Ayurvedic treatments, aromatherapy, and luxury spa services.';
  document.head.appendChild(ogDescription);

  const ogType = document.createElement('meta');
  ogType.setAttribute('property', 'og:type');
  ogType.content = 'website';
  document.head.appendChild(ogType);

  const ogUrl = document.createElement('meta');
  ogUrl.setAttribute('property', 'og:url');
  ogUrl.content = window.location.href;
  document.head.appendChild(ogUrl);

  const ogImage = document.createElement('meta');
  ogImage.setAttribute('property', 'og:image');
  ogImage.content = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  document.head.appendChild(ogImage);

  const ogImageAlt = document.createElement('meta');
  ogImageAlt.setAttribute('property', 'og:image:alt');
  ogImageAlt.content = 'Solace Wellness Spa - Luxury Massage and Spa Treatments in Hyderabad';
  document.head.appendChild(ogImageAlt);

  const ogSiteName = document.createElement('meta');
  ogSiteName.setAttribute('property', 'og:site_name');
  ogSiteName.content = 'Solace Wellness Spa';
  document.head.appendChild(ogSiteName);

  const ogLocale = document.createElement('meta');
  ogLocale.setAttribute('property', 'og:locale');
  ogLocale.content = 'en_US';
  document.head.appendChild(ogLocale);

  // Twitter Card tags
  const twitterCard = document.createElement('meta');
  twitterCard.name = 'twitter:card';
  twitterCard.content = 'summary_large_image';
  document.head.appendChild(twitterCard);

  const twitterTitle = document.createElement('meta');
  twitterTitle.name = 'twitter:title';
  twitterTitle.content = 'Solace Wellness Spa - Luxury Spa & Massage Therapy in Hyderabad';
  document.head.appendChild(twitterTitle);

  const twitterDescription = document.createElement('meta');
  twitterDescription.name = 'twitter:description';
  twitterDescription.content = 'Experience ultimate relaxation at Solace Wellness Spa in Hyderabad. Premium massage therapy, Ayurvedic treatments, aromatherapy, and luxury spa services.';
  document.head.appendChild(twitterDescription);

  const twitterImage = document.createElement('meta');
  twitterImage.name = 'twitter:image';
  twitterImage.content = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  document.head.appendChild(twitterImage);

  const twitterImageAlt = document.createElement('meta');
  twitterImageAlt.name = 'twitter:image:alt';
  twitterImageAlt.content = 'Solace Wellness Spa - Luxury Massage and Spa Treatments in Hyderabad';
  document.head.appendChild(twitterImageAlt);

  // Business/Local SEO tags
  const businessName = document.createElement('meta');
  businessName.name = 'business:contact_data:locality';
  businessName.content = 'Hyderabad';
  document.head.appendChild(businessName);

  const businessRegion = document.createElement('meta');
  businessRegion.name = 'business:contact_data:region';
  businessRegion.content = 'Telangana';
  document.head.appendChild(businessRegion);

  const businessCountry = document.createElement('meta');
  businessCountry.name = 'business:contact_data:country_name';
  businessCountry.content = 'India';
  document.head.appendChild(businessCountry);

  const businessPhone = document.createElement('meta');
  businessPhone.name = 'business:contact_data:phone_number';
  businessPhone.content = '+91 8121682010';
  document.head.appendChild(businessPhone);

  const businessEmail = document.createElement('meta');
  businessEmail.name = 'business:contact_data:email';
  businessEmail.content = 'solacewellnessspa71@gmail.com';
  document.head.appendChild(businessEmail);

  // Theme color for mobile browsers
  const themeColor = document.createElement('meta');
  themeColor.name = 'theme-color';
  themeColor.content = '#d4af37';
  document.head.appendChild(themeColor);

  // Apple mobile web app tags
  const appleMobileCapable = document.createElement('meta');
  appleMobileCapable.name = 'apple-mobile-web-app-capable';
  appleMobileCapable.content = 'yes';
  document.head.appendChild(appleMobileCapable);

  const appleMobileStatusBar = document.createElement('meta');
  appleMobileStatusBar.name = 'apple-mobile-web-app-status-bar-style';
  appleMobileStatusBar.content = 'black-translucent';
  document.head.appendChild(appleMobileStatusBar);

  const appleMobileTitle = document.createElement('meta');
  appleMobileTitle.name = 'apple-mobile-web-app-title';
  appleMobileTitle.content = 'Solace Spa';
  document.head.appendChild(appleMobileTitle);

  // Microsoft tiles
  const msApplicationTileColor = document.createElement('meta');
  msApplicationTileColor.name = 'msapplication-TileColor';
  msApplicationTileColor.content = '#d4af37';
  document.head.appendChild(msApplicationTileColor);

  // Canonical URL
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = window.location.href;
  document.head.appendChild(canonical);

  // Preconnect to external domains for performance
  const preconnectUnsplash = document.createElement('link');
  preconnectUnsplash.rel = 'preconnect';
  preconnectUnsplash.href = 'https://images.unsplash.com';
  document.head.appendChild(preconnectUnsplash);

  const preconnectWhatsApp = document.createElement('link');
  preconnectWhatsApp.rel = 'preconnect';
  preconnectWhatsApp.href = 'https://wa.me';
  document.head.appendChild(preconnectWhatsApp);

  const preconnectGoogleMaps = document.createElement('link');
  preconnectGoogleMaps.rel = 'preconnect';
  preconnectGoogleMaps.href = 'https://www.google.com';
  document.head.appendChild(preconnectGoogleMaps);

  // JSON-LD Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SpaOrBeautySalon",
    "name": "Solace Wellness Spa",
    "description": "Premium luxury spa in Hyderabad offering massage therapy, Ayurvedic treatments, aromatherapy, and wellness services for ultimate relaxation and rejuvenation.",
    "url": window.location.origin,
    "telephone": "+91 8121682010",
    "email": "solacewellnessspa71@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.405222",
      "longitude": "78.480361"
    },
    "openingHours": [
      "Mo-Fr 09:00-21:00",
      "Sa-Su 09:00-20:00"
    ],
    "priceRange": "₹₹₹",
    "image": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "sameAs": [
      "https://wa.me/918121682010"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Spa Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ayurvedic Massage",
            "description": "Traditional Ayurvedic massage using warm herbal oils"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aromatherapy",
            "description": "Therapeutic massage using essential oils"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Swedish Massage",
            "description": "Classic relaxation massage for ultimate wellness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Tissue Massage",
            "description": "Intensive massage for deep muscle tension relief"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(structuredData);
  document.head.appendChild(scriptTag);

  // Set HTML lang attribute
  document.documentElement.lang = 'en';
};

// Call SEO setup function
setupSEO();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)