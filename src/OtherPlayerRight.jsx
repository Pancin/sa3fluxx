import React from 'react';
import Axios from "./Axios";

class OtherPlayerRight extends React.Component {

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
	
	componentDidUpdate(oldProps) {
		this.state.creepers = this.state.creepers.map(card => (<img src={require('' + card + '')} onClick={() => this.onClick(card)}/>));
		this.state.keepers = this.state.keepers.map(card => (<img src={require('' + card + '')} onClick={() => this.onClick(card)}/>));
	}

	static getDerivedStateFromProps(props, state) {
		let newState = {};
		newState.protagonist = props.protagonist;
		newState.name = props.player.name;
		newState.creepers = props.player.creepers;
		newState.keepers = props.player.keepers;
		let counter = 0;
		for (let i = 0; i < props.player.hand.length; i++) {
			counter++;
		}
		newState.cardsN = counter;
		return newState;
	}

	render() {

		return (
			<div id="gameRight" className="playerRight">
                <div id="rightName">{this.state.name}</div>
                <div id="rightCards">
                    <div id="rightKeepers">{this.state.keepers}</div>
                    <div id="rightCC">
                        <div id="rightCardsN">Cards: {this.state.cardsN}</div>
                        <div id="rightCreepers">{this.state.creepers}</div>
                    </div>
                </div>
            </div>
		);
	}
}


export default OtherPlayerRight;