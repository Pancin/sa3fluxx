import React from 'react';
import Game from './Game';
import Hand from './Hand';
import "./style/game.css";
const axios = require('axios');

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
				hand: {},
			},
			otherPlayer: [{
					name: '',  //right
					creepers: {},
					keepers: {},
					hand: {},
					cardsN: 0,
				},
				{
					name: '', //top
					creepers: {},
					keepers: {},
					hand: {},
					cardsN: 0,
				},
				{
					name: '',  //left
					creepers: {},
					keepers: {},
					hand: {},
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
	
	managePlayers = function (players) {
		//
	}

	countCards = function (hand) {
		//
	}

	getGameState = function () {
		axios.get('/gamestate')
		.then( res => {
			this.state({
				deck: res.deck,
				activePlayer: res.activePlayer,
				players: this.managePlayers(res.players),
				draw: res.draw,
				play: res.play,
				playLeft: res.playLeft,
				maxHand: res.maxHand,
				maxKeepers: res.maxKeepers,
				rules: res.rules,
				goal: res.goal,
				discard: res.discard,
				// otherPlayer[0].cardsN: this.countCards(otherPlayer[0].hand),
				// otherPlayer[1].cardsN: this.countCards(otherPlayer[0].hand),
				// otherPlayer[2].cardsN: this.countCards(otherPlayer[0].hand),
			})
		})
	}

	render() {
		return (
			<div className="Center" id="center">
				{/* <ZoomedCard 
					cardToZoom = {this.state.cardToZoom}
				/> */}
				<Game 
					player = {this.state.player}
					otherPlayer = {this.state.otherPlayer}
					gameState={this.state}
					changeZoomCard={this.changeZoomCard}
				/>
				<Hand 
					hand={this.player.hand}
					changeZoomCard={this.changeZoomCard}
				/>
      		</div>
		);
	}
}


export default Center;
