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

  }

  sendMessage = (e) => {
    e.preventDefault(); 
    const {name, email, phone, message} = this.state;
    const requestParams = {
      headers: { 'Content-Type' : 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        message,
        contactName : name, 
        phone,
        contactEmail : email,
      })
    }
    fetch('/.netlify/functions/sendEmail', requestParams)
      .then(resp => {if(resp.statusCode === 200) {console.log(resp.body);}})
      .then(() => {
        this.setState({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      });
      // .then(resp => console.log("Email", resp))
      // .catch(e => console.log("Error in email", e))
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
            <form >
              <h1>Get In Touch</h1>
              <input
                type="text"
                placeholder="Name*"
                className="input-field"
                required
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email*"
                className="input-field"
                required
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="input-field"
                required
                value={this.state.phone}
                onChange={(e) => this.setState ({phone: e.target.value })}
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="2"
                placeholder="Message*"
                value={this.state.message}
                onChange={(e) => this.setState ({message: e.target.value})}
              ></textarea>
              <button className="submit-btn" onClick={this.sendMessage}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
