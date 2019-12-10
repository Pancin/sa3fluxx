import React from 'react';
import axios from 'axios';

class OtherPlayerTop extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			creepers: {},
			keepers: {},
			cardsN: 0,
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
			<div id="top" className="playerTop">
				<div id="topName">{this.state.name}</div>
				<div id="topCC">
					<div id="topCardsN">Cards: {this.state.cardsN}</div>
					<div id="topCreepers">{this.state.creepers}</div> 
				</div>
				<div id="topKeepers">{this.state.keepers}</div>
			</div>
		);
	}
}


export default OtherPlayerTop;