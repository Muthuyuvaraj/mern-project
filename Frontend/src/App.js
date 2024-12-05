import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import RegistrationPage from './components/RegistrationPage';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contactpage" element={<ContactPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path='/dashboard'  element={<Dashboard />} />
                </Routes>
            
            </div>
        </Router>
    );
}

export default App;
