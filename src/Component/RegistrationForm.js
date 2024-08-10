import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegistrationForm.css';

function RegistrationPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, username, password };

        try {
            const response = await axios.post('http://localhost:9001/register', user);
            console.log('User registered:', response.data);
            navigate('/login'); // Navigate to the Login page
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <div className="registration-container">
            <div className="image-card">
                <img src="bg7.jpg" alt="Description of image" />
            </div>
            <div className="registration-card">
                <h2 className="registration-title">Create Account</h2>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <i className="fas fa-envelope input-icon"></i>
                        <input
                            className="registration-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <i className="fas fa-user input-icon"></i>
                        <input
                            className="registration-input"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <i className="fas fa-lock input-icon"></i>
                        <input
                            className="registration-input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="registration-checkbox-container">
                        <input
                            type="checkbox"
                            id="age-confirmation"
                            className="registration-checkbox"
                            required
                        />
                        <label htmlFor="age-confirmation" className="registration-checkbox-label">
                            I am at least 16 years old and accept the <a href="#terms" className="registration-link">Terms of Use</a>.
                        </label>
                    </div>

                    <div className="registration-checkbox-container">
                        <input
                            type="checkbox"
                            id="terms-conditions"
                            className="registration-checkbox"
                            required
                        />
                        <label htmlFor="terms-conditions" className="registration-checkbox-label">
                            I accept the <a href="#terms-conditions" className="registration-link">Privacy Policy</a>
                        </label>
                    </div>

                    <button type="submit" className="registration-submit-btn">Register</button>
                </form>

                <div className="registration-footer">
                    <p className="registration-footer-text">
                        Already have an account? <Link to="/login" className="registration-link">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
