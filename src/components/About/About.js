import React from "react";

import "./About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <h1>Welcome to Our Clinic</h1>
      <p>
        Physionest is committed to quality physiotherapy care. With our
        dedicated team of physiotherapists and clinics across Pune we guide you
        through a holistic treatment program.
      </p>
      <p>
        We have developed a unique Total Care Framework to assess, diagnose and
        help you with your rehabilitation journey. Our dedicated team is
        available 24*7 to assist you in physical injury and post-surgical
        physiotherapy. We have access to some of Pune's top surgeons and
        specialist to call upon when needed.
      </p>
      <div>
        Our Physiotherapists use a wide range of techniques
        including: 
        <ul> 
          <li>Matrix therapy</li>
          <li>Exercise</li>
          <li>Stretches</li>
          <li>Postural
        education</li>
          <li>Core strengthening</li>
          <li>Activity modification</li>
          <li>Tape</li>
          <li>Dry
        needling</li>
          <li>Electrotherapy and much more...</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
