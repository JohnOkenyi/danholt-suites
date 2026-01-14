'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/images/hotel-exterior.jpg',
    '/images/deluxe-room.jpg',
    '/images/restaurant.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <Header />
      
      {/* Hero Section with Intro */}
      <section className="hero-intro">
        <div className="hero-accent-bar"></div>
        <div className="hero-intro-content">
          <h1 className="hero-intro-title">Here is a tribute to good living!</h1>
          <p className="hero-intro-subtitle">True luxury isn't designed.</p>
          <p className="hero-intro-description">It's felt.</p>
          <p className="hero-intro-text">
            It's the warmth of a genuine welcome. It's the anticipation of your unspoken needs. It's the thousand invisible gestures that make you feel at home.
          </p>
          
          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-item">
              <h3>Luxury Rooms</h3>
            </div>
            <div className="feature-item">
              <h3>Nigerian Cuisine</h3>
            </div>
            <div className="feature-item">
              <h3>Sports Facilities</h3>
            </div>
            <div className="feature-item">
              <h3>24/7 Electricity</h3>
            </div>
            <div className="feature-item">
              <h3>Free WiFi</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Anticipated Needs Section */}
      <section className="anticipated-needs">
        <div className="anticipated-accent-bar"></div>
        <div className="anticipated-content">
          <h2>Where every need is anticipated.</h2>
          <p>Before you even ask.</p>
        </div>
      </section>

      {/* Service Statement Section */}
      <section className="service-statement">
        <div className="service-accent-bar"></div>
        <div className="service-content">
          <p className="service-text">
            At Danholt Suites, service
            <br />
            stops imitating and starts caring.
          </p>
        </div>
      </section>

      {/* Promise Section with Feature Cards */}
      <section className="promise-section">
        <div className="promise-accent-bar"></div>
        <div className="promise-content">
          <h2 className="promise-title">The Danholt Suites Promise.</h2>
          <p className="promise-subtitle">Excellence in every detail.</p>
          
          {/* Feature Cards Grid */}
          <div className="promise-cards">
            <div className="promise-card">
              <h3>Personalized Service</h3>
              <p>Every preference remembered</p>
            </div>
            <div className="promise-card">
              <h3>24/7 Concierge</h3>
              <p>Always at your service</p>
            </div>
            <div className="promise-card">
              <h3>Seamless Experience</h3>
              <p>From booking to checkout</p>
            </div>
            <div className="promise-card">
              <h3>Exclusive Access</h3>
              <p>Members-only privileges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section with Image Cards */}
      <section className="discover-section">
        <div className="discover-accent-bar"></div>
        <div className="discover-content">
          <p className="discover-label">DISCOVER</p>
          <h2 className="discover-title">Crafted Experiences</h2>
          
          {/* Image Cards */}
          <div className="experience-cards">
            <Link href="/rooms" className="experience-card">
              <div className="experience-card-image" style={{backgroundImage: 'url(/images/rooms.jpg)'}}></div>
              <div className="experience-card-content">
                <h3>Rooms & Suites</h3>
                <p>Luxurious suites with modern facilities in a serene environment</p>
                <span className="explore-link">Explore</span>
              </div>
            </Link>
            
            <Link href="/restaurant" className="experience-card">
              <div className="experience-card-image" style={{backgroundImage: 'url(/images/restaurant.jpg)'}}></div>
              <div className="experience-card-content">
                <h3>Restaurant & Bar</h3>
                <p>Delicious Nigerian cuisines and exotic drinks</p>
                <span className="explore-link">Explore</span>
              </div>
            </Link>
            
            <Link href="/facilities" className="experience-card">
              <div className="experience-card-image" style={{backgroundImage: 'url(/images/facilities.jpg)'}}></div>
              <div className="experience-card-content">
                <h3>Sports & Facilities</h3>
                <p>World class 5-aside football pitch and conference hall</p>
                <span className="explore-link">Explore</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="evolution-section">
        <div className="evolution-accent-bar"></div>
        <div className="evolution-content">
          <h2>This is the next evolution of hospitality,</h2>
          <p className="evolution-subtitle">where luxury becomes personal.</p>
          
          <p className="evolution-text">The future of hospitality isn't impersonal.</p>
          <p className="evolution-text">It's human.</p>
          
          <Link href="/booking" className="book-button">
            Book Your Stay
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;