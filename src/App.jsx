import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/landingPage/landingPage'; // Import your LandingPage component
import ArchivePage from '../src/pages/paitentHistory/archeive'; // Import your ArchivePage component
import AboutUs from './pages/about/about';
import Faq from './pages/faq/faq';
import Contact from './pages/contact/contact';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Profile from './pages/profile/profile'; // Import your Profile component
import ProtectedRoute from '../src/components/ProtectedRoute.jsx' // Import ProtectedRoute component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile /> {/* This page will be accessible only after login */}
              </ProtectedRoute>
            } 
          />
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </Router>
  );
};

export default App;
