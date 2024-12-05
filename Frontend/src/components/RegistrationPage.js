import './RegistrationPage.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function RegistrationPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isEmailExists, setIsEmailExists] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = async (e) => {
        const value = e.target.value;
        setEmail(value);

        // Check if email contains '@'
        if (!value.includes("@")) {
            setEmailError("Email must contain '@'.");
            setIsEmailExists(false);
            return;
        } else {
            setEmailError("");
        }

        // Check if email already exists in database
        try {
            const response = await axios.post('http://localhost:3001/check-email', { email: value });
            if (response.data.exists) {
                setIsEmailExists(true);
                setEmailError("Email already has an account. Please log in.");
            } else {
                setIsEmailExists(false);
            }
        } catch (error) {
            console.error("Error checking email:", error);
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        // Password validation: At least 1 alphabet, 1 special character, and 8 characters
        const hasAlphabet = /[a-zA-Z]/.test(value);
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const isValid = value.length >= 8 && hasAlphabet && hasSpecialCharacter;

        setIsPasswordValid(isValid);
        setPasswordError(isValid ? "" : "Password requires at least one alphabet, one special character, and 8 characters.");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailError && isPasswordValid && !isEmailExists) {
            axios.post('http://localhost:3001/register', { name, email, password })
                .then(result => {
                    alert("Registration successful!");
                    navigate('/login');
                })
                .catch(err => console.log(err));
        } else {
            alert("Please fix the errors before submitting.");
        }
    };

    return (
        <div className="container-">
            {/* Left Panel */}
            <div className="left-panel">
                <i className="fas fa-plus" style={{ fontSize: '100px' }}></i>
                <h1>Welcome!</h1>
                <p>"To keep connected with us, please<br />login with your personal info"</p>
                <i className="fas fa-fire" style={{ fontSize: '100px', marginTop: '20px' }}></i>
            </div>

            {/* Right Panel */}
            <div className="right-panel">
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <i className="fas fa-envelope"></i>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <div className="error-message">{emailError}</div>}
                    </div>

                    <div className="input-group">
                        <i className="fas fa-lock"></i>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className={`password-feedback ${isPasswordValid ? "success" : "error"}`}>
                        Password requires at least one alphabet, one special character, and 8 characters.
                    </div>

                    <button className="signup-btn" disabled={!isPasswordValid || emailError || isEmailExists}>Signup</button>
                    <p>Already Have an Account?</p>
                </form>

                <button className="signup-btn" onClick={() => navigate('/login')}>Login</button>
            </div>
        </div>
    );
}

export default RegistrationPage;
