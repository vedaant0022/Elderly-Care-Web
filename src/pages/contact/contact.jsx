import React from "react";
import Navbar from "../navbar/navbar"; // Import Navbar
import "./contact.scss"; // Import SCSS

const Contact = () => {
  return (
    <>
      <div className="about-container">
        <Navbar />

        <div className="about-header">
          <h1>Help Center</h1>
          <div className="btn-group">
            <button>Details</button>
            <button>FAQ</button>
            <button>Email us</button>
          </div>
        </div>

        <div className="about-card">
          {/* Card 1: Chat with Us */}
          <div className="card">
            <div className="card-icon">
              {/* SVG for Chat */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-chat"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a7 7 0 1 0 4.546 12.45L15 15l-1.95-2.905A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"/>
                <path d="M3 6h7a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1z"/>
              </svg>
            </div>
            <h3>Chat with us</h3>
            <p>Monday - Friday: 7AM - 7PM IST <br/>
            Saturday and Sunday: 24 hrs
            </p>
          </div>

          {/* Card 2: Email Us */}
          <div className="card">
            <div className="card-icon">
              {/* SVG for Email */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 0a.5.5 0 0 0-.447.276L8 8.618l6.447-4.342A.5.5 0 0 0 14 4H2zm13 1.082L8.553 9.11a.5.5 0 0 1-.553 0L1 5.082V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.082z"/>
              </svg>
            </div>
            <h3>Email us</h3>
            <p>Email: elderlycare@gmail.com <br/>We respond to emails within 1 business day.
            </p>
          </div>

          {/* Card 3: Call Us */}
          <div className="card">
            <div className="card-icon">
              {/* SVG for Call */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 1 .718-.196l2.9 1.055c.3.109.516.378.574.694l.5 2.617a.678.678 0 0 1-.262.684L6.587 7.058a11.72 11.72 0 0 0 5.392 5.392l1.076-1.076a.678.678 0 0 1 .684-.262l2.617.5c.316.058.585.274.694.574l1.055 2.9a.678.678 0 0 1-.196.718l-2.247 2.247a.678.678 0 0 1-.719.14A15.157 15.157 0 0 1 1.122 2.046a.678.678 0 0 1 .14-.719L3.654 1.328z"/>
              </svg>
            </div>
            <h3>Call us</h3>
            <p>+91 7058419833 <br/> Monday - Friday: 7AM - 4PM IST <br/> Saturday and Sunday: Closed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
