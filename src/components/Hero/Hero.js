import React from 'react';
import Navbar from '../Navbar/Navbar';

// hero styles
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <Navbar />

            <div className="hero-description">
                <p>Be healthy now is so simple</p>
                <h1>We Take Care Of Your Health</h1>
                <button className="btn">Request an appointment</button>
            </div>
        </div>
    )
}

export default Hero
