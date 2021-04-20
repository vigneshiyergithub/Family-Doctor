import React, { Component } from 'react';

import { RiPhoneFill, RiMap2Line } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact-us">
                
                <div id="map"></div>

                <div className="contact-details">
                    <div className="details">
                        <h1>Contact Details</h1>
                        <h5>
                            <i><RiMap2Line /></i>
                            470 Lucy Forks, Patriciafurt, YC7B 3UT
                        </h5>
                        <h5>
                            <i><RiPhoneFill /></i>
                            <a href="(123) 123-7899">(123) 123-7899</a>
                        </h5>

                        <div className="mailist">
                            <p><i><MdEmail /></i>Support: <a href="mail@demolink.org">mail@demolink.org</a></p>
                            <p><i><MdEmail /></i>Marketing: <a href="mail@demolink.org">mail@demolink.org</a></p>
                            <p><i><MdEmail /></i>Career: <a href="mail@demolink.org">mail@demolink.org</a></p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form action="">
                            <h1>Get In Touch</h1>
                            <input type="text" placeholder="Name*" className="input-field"/>
                            <input type="email" placeholder="Email*" className="input-field"/>
                            <input type="tel" placeholder="Phone" className="input-field"/>
                            <textarea name="message" id="message" cols="30" rows="2" placeholder="Message*"></textarea>
                            <button className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;