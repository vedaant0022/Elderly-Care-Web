// In Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const token = localStorage.getItem('authToken');

  const handleSign = () => {
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><h1>Elderly Care</h1></Link>
      </div>
      
      <ul className={`navbar-links ${isNavOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/">Support</Link></li>
        
        {token ? (
          <>
            <li><button className="sign-in-btn" onClick={handleProfile}>Profile</button></li>
          </>
        ) : (
          <li><button className="sign-in-btn" onClick={handleSign}>Sign in</button></li>
        )}
      </ul>

      <div className="hamburger" onClick={toggleNav}>
        
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
