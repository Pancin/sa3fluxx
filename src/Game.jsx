import React from 'react';
import Player from './Player';
import OtherPlayerLeft from './OtherPlayerLeft';
import OtherPlayerTop from './OtherPlayerTop';
import OtherPlayerRight from './OtherPlayerRight';
import Middle from './Middle';

class Game extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			player: props.player,
			otherPlayers: [ props.otherPlayers[0], //right
				props.otherPlayers[1], //top
				props.otherPlayers[2], //left
			],
			gameState: props.gameState,
		}
	}

	static getDerivedStateFromProps(props, state) {
		let newState = {};
		newState.player = props.player;
		newState.otherPlayers = [props.otherPlayers[0], props.otherPlayers[1], props.otherPlayers[2]];
		newState.gameState = props.gameState;
		return newState;
	}

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
						play={this.gameState.maxPlay}
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