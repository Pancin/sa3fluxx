import React from 'react';

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

	static getDerivedStateFromProps(props, state) {
		let newState = {};
		newState.name = props.player.name;
		newState.creepers = props.player.creepers.map(creeper => <img src={creeper.src}/>);
		newState.keepers = props.player.keepers.map(keeper => <img src={keeper.src}/>);
		newState.cardsN = props.player.hand.map((card, index) => index + 1);
		newState.playsLeft = props.player.playsLeft;
		return newState;
	}

	render() {

		return (
			<div id="bottom" className="playerBottom">
				<div id="bottomKeepers">{this.state.keepers}</div>
				<div id="bottomCC"> 
					<div id="bottomName">{this.state.name}</div>
					<div id="bottomCreepers">{this.state.creepers}</div> 
					<div id="playsLeft">Plays left: {this.state.playsLeft}</div>
				</div>
			</div>
		);
	}
}


export default Player;