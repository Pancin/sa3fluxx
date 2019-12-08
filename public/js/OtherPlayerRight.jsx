import React from 'react';
import axios from 'axios';

class OtherPlayerRight extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			creepers: {},
			keepers: {},
			cardsN: 0,
		}
	}

	mapCreepers() {
		this.state.creepers.map(creeper => <img src={creeper.src}/>);
	}
	mapKeepers() {
		this.state.keepers.map(keeper => <img src={keeper.src}/>);
	}

	//axios require - Nope, riceve da sopra?

	//event listener for cards that call function this.props.changeZoomCard(card)

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