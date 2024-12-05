import React from 'react';
import './ContactPage.css';
import './Logo';
import Logo from './Logo';

function ContactPage() {
    return (
        <div className="container-c">
            
        <div className="left-section">
        <h2>GET IN TOUCH</h2>
        <div className='contact-Details'>
        <p>
                <span>Mailing Address</span><br></br>
                123 Anywhere St. Any City, ST 12345
            </p>
            <p>
                <span>Email Address</span><br></br>
                hello@reallygreatsite.com
            </p>
            <p>
                <span>Phone Number</span><br></br>
                (123) 456-7890
            </p>

        </div>
            
            
        </div>
        <div className='right-section'>
            <Logo />
        <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
        </form>
        </div>
       
    </div>
    );
}

export default ContactPage;
