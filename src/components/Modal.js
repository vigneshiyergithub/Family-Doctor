import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import './Modal.css';

function Modal({ handleClose, show, children }) {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none';
	return (
		<div className={showHideClassName}>
			<form className="modal-main">
				<h3>Request A Callback</h3>
				<p>We can call you in 30 seconds, just enter your number below</p>
				{children}
				<input type="text" placeholder="Name*" />
				<input type="text" placeholder="Phone*" />
				<button>Request</button>
				<i onClick={handleClose}>
					<AiFillCloseCircle />
				</i>
			</form>
		</div>
	);
}

export default Modal;