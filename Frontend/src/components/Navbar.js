import React from 'react';
import './Navbar.css';
import { FaTimes, FaBars } from 'react-icons/fa';

import { useRef } from 'react';

function Navbar() {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

   return (
		<header>
			<h3>Medical Stress Analysis</h3>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<a href="/login">Login</a>
				<a href="/registration">signup</a>
				<a href="/contactpage">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
