import React, { useEffect } from 'react';
import './landingPage.scss'; // Import the SCSS file
import Navbar from '../navbar/navbar';


const LandingPage = () => {


  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="#support">Support</a></li>
            <li style={{ paddingLeft: "20px" }}><a href="/faq">Help Centre</a></li>
            <li style={{ paddingLeft: "20px" }}><a href="/contact">Contact us</a></li>
            <li><a href="#account">Account</a></li>
            <li style={{ paddingLeft: "20px" }}><a href="/login">Login</a></li>
            <li style={{ paddingLeft: "20px" }}><a href="#dashboard">Dashboard</a></li>
            <li><a href="/archive">Archive</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
       <Navbar/>
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Helping you stay healthy and independent</h1>
          <p className="hero-description">
            We strive to bring a comprehensive approach to designing an Elderly Care Companion, a technology-based solution to enhance the quality of life for the aging population. We’re committed to enriching the lives of elderly individuals through compassionate and dedicated care.
          </p>
          <div className="hero-circle"></div>
        </section>

        {/* About Company Section */}
        <section className="about-company-section">
          <div className="about-title">
            <h2>About Company</h2>
          </div>
          <div className="about-body">
            <p>
              Founded with a commitment to enhancing the well-being and quality of life for seniors, we provide personalized companionship services that cater to the unique needs and preferences of each individual.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
