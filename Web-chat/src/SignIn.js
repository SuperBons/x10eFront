import React, { useState } from 'react';
import './SignIn.scss';
import logo from './LogoX.png';
import ForgotPasswordModal from './ForgotPassword'; 

function SignIn({ onSignIn, onSignUp }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        onSignIn();
    };

    const handleForgotPassword = (email) => {
        console.log('Email for password reset:', email);
        // Add your logic to handle the password reset here (e.g., API call)
    };

    return (
        <div className="sign-in-app">
            <div className="line-1 anim-typewriter">
                <p>Welcome to the best health chat bot</p>
            </div>
            <div className="backdrop">
                <div className="sign-in-container">
                    <h2 className="sign-in-title"></h2>
                    <p className="sign-in-subtitle">Sign-In</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="sign-in-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <input
                            type="password"
                            className="sign-in-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <div className="sign-in-form-group">
                            <input
                                type="checkbox"
                                className="sign-in-checkbox"
                            />
                            <label className="sign-in-checkbox-label">Remember me</label>
                            <a href="#" className="forgot-pass" onClick={() => setIsModalOpen(true)}>Forgot password?</a>
                        </div>
                        <button type="submit" className="sign-in-button">Sign In</button>
                        <button type="button" className="sign-up-button" onClick={onSignUp}>Sign Up</button>
                    </form>
                </div>
            </div>

            {/* Forgot Password Modal */}
            <ForgotPasswordModal
                show={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleForgotPassword}
            />
        </div>
    );
}

export default SignIn;