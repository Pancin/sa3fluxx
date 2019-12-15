import React from 'react';
import Game from './Game';
import Hand from './Hand';
import "./style/game.css";
import Axios from "./Axios";
import { changeTurn } from "./utils";

class Center extends React.Component {

	constructor(props) {
		super(props) ;
		this.state = {
			nickname: props.nickname,
			playerNumber: 0,

			deck: [],
			discard: [],
			player: {
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},
			players: [{
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},
			{
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},
			{
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},
			{
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},],
			otherPlayers: [{
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},
			{
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},
			{
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},
			{
				name: '',
				creepers: [],
				keepers: [],
				hand: [],
			},
			],
			draw: "./media/img/draw1.png",
			maxPlay: "./media/img/play1.png",
			playsLeft: 1,
			currentPlayer: 0,
			rules: [],
			goal: './media/deck/errors/noGoal.png',
			
			nullPlayer: {name: '', creepers: [], keepers: [], hand: []},
			cardToZoom: null,
			change: false,
		}
		this.getGameState();
		console.log(this.players);
		changeTurn(this.getGameState);
	}

	// changeZoomCard = function (card) {
	// 	this.setState({cardToZoom: card});
	// }

	managePlayers = () => {
		if (this.state.players[0].name == this.state.nickname) {
			this.setState({player: this.state.players[0]});
			this.setState({playerNumber: 0});
		}
		else if (this.state.players[1].name == this.state.nickname) {
			this.setState({player: this.state.players[1]});
			this.setState({playerNumber: 1});
		}
		else if (this.state.players[2].name == this.state.nickname) {
			this.setState({player: this.state.players[2]});
			this.setState({playerNumber: 2});
		}
		else if (this.state.players[3].name == this.state.nickname) {
			this.setState({player: this.state.players[3]});
			this.setState({playerNumber: 3});
		}

		if (this.state.players.length == 2) {
			this.setState({otherPlayers: [this.state.players[1-this.state.playerNumber], this.state.nullPlayer, this.state.nullPlayer]});
		}
		else if (this.state.players.length == 3) {
			if (this.state.playerNumber == 0){
				this.setState({otherPlayers: [this.state.players[1], this.state.players[2], this.state.nullPlayer]});
			}
			else if (this.state.playerNumber == 1){
				this.setState({otherPlayers: [this.state.players[0], this.state.players[2], this.state.nullPlayer]});
			}
			else if (this.state.playerNumber == 2){
				this.setState({otherPlayers: [this.state.players[0], this.state.players[1], this.state.nullPlayer]});
			}
		}
		else if (this.state.players.length == 4) {
			if (this.state.playerNumber == 0){
				this.setState({otherPlayers: [this.state.players[1], this.state.players[2], this.state.players[3]]});
			}
			else if (this.state.playerNumber == 1){
				this.setState({otherPlayers: [this.state.players[2], this.state.players[3], this.state.players[0]]});
			}
			else if (this.state.playerNumber == 2){
				this.setState({otherPlayers: [this.state.players[3], this.state.players[0], this.state.players[1]]});
			}
			else if (this.state.playerNumber == 3){
				this.setState({otherPlayers: [this.state.players[0], this.state.players[1], this.state.players[2]]});
			}
		}

		let newPlayer = this.state.player;
		newPlayer.playsLeft = this.state.playsLeft;
		this.setState(newPlayer);
	}

	getGameState = async () => {
		try {
			const { data } = await Axios.get('/gamestate');
			this.setState({
					deck: data.deck,
					discard: data.discard,
					players: data.players,
					draw: data.draw,
					maxPlay: data.maxPlay,
					playsLeft: data.playLeft,
					currentPlayer: data.currentPlayer,
					maxKeepers: data.maxKeepers,
					goal: data.goal,
					rules: data.rules,
				}, () => this.managePlayers());
		} catch(err) {
			console.log(err);
		}
	}

	//socket that should call getGameState()

	render() {
		return (
			<div className="Center" id="center">
				{/* <ZoomedCard 
					cardToZoom = {this.state.cardToZoom}
				/> */}
				<Game 
					player = {this.state.player}
					otherPlayers = {this.state.otherPlayers}
					gameState={this.state}
					// changeZoomCard={this.changeZoomCard}
				/>
				<Hand 
					hand={this.state.player.hand}
					// changeZoomCard={this.changeZoomCard}
					player = {this.state.player}
				/>
      		</div>
		);
	}
}


export default Center;
