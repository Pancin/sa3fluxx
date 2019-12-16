import React from 'react';
import Game from './Game';
import Hand from './Hand';
import "./style/game.css";
import Axios from "./Axios";
import { changeTurn, onWin } from "./utils";
import openSocket from 'socket.io-client';

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
		// console.log(this.players);
		changeTurn(this.getGameState);
		onWin(this.getWinner);
	}

	managePlayers = () => {
		this.state.players.forEach((player, index) => {
			if (player.name === this.state.nickname) {
				this.setState({
					player: this.state.players[index],
					playerNumber: index
				}, () => {
					if (this.state.players.length == 2) {
						this.setState({otherPlayers: [this.state.players[1-this.state.playerNumber], 
							this.state.nullPlayer, this.state.nullPlayer]});
					}
					else if (this.state.players.length == 3) {
						this.setState({
							otherPlayers: [
								this.state.players[(this.state.playerNumber + 1) % 3], 
								this.state.players[(this.state.playerNumber + 2) % 3],
								this.state.nullPlayer
							]
						});
					}
					else if (this.state.players.length == 4) {
						this.setState({
							otherPlayers: [
								this.state.players[(this.state.playerNumber + 1) % 4], 
								this.state.players[(this.state.playerNumber + 2) % 4],
								this.state.players[(this.state.playerNumber + 3) % 4]
							]
						});
					}
				});
			}
		})
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

	getWinner = async () => {
		try {
			const { data } = await Axios.get('/win');
			console.log("getWinner");
			console.log("data")
			console.log(data)
			this.props.toWinner(data.winner);
		}
		catch(err) {
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
