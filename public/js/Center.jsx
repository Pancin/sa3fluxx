import React from 'react';
import axios from 'axios';

class Center extends React.Component {

	constructor(props) {
		super(props) ;
		this.state = {
			deck: 0,
			activePlayer: 0,
			players: [
				{
					name: 'Locomotanya',
					id: 0,
					isPlayer: true,
				},
				{
					name: 'Termosimone',
					id: 1,
					isPlayer: false,
				},
				{
					name: 'Cataclismio',
					id: 2,
					isPlayer: false,
				},
				{
					name: 'Olofausto',
					id: 3,
					isPlayer: false,
				}
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



	render() {
		return (
			<div className="Center" id="center">
				<ZoomedCard 
					cardToZoom = {this.state.cardToZoom}
				/>
				<Game 
					changeZoomCard={this.changeZoomCard}
				/>
				<Hand 
					changeZoomCard={this.changeZoomCard}
				/>
      		</div>
		);
	}
}


export default App;