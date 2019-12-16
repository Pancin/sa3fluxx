import React from 'react';
import Axios from "./Axios";

class OtherPlayerTop extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			protagonist: props.protagonist,
			name: props.player.name,
			creepers: props.player.creepers,
			keepers: props.player.keepers,
			cardsN: 0,
		}
	}

	onClick = async (card) => {
        try {
			const { data } = await Axios.put('/selectedFieldCard',
							{
								player: this.protagonist,
								selectedCard: card,
							});
        } 
        catch (err) {
            // 
        }
    }

	static getDerivedStateFromProps(props, state) {
		let newState = {};
		newState.protagonist = props.protagonist;
		newState.name = props.player.name;
		newState.creepers = props.player.creepers.map(card => (<img src={require('' + card + '')} />));
		newState.keepers = props.player.keepers.map(card => (<img src={require('' + card + '')} />));
		let counter = 0;
		for (let i = 0; i < props.player.hand.length; i++) {
			counter++;
		}
		newState.cardsN = counter;
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