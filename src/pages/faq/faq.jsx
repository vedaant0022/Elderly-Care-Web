import React from "react";
import Navbar from "../navbar/navbar"; // Import Navbar
import "./faq.scss"; // Import CSS

const Faq = () => {
  return (
    <>
      <div className="about-container">
        <Navbar />

        <div className="faq-header">
          <h1>Help Center</h1>
          <div className="btn-group">
            <button>Details</button>
            <button>FAQ</button>
            <button>Email us</button>
          </div>
        </div>
        <div className="faq-titel">
          {" "}
          <h1>Frequently asked questions</h1>
        </div>
        <div className="faq-story">
          <h2>General Faq</h2>
          <p>
            1.What kind of medical data do you store? <br />
            We store medical records, test results, prescriptions, and health
            history. <br />
            2.How can I access my medical data? <br />
            Log into your secure account to view your records anytime. <br />
            3.Can I update or add information to my medical records? <br />
            Yes, you can update certain details and add new health information.{" "}
            <br />
            4. Is there a fee to store or access my medical data? <br /> Basic
            storage is free. Premium features may have additional costs. <br />
            5.How can I share my medical records with healthcare providers?{" "}
            <br />
            Share securely via encrypted links or by printing a summary.
          </p>
          <h2>Privacy and Security</h2>
          <p>
            1.How is my medical data kept secure? <br />
            We use encryption and follow strict security standards to protect
            your data. <br /> 2. Who can access my medical records? <br />
            Only you and those you authorize can access your records. <br /> 3.
            What happens if there is a data breach? <br />
            You will be notified immediately, and we will take action to secure
            your data. <br />
            4.How does the website comply with HIPAA (or other relevant
            regulations)? <br />
            We follow HIPAA and other regulations to ensure data privacy and
            security. <br />
            5.Can I delete my medical data? <br />
            Yes, you can delete your data at any time through your account
            settings.
          </p>
          <h2>Technical Support</h2>
          <p>
            1. What do I do if I forget my login information? <br />
            Use the “Forgot Password” link or contact support for help. <br />{" "}
            2.What devices can I use to access the website? <br />
            Access on desktop, tablet, or mobile. <br /> 3. Apps are also
            available. Is there customer support available? <br /> Yes, 24/7
            support is available via phone, email, or chat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Faq;
