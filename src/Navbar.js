import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles for the navbar here

function Navbar() {
    const scrollToFooter = () => {const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior:'smooth' });
        }
    };
  return (
    <header className="App-header">
    <nav className="navbar">
      <div className="logo">Aloko</div>
      <ul className="nav-links">
        <li><Link to="/home">About Us</Link></li>
        <li><Link to="./properties">Properties</Link></li>
        {/* <li><a href="#properties">Properties</a></li> */}
        <li><button onClick={scrollToFooter} className='scroll-'>Contact Us</button></li>
      </ul>
      <div className="auth-buttons">
      <Link to="/signup" className="button sign-up">Sign Up</Link>
      <Link to="/signin" className="button sign-in">Sign In</Link>
      </div>
    </nav>
  </header>
  );
}

export default Navbar;
