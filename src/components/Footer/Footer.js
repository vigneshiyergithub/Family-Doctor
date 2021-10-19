import React from "react";

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiRss,
} from "react-icons/ti";
import { RiPhoneFill } from "react-icons/ri";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <a href="#home">
          <img src="../logo_transparent.png" alt="" />
          {/* <h1>Physionest</h1> */}
        </a>
        <p>
          Choosing the right hospital and physician are important factors to
          consider that significantly influence a patient’s treatment. The
          preferred choice for many patients is Physionest.
        </p>

        <p>Copyright © 2021 Privacy Policy</p>
      </div>

      <div className="info">
        <h3>Information</h3>
        <div className="info-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          {/* <a href="#">Doctors</a> */}
          {/* <a href="#">Gallery</a> */}
          {/* <a href="#">Partners</a> */}
          {/* <a href="#">Testimonials</a> */}
          <a href="#contact">Contacts</a>
        </div>
      </div>

      <div className="footer-contacts">
        <h3>Contact us</h3>
        <p>
          1225 Sacchidanand apt, Shukrawar peth, Shubhashnagar lane no 4 Pune,
          Maharashtra 411002 India
        </p>
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
        {/* <p>
          Phone <a href="tel:+919561251250">+919561251250</a>
        </p>
        <p>
          Phone <a href="tel:+919028370634">+919028370634</a>
        </p> */}
        <a href="mailto:physionest7@gmail.com">physionest7@gmail.com</a>

        <div className="social">
          <h3>Social Media</h3>
          <div className="icons">
            <i>
              <TiSocialFacebook />
            </i>
            <i>
              <TiSocialTwitter />
            </i>
            <i>
              <TiSocialLinkedin />
            </i>
            <i>
              <TiRss />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
