import React from 'react';
import ReactPlayer from 'react-player';
// import { FiPlayCircle } from 'react-icons/fi';

import './Video.css';

function Video() {
	return (
		<div className="video">
			<ReactPlayer url="https://www.youtube.com/embed/Scxs7L0vhZ4" />
			{/* <iframe
				width="865"
				height="517"
				src="https://www.youtube.com/embed/Scxs7L0vhZ4"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe> */}
			<h3>Video Presentation</h3>
		</div>
	);
}

export default Video;
