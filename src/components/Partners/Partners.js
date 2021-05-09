import React from 'react';
import './Partners.css';

function Partners() {
	return (
		<div className="partner" id="partners">
			<h1>Our Partners</h1>
			<div className="container">
				<div className="partner-text">
					<h3>Since</h3>
					<h1>1992</h1>
					<p>
						Our Medical Clinic is committed to providing the highest quality patient care. Our dedication to
						excellence, compassion and innovation is rooted in our devotion to the art and science of
						healing, which supports every aspect of our mission and to the care we give to our patients.
					</p>
				</div>

				<div className="partner-image">
					<div className="first-row">
						<div>
							<img src="../../img/partner1.jpg" alt="" />
						</div>
						<div>
							{' '}
							<img src="../../img/partner2.jpg" alt="" />
						</div>
					</div>

					<div className="last-row">
						<div>
							<img src="../../img/partner3.jpg" alt="" />
						</div>
						<div>
							<img src="../../img/partner4.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Partners;
