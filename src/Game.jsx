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
			protagonist: props.player.name,
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
		newState.protagonist = props.player.name;
		newState.player = props.player;
		newState.otherPlayers = [props.otherPlayers[0], props.otherPlayers[1], props.otherPlayers[2]];
		newState.gameState = props.gameState;
		return newState;
	}

	render() {

		return (
			<div className="Game" id="game">
				<OtherPlayerLeft
					protagonist={this.state.protagonist}
					player={this.state.otherPlayers[2]}
				/>
				<div id="gameCenter">
					<OtherPlayerTop
						protagonist={this.state.protagonist}
						player={this.state.otherPlayers[1]}
					/>
					<Middle
						protagonist={this.state.protagonist}
						draw={this.state.gameState.draw}
						play={this.state.gameState.maxPlay}
						discard={this.state.gameState.discard}
						deck={this.state.gameState.deck}
						goal={this.state.gameState.goal}
						rules={this.state.gameState.rules}
					/>
					<Player
						player={this.state.player}
						playsLeft={this.state.gameState.playsLeft}
					/>
				</div>
				<OtherPlayerRight
					protagonist={this.state.protagonist}
					player={this.state.otherPlayers[0]}
				/>
			</div>
		);
	}
}


export default Game;