import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Modal.css';

function Modal({ handleClose, show, children }) {
	// manipulate state

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	// handling form submission
	const handleSubmit = (event) => {
		// preventDefault
		event.preventDefault();
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePhoneChange = (event) => {
		setPhone(event.target.value);
	};
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
	return (
		<div className={showHideClassName}>
			<form className="modal-main" onSubmit={handleSubmit}>
				<h3>Request A Callback</h3>
				<p>We can call you in 30 seconds, just enter your number below</p>
				{children}
				<input type="text" placeholder="Name*" value={name} onChange={handleNameChange} />
				<input type="text" placeholder="Phone*" value={phone} onChange={handlePhoneChange} />
				<button type="submit">Request</button>
				<i onClick={handleClose}>
					<AiFillCloseCircle />
				</i>
			</form>
		</div>
	);
}

export default Modal;
