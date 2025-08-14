import React from 'react';
import { BookingProvider } from './contexts/BookingContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Massages from './components/Massages';
import Treatments from './components/Treatments';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingPopup from './components/BookingPopup';
import './App.css';

function App() {
  return (
    <BookingProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Services />
        <Massages />
        <Treatments />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
        <BookingPopup />
      </div>
    </BookingProvider>
  );
}

export default App;