import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer" id='footer'>
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#properties">Properties</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#blogs">Blogs</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#terms">Terms and Conditions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#risk">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <div className="social-icons">
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="app-download">
              <div className="store-buttons">
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="app-button">
                <i className="fab fa-apple"></i> Download on the App Store
                </a>
                <a href="https://play.google.com/store/" target="_blank" rel="noopener noreferrer" className="app-button">
                  <i className="fab fa-google-play"></i> Get it on Google Play
                </a>
              </div>
      
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 RealEstateInvest. All rights reserved.</p>
        </div>
      </footer>
      
    );
}
export default Footer;