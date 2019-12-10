import React from 'react';
import axios from 'axios';

class Game extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
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
		}
	}

	//axios require - Nope, riceve da sopra?

	//event listener for cards that call function this.props.changeZoomCard(card)

	render() {

		return (
			<div className="Game" id="game">
				<OtherPlayerLeft
					player={this.state.otherPlayer[2]}
				/>
				<div id="gameCenter">
					<OtherPlayerTop
						player={this.state.otherPlayer[1]}
					/>
					<Middle/>
					<Player
						player={this.state.player}
					/>
				</div>
				<OtherPlayerRight
					player={this.state.otherPlayer[0]}
				/>
			</div>
		);
	}
}


export default Game;