import React from 'react';
import axios from 'axios';

class OtherPlayerLeft extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			creepers: {},
			keepers: {},
			cardsN = 0,
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