import axios from 'axios';

const API_URL = 'https://elderlychild.onrender.com';

export const registerUser = async (username, phoneNumber, password) => {
    return await axios.post(`${API_URL}/signin`, {
        username,
        phoneNumber,
        password,
    });
};

export const loginUser = async (username, password) => {
    return await axios.post(`${API_URL}/login`, {
        username,
        password,
    });
};
