import React from 'react'

import { FaPhoneAlt } from 'react-icons';

import './Team.css';

function Team() {
    return (
        <div className="team">
            <h1>Choose Your Doctor</h1>

            <div className="team-members">
                <div className="member">
                    <img src="../../img/doctor1.jpg" alt="doctor"/>
                    <h3>Adam Smith</h3>
                    <p>Main Family Doctor</p>
                    <hr/>
                    <h6>
                        <i><FaPhoneAlt /></i>
                        <a href="(123) 123-7899">(123) 123-7899</a>
                    </h6>
                </div>

                <div className="member">
                    <img src="../../img/doctor2.jpg" alt="doctor"/>
                    <h3>Edward Paul</h3>
                    <p>Family Doctor</p>
                    <hr/>
                    <h6>
                        <i><FaPhoneAlt /></i>
                        <a href="(123) 123-7899">(123) 123-7899</a>
                    </h6>
                </div>

                <div className="member">
                    <img src="../../img/doctor3.jpg" alt="doctor"/>
                    <h3>Elizabeth Rouz</h3>
                    <p>Family Doctor</p>
                    <hr/>
                    <h6>
                        <i><FaPhoneAlt /></i>
                        <a href="(123) 123-7899">(123) 123-7899</a>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Team
