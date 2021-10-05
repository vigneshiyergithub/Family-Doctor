import React from "react";

import "./Team.css";

function Team() {
  return (
    <div className="team" id="doctors">
      <h1>Our Team</h1>

      <div className="team-members">
        <div className="member">
          {/* <img src="../../img/doctor1.jpg" alt="doctor" /> */}
          <h3>Dr Akshay Adsul</h3>
          <p>BPTh MPTH (Ortho -Sports) <br /> Dry Needling Practitioner</p>
        </div>

        <div className="member">
          {/* <img src="../../img/doctor2.jpg" alt="doctor" /> */}
          <h3>Dr Krishna Pawar</h3>
          <p> &nbsp;BPTh MPTh (Muskculoskeletal)<br />&nbsp; UK </p>
        </div>

        <div className="member">
          {/* <img src="../../img/doctor3.jpg" alt="doctor" /> */}
          <h3>Dr Amol Salvi </h3>
          <p>BPTH / MPTH (ortho sports)</p>
        </div>

		<div className="member">
          {/* <img src="../../img/doctor3.jpg" alt="doctor" /> */}
          <h3>Hrishikesh zanwar</h3>
          <p>MBA ( SCM)</p>
        </div>
      </div>

      {/* <div className="showcase" id="doctors">
        <div className="showcase-image">
          <img src="../../img/showcase1.jpg" alt="" />
        </div>
        <div className="showcase-image">
          <img src="../../img/showcase2.jpg" alt="" />
        </div>
        <div className="showcase-image">
          <img src="../../img/service2.jpg" alt="" />
        </div>
        <div className="showcase-image">
          <img src="../../img/showcase3.jpg" alt="" />
        </div>
        <div className="showcase-image">
          <img src="../../img/showcase4.jpg" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default Team;
