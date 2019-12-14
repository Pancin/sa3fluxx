import React from 'react';
import Player from './Player';
import OtherPlayerLeft from './OtherPlayerLeft';
import OtherPlayerTop from './OtherPlayerTop';
import OtherPlayerRight from './OtherPlayerRight';
import Middle from './Middle';
// import axios from 'axios';

class Game extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			player: this.props.player,
			// {
			// 	name: '',
			// 	playsLeft: 1,
			// 	keepers: {},
			// 	creepers: {},
			// },
			otherPlayer: [ this.props.otherPlayer[0], //right
				this.props.otherPlayer[1], //top
				this.props.otherPlayer[2], //left
				// {
				// 	name: '',  //right
				// 	creepers: {},
				// 	keepers: {},
				// 	cardsN: 0,
				// },
				// {
				// 	name: '', //top
				// 	creepers: {},
				// 	keepers: {},
				// 	cardsN: 0,
				// },
				// {
				// 	name: '',  //left
				// 	creepers: {},
				// 	keepers: {},
				// 	cardsN: 0,
				// },
			],
			gameState: null,
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
					<Middle
						draw={this.gameState.draw}
						play={this.gameState.play}
						discard={this.gameState.discard}
						deck={this.gameState.deck}
						goal={this.gameState.goal}
						rules={this.gameState.rules}
					/>
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