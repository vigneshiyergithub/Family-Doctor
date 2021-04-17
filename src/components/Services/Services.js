import React from 'react';

import './Services.css';

function Services() {
    return (
        <div className="services-section">
            <h1>Our Services</h1>

            <div className="services-gallery">
                <div className="image">
                    <img src="../../img/service1.jpg" alt="service"/>
                    <h5>Consultations</h5>
                </div>
                <div className="image">
                    <img src="../../img/service2.jpg" alt="service"/>
                    <h5>Laboratory</h5>
                </div>
                <div className="image">
                    <img src="../../img/service3.jpg" alt="service"/>
                    <h5>Cardiology</h5>
                </div>
                <div className="image">
                    <img src="../../img/service4.jpg" alt="service"/>
                    <h5>Neurology</h5>
                </div>
                <div className="image">
                    <img src="../../img/service5.jpg" alt="service"/>
                    <h5>Ambulance</h5>
                </div>
                <div className="image">
                    <img src="../img/service6.jpg" alt="service"/>
                    <h5>Dental Care</h5>
                </div>
            </div>
        </div>
    )
}

export default Services;
