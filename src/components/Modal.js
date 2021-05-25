import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Modal.css';

function Modal({ handleClose, show, children }) {
	// manipulate state

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [error, setError] = useState('You must fill all the Field');
	const [success, setSuccess] = useState('We will contact you shortly!!');

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

	// form validation on button click

	const showMessage = () => {
		if (name !== '' && phone !== '') {
			setSuccess(success);
		} else {
			setError(error);
			console.log(error);
		}
	};

	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
	return (
		<div className={showHideClassName}>
			<form className="modal-main" onSubmit={handleSubmit}>
				<h3>Request A Callback</h3>
				<p>We can call you in 30 seconds, just enter your number below</p>

				<input type="text" placeholder="Name*" value={name} onChange={handleNameChange} />
				<input type="text" placeholder="Phone*" value={phone} onChange={handlePhoneChange} />
				<button type="submit" onClick={showMessage}>
					Request
				</button>
				<i onClick={handleClose}>
					<AiFillCloseCircle />
				</i>
			</form>
		</div>
	);
}

export default Modal;
