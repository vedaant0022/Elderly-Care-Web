import React from "react";
import Navbar from "../navbar/navbar"; // Import Navbar
import "./about.scss"; // Import CSS

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <Navbar />

        <div className="about-header">
          <h1>About us</h1>
          <div className="btn-group">
            <button>Details</button>
            <button>FAQ</button>
            <button>Email us</button>
          </div>
        </div>

        <div className="titel">
          <h2>
            We’re committed to enrich the lives of elderly individuals through
            compassionate and dedicated care.
          </h2>
        </div>

        <div className="about-story">
          <p>
            Founded with a commitment to enhancing the well-being and quality of
            life for seniors, we provide personalized companionship services
            that cater to the unique needs and preferences of each individual.
          </p>
          <h2>Our Story</h2>
          <p>
            Elderly Care was established with a vision to create a nurturing
            environment for elderly adults, ensuring they receive not only the
            support they need but also the companionship they deserve. We
            recognized a growing need for more personalized care solutions and
            set out to bridge that gap by offering services that prioritize both
            emotional and physical well-being.
          </p>

          <h2>Our Philosophy</h2>
          <p>
            We believe that every senior deserves to live with dignity, respect,
            and joy. Our approach is centered around creating meaningful
            connections and fostering a sense of belonging. We understand that
            each person has their own story, interests, and needs, and we tailor
            our services to ensure that each client's life is enriched and
            fulfilled.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
