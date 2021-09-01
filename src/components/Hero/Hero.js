import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Modal from '../Modal';

// hero styles
import './Hero.css';

function Hero() {
	// adding the modal pop-up

	const [show, setShow] = useState(false);

	// function to show the modal
	const showModal = () => {
		setShow(true);
	};

	// function to close the modal
	const closeModal = () => {
		setShow(false);
	};
	return (
		<div className="hero-container" id="home">
			<Navbar />

			<div className="hero-description">
				<p>Be healthy now is so simple</p>
				<h1>We Take Care Of Your Health</h1>
				<Modal show={show} handleClose={closeModal}></Modal>
				<button className="btn" onClick={showModal}>
					Request an appointment
				</button>
			</div>
		</div>
	);
}

export default Hero;
