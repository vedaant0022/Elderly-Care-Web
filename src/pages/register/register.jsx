import React, { useState } from 'react';
import './register.scss';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../api/auth'; // Import the register function
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../loader/loader';
import CloseButton from '../../components/clossBtn';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSign = () => {
        navigate('/login');
    };

    const handleRegister = async (e) => {
        function validatePhoneNumber(phone) {
            const phoneRegex = /^\d{10}$/;
            return phoneRegex.test(phone);
        }
    
        // Input validation
        if (!username) {
            toast.error('Please enter a username');
            return;
        }
        if (!validatePhoneNumber(phoneNumber)) { // Ensure you're checking the correct variable
            toast.error('Please enter a valid phone number');
            return;
        }
        if (!password) {
            toast.error('Please enter a password'); // Corrected message
            return;
        }
    
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await axios.post('https://elderlychild.onrender.com/signin', {
                username,
                phoneNumber,
                password
            });
    
            if (response.status === 201) {
                toast.success('Registration successful!');
                navigate('/login'); 
            }
        } catch (error) {
            console.error("Error during signup:", error.response ? error.response.data : error.message);
    
            // Handle specific error status
            if (error.response && error.response.status === 400) {
                toast.error('User already exists'); // Show toast for 400 error
            } else {
                toast.error('Registration failed. Please try again.'); // General error handling
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    if (loading) {
        return <Loader />; // Show loader while processing
      }

    return (
        <div className="background">
            <CloseButton/>

            <div className="card">
                <div className="card-top">
                    <p className="card-top-text">Already have an account?</p>
                    <button className="card-top-button" onClick={handleSign}>Sign in</button>
                    <h1>WELCOME</h1>
                </div>
                <div className="card-bottom">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="input-field"
                        type="number"
                        placeholder="Phone No."
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        className="input-field"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="card-bottom-btn" onClick={handleRegister}>Sign Up</button>
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default Register;
