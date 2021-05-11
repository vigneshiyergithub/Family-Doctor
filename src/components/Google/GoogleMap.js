import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import './GoogleMap.css';

class GoogleMap extends Component {
	render() {
		const mapStyles = {
			width: '100%',
			height: '50%',
			padding: '100px 0px',
			marginBottom: '200px',
		};
		return (
			<Map
				google={this.props.google}
				zoom={8}
				style={mapStyles}
				initialCenter={{ lat: -1.2920659, lng: 36.82194619999996 }}
				id="map"
			>
				<Marker position={{ lat: -1.2920659, lng: 36.82194619999996 }} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyArlQAJp6OiOxgnoauwaUnseG0jXdL1bwQ',
})(GoogleMap);
