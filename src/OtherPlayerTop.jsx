import React from 'react';
const axios = require('axios');

class OtherPlayerTop extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: props.player.name,
			creepers: props.player.creepers,
			keepers: props.player.keepers,
			cardsN: 0,
		}
	}

	static getDerivedStateFromProps(props, state) {
		let newState = {};
		newState.name = props.player.name;
		newState.creepers = props.player.creepers.map(card => (
							<img src={card.src} onClick={() => {
												axios.put('/selectedFieldCard',
													{
														player: this.props.player.name,
														selectedCard: card.src,
													},
													{
														headers: { 'Content-Type': 'application/json' }
													})
												}
											}
							/>));
		newState.keepers = props.player.keepers.map(card => (
							<img src={card.src} onClick={() => {
												axios.put('/selectedFieldCard',
													{
														player: this.props.player.name,
														selectedCard: card.src,
													},
													{
														headers: { 'Content-Type': 'application/json' }
													})
												}
											}
							/>));
		newState.cardsN = props.player.hand.map((card, index) => index + 1);
		return newState;
	}

	render() {

		return (
			<div id="top" className="playerTop">
				<div id="topName">{this.state.name}</div>
				<div id="topCC">
					<div id="topCardsN">Cards: {this.state.cardsN}</div>
					<div id="topCreepers">{this.state.creepers}</div> 
				</div>
				<div id="topKeepers">{this.state.keepers}</div>
			</div>
		);
	}
}


export default OtherPlayerTop;