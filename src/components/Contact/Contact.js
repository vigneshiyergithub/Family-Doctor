import React, { Component } from 'react';

import { RiPhoneFill, RiMap2Line } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

import './Contact.css';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
			message: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			name: event.terget.value,
			email: event.terget.value,
			phone: event.terget.value,
			message: event.terget.value,
		});
	}
	render() {
		return (
			<div className="contact-us" id="contact">
				<div className="contact-details">
					<div className="details">
						<h1>Contact Details</h1>
						<h5>
							<i>
								<RiMap2Line />
							</i>
							470 Lucy Forks, Patriciafurt, YC7B 3UT
						</h5>
						<h5>
							<i>
								<RiPhoneFill />
							</i>
							<a href="(123) 123-7899">(123) 123-7899</a>
						</h5>

						<div className="mailist">
							<p>
								<i>
									<MdEmail />
								</i>
								Support: <a href="mail@demolink.org">mail@demolink.org</a>
							</p>
							<p>
								<i>
									<MdEmail />
								</i>
								Marketing: <a href="mail@demolink.org">mail@demolink.org</a>
							</p>
							<p>
								<i>
									<MdEmail />
								</i>
								Career: <a href="mail@demolink.org">mail@demolink.org</a>
							</p>
						</div>
					</div>

					<div className="contact-form">
						<form action="">
							<h1>Get In Touch</h1>
							<input
								type="text"
								placeholder="Name*"
								value={this.state.name}
								className="input-field"
								onChange={this.handleChange}
							/>
							<input
								type="email"
								placeholder="Email*"
								value={this.state.email}
								className="input-field"
								onChange={this.handleChange}
							/>
							<input
								type="tel"
								placeholder="Phone"
								value={this.state.phone}
								className="input-field"
								onChange={this.handleChange}
							/>
							<textarea
								name="message"
								id="message"
								value={this.state.message}
								cols="30"
								rows="2"
								placeholder="Message*"
							></textarea>
							<button className="submit-btn">Send Message</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
