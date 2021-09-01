import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	return (
		<div className="navbar">
			<header>
				<div className="logo">
					<a href="#home">
						<img src="../../logo.png" alt="" />
						<h1>Physionest</h1>
					</a>
				</div>
				<nav className={click ? 'nav-options active' : 'nav-options'} id="navbar">
					<ul>
						<li>
							<Link to="services" spy={true} smooth={true}>
								<a href="#services" className="active">
									Services
								</a>
							</Link>
						</li>
						<li>
							<Link to="about" spy={true} smooth={true}>
								<a href="#about" onClick={closeMobileMenu}>
									About Us
								</a>
							</Link>
						</li>
						{/* <li>
							<Link to="doctors" spy={true} smooth={true}>
								<a href="#" onClick={closeMobileMenu}>
									Doctors
								</a>
							</Link>
						</li>
						<li>
							<Link to="partners" spy="true" smooth={true}>
								<a href="#" onClick={closeMobileMenu}>
									Partners
								</a>
							</Link>
						</li> */}
						<li>
							<Link to="contact" spy={true} smooth={true}>
								<a href="#contact" onClick={closeMobileMenu}>
									Contact
								</a>
							</Link>
						</li>
					</ul>
				</nav>
				<div className="toggle mobile-menu" onClick={handleClick}>
					{click ? <AiOutlineClose className="menu-icon" /> : <FaBars className="menu-icon" />}
				</div>
			</header>
		</div>
	);
}

export default Navbar;
