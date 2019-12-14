import React from 'react';

class Middle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			draw: {src: "../media/img/draw1.png"},
			play: {src: "../media/img/play1.png"},
			discard: props.discard,
			deck: props.deck,
			goal: props.goal,
			rules: props.rules,
			cardsN: 0,
		}
	}

	static getDerivedStateFromProps(props, state) {
		let newState = {...props};
		newState.rules = props.rules.map(rule => <img src={rule.src}/>);
		newState.cardsN = props.deck.map((card, index) => index + 1);
		return newState;
	}

	//event listener for cards that call function this.props.changeZoomCard(card)

	render() {

		return (
			<div id="middle" className="Middle">
				<div id="ddg">
					<div id="draw"><img src={this.draw.src}></img></div>
					<div id="play"><img src={this.play.src}></img></div>
					<div id="void"></div>
					<div id="discard"><img src={this.state.discard[0].src}></img></div>
					<div id="deckimg">
						<img src="../media/img/deck.png"></img>
						<div id="deck">{this.state.cardsN}</div>
					</div>
					<div id="void"></div>
					<div id="goal"><img src={this.state.goal.src}></img></div>
					<div id="void"></div>
				</div>
				<div id="rules">{this.state.rules}</div>
			</div>
		);
	}
}


export default Middle;