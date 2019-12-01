import React from 'react';
import axios from 'axios';

class OtherPlayerTop extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Cataclismio',
			hand: {},
			creepers: {},
			keepers: {},
		}
	}

	//axios require

	render() {

		return (
			<div id="top" className="playerTop">
				<div id="topName">Cataclismio</div>
				<div id="topCC">
					<div id="topCardsN">Cards: 0</div>
					<div id="topCreepers"></div> 
				</div>
				<div id="topKeepers"></div>
			</div>
		);
	}
}


export default OtherPlayerTop;
