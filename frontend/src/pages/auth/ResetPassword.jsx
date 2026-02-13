//src/pages/auth/ResetPassword.jsx

import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { isEmail } from '../../utils/validation';

function ResetPassword() {
    const { handleResetPassword } = useAuth();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isEmail(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        try {
            await handleResetPassword(email);
            setMessage('Password reset link sent to your email.');
        } catch (error) {
            setMessage('Error sending reset link. Please try again.');
        }
    };

    return (
        <div className="reset-password">
            <h2>Reset Password</h2>

            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ResetPassword;
