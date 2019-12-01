import React from 'react';
import axios from 'axios';

class Middle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			draw: {},
			play: {},
			discard: {},
			deck: {},
			goal: {},
			rules: {},
		}
	}

	//axios require

	render() {

		return (
			<div id="middle" className="Middle">
				<div id="ddg">
					<div id="draw"><img src="../media/img/draw1.png"></img></div>
					<div id="play"><img src="../media/img/play1.png"></img></div>
					<div id="void"></div>
					<div id="discard"></div>
					<div id="deckimg">
						<img src="../media/img/deck.png"></img>
						<div id="deck">90</div>
					</div>
					<div id="void"></div>
					<div id="goal"></div>
					<div id="void"></div>
				</div>
				<div id="rules"></div>
			</div>
		);
	}
}


export default Middle;
