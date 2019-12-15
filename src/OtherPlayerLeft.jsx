import React from 'react';
import Axios from "./Axios";

class OtherPlayerLeft extends React.Component {

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
		newState.creepers = props.player.creepers.map(card => (<img src={card} onClick={() => this.onClick(card)}/>));
		newState.keepers = props.player.keepers.map(card => (<img src={card} onClick={() => this.onClick(card)}/>));
		let counter = 0;
		for (let i = 0; i < props.player.hand.length; i++) {
			counter++;
		}
		newState.cardsN = counter;
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