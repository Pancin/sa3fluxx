import React from 'react';
import axios from 'axios';

class Game extends React.Component {

	constructor(props) {
		super(props) ;
		this.state = {
			player: {

			},
			otherPlayer: [
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
			]
		}
	}



	render() {

		return (
			<div className="Game" id="game">
				<OtherPlayerLeft 
					player={this.state.otherPlayer[3]}
				/>
				<div id="gameCenter">
					<OtherPlayerTop 
						player={this.state.otherPlayer[2]}
					/>
					<Middle 
						boh={this.state.boh}
					/> 
					<Player
						player={this.state.otherPlayer[0]}
					/>
				</div>
				<OtherPlayerRight 
					player={this.state.otherPlayer[1]}
				/>
      		</div>
		);
	}
}


export default Game;