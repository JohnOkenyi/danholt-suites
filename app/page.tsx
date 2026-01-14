'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-accent-bar"></div>
        <div className="hero-content">
          <h1>Here is a tribute to good living!</h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-accent-bar"></div>
        <div className="philosophy-content">
          <p className="philosophy-title">True luxury isn't designed.</p>
          <p className="philosophy-subtitle">It's felt.</p>
          <p className="philosophy-text">
            It's the warmth of a genuine welcome. It's the anticipation of your unspoken needs. It's the thousand invisible gestures that make you feel at home.
          </p>
          
          {/* Features */}
          <div className="features-list">
            <div className="feature">Luxury Rooms</div>
            <div className="feature">Nigerian Cuisine</div>
            <div className="feature">Sports Facilities</div>
            <div className="feature">24/7 Electricity</div>
            <div className="feature">Free WiFi</div>
          </div>
        </div>
      </section>

      {/* Anticipated Section */}
      <section className="anticipated-section">
        <div className="anticipated-accent-bar"></div>
        <div className="anticipated-content">
          <h2>Where every need is anticipated.</h2>
          <p>Before you even ask.</p>
        </div>
      </section>

      {/* Service Section */}
      <section className="service-section">
        <div className="service-accent-bar"></div>
        <div className="service-content">
          <p>At Danholt Suites, service</p>
          <p>stops imitating and starts caring.</p>
        </div>
      </section>

      {/* Promise Section */}
      <section className="promise-section">
        <div className="promise-accent-bar"></div>
        <div className="promise-content">
          <h2>The Danholt Suites Promise.</h2>
          <p className="promise-subtitle">Excellence in every detail.</p>
          
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

      {/* Discover Section */}
      <section className="discover-section">
        <div className="discover-accent-bar"></div>
        <div className="discover-content">
          <p className="discover-label">DISCOVER</p>
          <h2>Crafted Experiences</h2>
          
          <div className="experience-cards">
            <Link href="/rooms" className="experience-card">
              <div className="card-image rooms-image"></div>
              <div className="card-overlay">
                <h3>Rooms & Suites</h3>
                <p>Luxurious suites with modern facilities in a serene environment</p>
                <span className="explore">Explore</span>
              </div>
            </Link>
            
            <Link href="/restaurant" className="experience-card">
              <div className="card-image restaurant-image"></div>
              <div className="card-overlay">
                <h3>Restaurant & Bar</h3>
                <p>Delicious Nigerian cuisines and exotic drinks</p>
                <span className="explore">Explore</span>
              </div>
            </Link>
            
            <Link href="/facilities" className="experience-card">
              <div className="card-image facilities-image"></div>
              <div className="card-overlay">
                <h3>Sports & Facilities</h3>
                <p>World class 5-aside football pitch and conference hall</p>
                <span className="explore">Explore</span>
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
          <p>where luxury becomes personal.</p>
          
          <p className="future-text">The future of hospitality isn't impersonal.</p>
          <p>It's human.</p>
          
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