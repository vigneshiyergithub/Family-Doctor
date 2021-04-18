import React from 'react';
import './Credentials.css';

function Credentials() {
    return (
        <div className="certificates">
            <h1>Сertificates of our Doctors</h1>

            <div className="certficate-slider">
                <div className="slide">
                    <img src="../../img/cert1.jpg" alt=""/>
                </div>
                <div className="slide">
                    <img src="../../img/cert2.jpg" alt=""/>
                </div>
                <div className="slide">
                    <img src="../../img/cert3.jpg" alt=""/>
                </div>
                <div className="slide">
                    <img src="../../img/cert4.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Credentials;
