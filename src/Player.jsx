import React from 'react';
import Axios from "./Axios";

class Player extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: props.player.name,
			creepers: props.player.creepers,
			keepers: props.player.keepers,
			cardsN: 0,
			playsLeft: 10,
		}
	}

	onClick = async (card) => {
        try {
			const { data } = await Axios.put('/selectedFieldCard',
							{
								player: this.player.name,
								selectedCard: card,
							});
        } 
        catch (err) {
            // 
        }
    }

	static getDerivedStateFromProps(props, state) {
		let newState = {};
		newState.name = props.player.name;
		newState.creepers = props.player.creepers.map(card => (<img src={card} onClick={() => this.onClick(card)}/>));
		newState.keepers = props.player.keepers.map(card => (<img src={card} onClick={() => this.onClick(card)}/>));
		newState.cardsN = props.player.hand.map((card, index) => index + 1);
		return newState;
	}

	render() {
		const { keepers, name, creepers  } = this.state;
		return (
			<div id="bottom" className="playerBottom">
				<div id="bottomKeepers">{keepers}</div>
				<div id="bottomCC"> 
					<div id="bottomName">{name}</div>
					<div id="bottomCreepers">{creepers}</div> 
					<div id="playsLeft">Plays left: {this.state.playsLeft}</div>
				</div>
			</div>
		);
	}
}


export default Player;