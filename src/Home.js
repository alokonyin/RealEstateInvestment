import React from 'react';

import './Home.css'
import skyline from './assets/images/nairobi_two.jpg';

function Home() {
    return (
      <div className="App">
        <main className="hero-section" style={{ backgroundImage: `url(${skyline})` }}>
          <h1>Welcome to RealEstateInvest</h1>
          <p>Your gateway to fractional real estate investments.</p>
          <button className="cta-button">Get Started</button>
        </main>
        <section className="second-section">
          <div className="card-container">
            <div className="card">
              <h3>Mission</h3>
              <p>To empower individuals to invest in high-value real estate with ease and confidence.</p>
            </div>
            <div className="card">
              <h3>Vision</h3>
              <p>To become the leading platform for fractional real estate investments globally.</p>
            </div>
            <div className="card">
              <h3>Values</h3>
              <p>Integrity, transparency, and innovation in every transaction we facilitate.</p>
            </div>
          </div>
        </section>
        <section className="investors-section">
          <h2>Venture Firms Backing Us</h2>
            <div className="investor-grid">
              <div className="investor-card">
                <img src="/assets/images/investor1.png" alt="Investor 1 Logo" />
                  <p>Investor 1</p>
              </div>
              <div className="investor-card">
                <img src="/assets/images/investor2.png" alt="Investor 2 Logo" />
                  <p>Investor 2</p>
              </div>
              <div className="investor-card">
                <img src="/assets/images/investor3.png" alt="Investor 3 Logo" />
                <p>Investor 3</p>
              </div>
              <div className="investor-card">
                <img src="/assets/images/investor4.png" alt="Investor 4 Logo" />
                <p>Investor 4</p>
              </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Home;
  