import React, { Component } from "react";

import "./GoogleMap.css";

class GoogleMap extends Component {
  render() {
    return (
		<div className="google-map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5419102911246!2d73.85385471469085!3d18.504397774498653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c012e5654f9b%3A0xc1336da78c19e40!2sSacchidanand%20Apartment!5e0!3m2!1sen!2sin!4v1633759899466!5m2!1sen!2sin"
        width={"100%"}
        height={"100%"}
		title="maps"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
      />
	  </div>
    );
  }
}

export default GoogleMap;