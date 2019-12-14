import React from 'react';

class OtherPlayerRight extends React.Component {

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
		newState.creepers = props.player.creepers.map(creeper => <img src={creeper.src}/>);
		newState.keepers = props.player.keepers.map(keeper => <img src={keeper.src}/>);
		newState.cardsN = props.player.hand.map((card, index) => index + 1);
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