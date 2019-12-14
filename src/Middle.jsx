import React from 'react';
import axios from 'axios';

class Middle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			draw: {src: "../media/img/draw1.png"},
			play: {src: "../media/img/play1.png"},
			discard: {},
			deck: {},
			goal: {},
			rules: {},
			cardsN: 0,
		}
	}

	//axios require - Nope, riceve da sopra?

	mapRules() {
		this.state.rules.map(rule => <img src={rule.src}/>);
	}

	countDeckCards() {
		//
	}

	//event listener for cards that call function this.props.changeZoomCard(card)

	render() {

		return (
			<div id="middle" className="Middle">
				<div id="ddg">
					<div id="draw"><img src={this.draw.src}></img></div>
					<div id="play"><img src={this.play.src}></img></div>
					<div id="void"></div>
					<div id="discard"><img src={this.discard[0].src}></img></div>
					<div id="deckimg">
						<img src="../media/img/deck.png"></img>
						<div id="deck">{this.state.cardsN}</div>
					</div>
					<div id="void"></div>
					<div id="goal"><img src={this.goal.src}></img></div>
					<div id="void"></div>
				</div>
				<div id="rules">{this.state.rules}</div>
			</div>
		);
	}
}


export default Middle;