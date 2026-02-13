//src/pages/auth/Register.jsx 

import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { isEmail, isRequired, minLength } from '../../utils/validation';

function Register() {
    const { handleRegister } = useAuth();
    const [message, setMessage] = useState('');

    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isRequired(form.email) || !isEmail(form.email)) {
            setMessage('Please enter a valid email.');
            return;
        }
        if (!isRequired(form.password) || !minLength(form.password, 6)) {
            setMessage('Password must be at least 6 characters long.');
            return;
        }
        if (form.password !== form.confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        try {
            await handleRegister(form.email, form.password);
            setMessage('Registration successful! Please log in.');
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>

            {message && <p className="message">{message}</p>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;

