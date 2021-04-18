import React from 'react'

import './About.css';

function About() {
    return (
        <div className="about-section">
            <h1>Welcome to Our Clinic</h1>
            <p>
             We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help. One of the most important factors about people’s lives is the information of, the use of, and the growing knowledge of medicine. Medicine is a form of art.
             It depends on how skillfully doctors apply their knowledge when dealing with patients.
            </p>
            <h6>Our MEedical Professionals</h6>
            <h3>Making an appointment with us in 3 easy steps</h3>
            <div className="steps">
                <div className="step-text">
                    <h2>01.</h2>
                    <p>Browse Website</p>
                </div>
                <div className="step-text">
                    <h2>02.</h2>
                    <p>Choose Service </p>
                </div>
                <div className="step-text">
                    <h2>03.</h2>
                    <p>Send Messege</p>
                </div>
            </div>
            
        </div>
    )
}

export default About;
