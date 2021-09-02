import React, {useState} from 'react';

import './Help.css';

const helpServices = ['Poor Posture', 'Muscle Tension', 'Shoulder Impingement', 
'Rotator Cuff Injuries', 'Frozen Shoulder', 'Headaches & Migraines', 'Pre And Post-Surgical Rehabilitation', 
'Whiplash', 'Disk Bulges', 'Sporting Shoulder', 'Tennis Elbow', 'Fractures & Casting', 'Muscle Tears', 'Arthritis & Osteoarthritis'
]
function HelpServices() {
	const [readMore, setReadMore] = useState(false);
	const data = readMore ? [...helpServices] : [...helpServices].slice(0, 5);
	const onReadMoreClick = () => {
		setReadMore(!readMore);
	};
	return (
		<div className="services-section" id="services">
			<h1>How our services can help you</h1>

			<div className="services-gallery">
				{
					data.map((name, key) => { 
						return <div className="image" key={`${name}_${key}`}>
						<h5>{name}</h5>
					</div>
					})
				}
				
				<div className="image readMore" onClick={onReadMoreClick}>
					<h5>{readMore ? 'Show Less' : 'Show More'}</h5>
				</div>
			</div>
		</div>
	);
}

export default HelpServices;
