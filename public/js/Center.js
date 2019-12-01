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
					name: 'Stronzolo',
					id: 0,
					isPlayer: true,
				},
				{
					name: 'Cataclismio',
					id: 1,
					isPlayer: false,
				},
				{
					name: 'Antanio',
					id: 2,
					isPlayer: false,
				},
				{
					name: 'Supercazzola',
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
		}


	}



	render() {
		return (
			<div className="Center" id="center">
				<Game />
				<Hand />
      		</div>
		);
	}
}


export default App;
