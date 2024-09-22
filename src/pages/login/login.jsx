import React, { useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth'; // Import the login function
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../loader/loader';
import CloseButton from '../../components/clossBtn';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSign = () => {
        navigate('/register');
    };

    const handleLogin = async (e) => {
        if (!username) {
            toast.error('Please enter a username');
            return;
        }
        if (!password) {
            toast.error('Please enter a password'); 
            return;
        }
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://elderlychild.onrender.com/login', {
                username,
                password
            });
    
            if (response.status === 200) {
                console.log(response);
                const token = response.data.id;
                localStorage.setItem('authToken', token);
                toast.success('Login successful!');
                const storedToken = localStorage.getItem('authToken');
                console.log('Encrypted data stored:', storedToken);
                navigate('/'); 
            } else if (response.status === 400) {
                toast.success('Username or password incorrect'); 
            } else if (response.status === 404) {
                toast.error('User does not exist, Please Signup'); 
            }
        } catch (error) {
            console.error("Error during login:", error.response ? error.response.data : error.message);
            
            if (error.response && error.response.status === 400) {
                toast.error('Username or password incorrect'); 
            } else if (error.response && error.response.status === 404) {
                toast.error('User does not exist, Please Signup');
            } else {
                toast.error('Login failed. Please try again.'); 
            }
        } finally {
            setLoading(false); 
        }
    };

    if (loading) {
        return <Loader />; 
      }

    return (
        <div className="background">
            <CloseButton/>
            <div className="card">
                <div className="card-top">
                    <p className="card-top-text">Don't have an account?</p>
                    <button className="card-top-button" onClick={handleSign}>Sign up</button>
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
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="card-bottom-btn" onClick={handleLogin}>Login</button>
                    {error && <p className="error-message">{error}</p>}
                    <p className="forgot-password">Forgot your password?</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
