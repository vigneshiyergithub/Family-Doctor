import React from 'react';

import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="#">
                    <img src="../../logo.png" alt=""/>
                    <h1>Family Doctor</h1>
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Doctors</a></li>
                    <li><a href="#">All Blocks</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
