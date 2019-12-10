import React from 'react';
import axios from 'axios';

class Player extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			playsLeft: 1,
			keepers: {},
			creepers: {},
		}
	}

	mapCreepers() {
		this.state.creepers.map(creeper => <img src={creeper.src}/>);
	}
	mapKeepers() {
		this.state.keepers.map(keeper => <img src={keeper.src}/>);
	}

	//axios require - Nope, riceve da sopra?

	//event listener for cards that call function this.props.changeZoomCard(card)

	render() {

		return (
			<div id="bottom" className="playerBottom">
				<div id="bottomKeepers">{this.state.keepers}</div>
				<div id="bottomCC"> 
					<div id="bottomName">{this.state.name}</div>
					<div id="bottomCreepers">{this.state.creepers}</div> 
					<div id="playsLeft">Plays left: {this.state.playsLeft}</div>
				</div>
			</div>
		);
	}
}


export default Player;