import React from 'react';
import axios from 'axios';

class Player extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Locomotanya',
			playLeft: 1,
			keepers: {},
			creepers: {},
		}
	}

	//axios require

	render() {

		return (
			<div id="bottom" className="playerBottom">
				<div id="bottomKeepers"></div>
				<div id="bottomCC"> 
					<div id="bottomName">Locomotanya</div>
					<div id="bottomCreepers"></div> 
					<div id="playsLeft">Plays left: 1</div>
				</div>
			</div>
		);
	}
}


export default Player;