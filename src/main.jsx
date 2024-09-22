import React from 'react';
import ReactDOM from 'react-dom/client'; // or 'react-dom' if you're using older React versions
import App from './App'; // Adjust the path as necessary

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
