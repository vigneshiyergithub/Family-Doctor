import React, { useState } from 'react';
import './Modal.css';
// import { AiFillCloseCircle } from 'react-icons/ai';

function Modal({ handleClose, show, children }) {
	// manipulate state

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
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

	const handleMessageInput = (event) => {
		setMessage(event.target.value);
	};

	// form validation on button click

	const showMessage = (e) => {
		if (name !== '' && phone !== '' && message !== '') {
			const requestParams = {
				headers: { 'Content-Type' : 'application/json' },
				method: 'POST',
				body: JSON.stringify({
					message,
					contactName : name, 
					phone
				})
			}
			fetch('/.netlify/functions/sendEmail', requestParams)
				.then(resp => resp.json())
				.then(resp => console.log("Email", resp))
				.catch(e => console.log("Error in email", e))
			let successElement = document.getElementById('success');
			successElement.style.display = 'block';
			setName('');
			setPhone('');
			setMessage('');
			setSuccess('');
			handleClose()
		} else {
			let errorElement = document.getElementById('error');
			errorElement.style.display = 'block';
			setError('');
		}
	};

	const showHideClassName = 'modal-tool display-block';
	return (
		<div className={showHideClassName}>
			<form className="modal-main" onSubmit={handleSubmit}>
				<h3>Request A Callback</h3>
				<p>We can call you in 30 seconds, just enter your details below</p>
				<p id="error">{error}</p>
				<input type="text" placeholder="Name*" value={name} onChange={handleNameChange} required />
				<input type="text" placeholder="Phone*" value={phone} onChange={handlePhoneChange} required />
				<textarea
					name="message"
					id="message"
					cols="10"
					rows="3"
					value={message}
					placeholder="Message*"
					onChange={handleMessageInput}
				></textarea>
				<p id="success">{success}</p>
				<button type="submit" onClick={showMessage}>
					Request
				</button>
			</form>
		</div>
	);
}

export default Modal;
