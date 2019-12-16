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
			playsLeft: props.playsLeft,
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
		newState.creepers = props.player.creepers.map(card => (<img src={require('' + card + '')}/>));
		newState.keepers = props.player.keepers.map(card => (<img src={require('' + card + '')}/>));
		let counter = 0;
		for (let i = 0; i < props.player.hand.length; i++) {
			counter++;
		}
		newState.cardsN = counter;
		newState.playsLeft = props.playsLeft;
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
					<div id="playsLeft">{this.props.currentPlayer.name === name ? `Plays left: ${this.state.playsLeft}` : 'Not Your Turn'}</div>
				</div>
			</div>
		);
	}
}


export default Player;