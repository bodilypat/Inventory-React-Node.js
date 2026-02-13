//src/services/authService.js 

import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const resetPassword = async (email) => {
    const response = await axios.post(`${API_URL}/auth/reset-password`, { email });
    return response.data;
};

export const logout = () => {
    // Clear user data from local storage or state management
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export const setCurrentUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

