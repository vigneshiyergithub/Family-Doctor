import React from 'react';

import './Services.css';

function Services() {
	return (
		<div className="services-section" id="services">
			<h1>Our Services</h1>

			<div className="services-gallery">
				<div className="image">
					<img src="../../img/service1.jpg" alt="service" />
					<h5>Musculoskeletal physiotherapy</h5>
				</div>
				<div className="image">
					<img src="../../img/service2.jpg" alt="service" />
					<h5>Geriatric physiotherapy</h5>
				</div>
				<div className="image">
					<img src="../../img/service3.jpg" alt="service" />
					<h5>Paediatric physiotherapy</h5>
				</div>
				<div className="image">
					<img src="../../img/service4.png" alt="service" />
					<h5>Sports physiotherapy</h5>
				</div>
				<div className="image">
					<img src="../../img/service5.jpg" alt="service" />
					<h5>Physiotherapy for rehabilitation and pain management</h5>
				</div>
				<div className="image">
					<img src="../../img/service6.jpg" alt="service" />
					<h5>Neuro Physiotherapy</h5>
				</div>
				{/* <div className="image">
					<img src="../img/service6.jpg" alt="service" />
					<h5>Dental Care</h5>
				</div> */}
			</div>
		</div>
	);
}

export default Services;
