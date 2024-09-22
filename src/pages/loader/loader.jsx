// Loader.jsx
import React from 'react';
import { Audio } from 'react-loader-spinner';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <Audio
        height="100"
        width="100"
        color="#00BFFF"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
