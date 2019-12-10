import React from 'react';
import axios from 'axios';

class Center extends React.Component {

	constructor(props) {
		super(props) ;
		this.state = {
			deck: 0,
			activePlayer: 0,
			player: {
				name: '',
				playsLeft: 1,
				keepers: {},
				creepers: {},
			},
			otherPlayer: [{
					name: '',  //right
					creepers: {},
					keepers: {},
					cardsN: 0,
				},
				{
					name: '', //top
					creepers: {},
					keepers: {},
					cardsN: 0,
				},
				{
					name: '',  //left
					creepers: {},
					keepers: {},
					cardsN: 0,
				},
			],
			draw: 0,
			play: 0,
			playLeft: 0,
			maxHand: 0,
			maxKeepers: 0,
			rules: [],
			goal: {},
			discard: [],

			cardToZoom: null,
		}
	}

	changeZoomCard = function (card) {
		this.setState({cardToZoom: card});
	}

	//axios require

	render() {
		return (
			<div className="Center" id="center">
				{/* <ZoomedCard 
					cardToZoom = {this.state.cardToZoom}
				/>
				<Game 
					player = {this.state.player}
					otherPlayer = {this.state.otherPlayer}
					changeZoomCard={this.changeZoomCard}
				/>
				<Hand 
					changeZoomCard={this.changeZoomCard}
				/> */}
      		</div>
		);
	}
}


export default Center;
