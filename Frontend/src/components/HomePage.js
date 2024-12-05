import React from 'react';
import './HomePage.css';
import './Logo';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const navigate = useNavigate();

    const handleBookConsultation = () => {
        navigate('/registration'); // Navigates to the signup page
    };

    return (
        <div className="container">
            <div className="content">
                <div className='logo-h'>
                    <Logo />
                </div>
                <h1>East Forge <br />Medical</h1>
                <p>Where Mental health comes first</p>
                <button className="btn" onClick={handleBookConsultation}>
                    Book a consultation
                </button>
            </div>
            <div className="image">
                <img
                    alt="Doctor working on a laptop with plants and charts in the background"
                    height="600"
                    src="https://storage.googleapis.com/a1aa/image/FBfEMVmBXDVvOKNqe9i2IFl1PoEfFBmwAivdjMna5wYtiIrnA.jpg"
                    width="800"
                />
            </div>
        </div>
    );
}

export default HomePage;
