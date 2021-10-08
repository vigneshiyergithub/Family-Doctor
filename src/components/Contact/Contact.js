import React, { Component } from "react";

import { RiPhoneFill, RiMap2Line } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
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
                <RiMap2Line color="white" />
              </i>
              1225 Sacchidanand apt, Shukrawar peth, Shubhashnagar lane no 4
              Pune, Maharashtra 411002 India
            </h5>
            <h5>
              <i>
                <RiPhoneFill color="white" />
              </i>
              <a href="tel:+919561251250">+919561251250</a>
            </h5>
            <h5>
              <i>
                <RiPhoneFill color="white" />
              </i>
              <a href="tel:+919028370634">+919028370634</a>
            </h5>

            <div className="mailist">
              <p>
                <i>
                  <MdEmail color="white" />
                </i>
                Contact: <a href="mailto:physionest7@gmail.com">physionest7@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <h1>Get In Touch</h1>
              <input
                type="text"
                placeholder="Name*"
                className="input-field"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="input-field"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="input-field"
                required
              />
              <textarea
                name="message"
                id="message"
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
