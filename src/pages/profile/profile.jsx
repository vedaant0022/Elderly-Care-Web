// Profile.jsx
import React, { useEffect, useState } from 'react';
import './profile.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../navbar/navbar';
import Loader from '../loader/loader';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('authToken');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    console.log('Encrypted data stored:', storedToken);
    if (!token) {
        toast.error("No token stored");
        return;
  }

    // Fetch user data from the backend
    const fetchUserData = async () => {
      const id = localStorage.getItem('authToken')
    try {
      setLoading(true);
      const response = await axios.get(`https://elderlychild.onrender.com/user/${id}`, {

      });
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
}, [token, navigate]);

const handleLogout = () => {
  localStorage.removeItem('authToken'); // Clear token on logout
  toast.info('Logged out successfully!');
  navigate('/login'); // Redirect to login page
};

if (!user) {
  return <div>Loading...</div>; // Show loading while fetching data
}
if (loading) {
  return <Loader />; // Show loader while fetching data
}

return (
  <div className="profile-container">
    <Navbar />
    <div className="profile-content">
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>

  </div>
);
};

export default Profile;
