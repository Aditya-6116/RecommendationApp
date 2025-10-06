import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerWithSearch from "../components/bannersearch";
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Banner with Search */}
      <BannerWithSearch 
        onStartShopping={() => navigate('/products')}
      />

      <hr className="section-divider" />

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p className="about-tagline">We Make Online Shopping Smarter.</p>
        <p className="about-description">
          At Buy Genie, we believe shopping should be effortless, intuitive, and personalized.
        </p>
        <p className="about-detail">
          Our AI engine studies your behaviour - from your browsing habits to your past purchases - 
          and brings you products that truly match your taste and lifestyle
        </p>
        <p className="about-conclusion">
          We're not just selling products; we're building a personal connection between you and what you love.
        </p>
      </section>

      {/* Why Choose BuyGenie Section */}
      <section className="features-section">
        <h2>Why choose BuyGenie?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>AI PERSONALISATION</h3>
            <p>Get intelligent recommendations powered by our engine learning your preferences to find the best products for you</p>
          </div>
          <div className="feature-card">
            <h3>Smart Search</h3>
            <p>Get precise results that matter to you - showing what's most relevant based on your preferences</p>
          </div>
          <div className="feature-card">
            <h3>AI Chat Support</h3>
            <p>Talk to your personal shopping assistant for instant help and expert recommendations</p>
          </div>
          <div className="feature-card">
            <h3>Smart dashboard</h3>
            <p>Track orders, manage wishlists, and receive personalized offers easily</p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="cta-section">
        <h2>Get Started Now</h2>
        <button className="btn-primary" onClick={() => navigate('/register')}>Sign Up</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        {/* footer content unchanged */}
      </footer>
    </div>
  );
};

export default HomePage;
