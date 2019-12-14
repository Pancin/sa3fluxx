import React from 'react';
const axios = require('axios');

class OtherPlayerLeft extends React.Component {

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

	//event listener for cards that call function this.props.changeZoomCard(card)

	render() {

		return (
			<div id="gameLeft" className="playerLeft"> 
                <div id="leftName">{this.state.name}</div>
                <div id="leftCards">
                    <div id="leftCC">
                        <div id="leftCardsN">Cards: {this.state.cardsN}</div>
                        <div id="leftCreepers">{this.state.creepers}</div>
                    </div>
                    <div id="leftKeepers">{this.state.keepers}</div>
                </div>
            </div>
		);
	}
}


export default OtherPlayerLeft;