import React from 'react';
import { Navigate } from 'react-router-dom';

// Protects routes that require authentication
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Check if the user is authenticated

  return token ? children : <Navigate to="/login" />; // Redirect if not authenticated
};

export default ProtectedRoute;
