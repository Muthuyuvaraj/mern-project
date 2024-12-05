import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data.message === "Success") {
                    localStorage.setItem("employees", JSON.stringify(result.data.user));
                    navigate('/Dashboard');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container-">
            {/* Left Panel */}
            <div className="left-panel">
                <i className="fas fa-plus" style={{ fontSize: '100px' }}></i>
                <h1>Welcome back!!</h1>
                <p>"To keep connected with us, please<br />login with your personal info"</p>
                <i className="fas fa-fire" style={{ fontSize: '100px', marginTop: '20px' }}></i>
            </div>

            {/* Right Panel */}
            <div className="auth-right">
                <h2>Login</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-input-group">
                        <label htmlFor="authEmailOrUsername"></label>
                        <input
                            type="text"
                            id="authEmailOrUsername"
                            placeholder="Enter your username or email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="auth-input-group">
                        <label htmlFor="authPassword"></label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="authPassword"
                                placeholder="Enter your password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ paddingRight: '40px' }}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <div className="auth-remember-me">
                        <input
                            type="checkbox"
                            id="authRememberMe"
                        />
                        <label htmlFor="authRememberMe">Remember me</label>
                    </div>

                    <button type="submit" className="auth-submit-btn">
                        Login
                    </button>

                    <button type="button" className="auth-google-btn">
                        Continue with Google
                    </button>
                </form>

                <p className="auth-signup-link">
                    New user? <span
                        onClick={() => navigate('/registration')}
                        style={{ cursor: 'pointer', color: '#4db6ac', textDecoration: 'underline' }}
                    >
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;
