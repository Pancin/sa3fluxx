import React from 'react';
const axios = require('axios');

class Hand extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hand: [],
		}
	}

	static getDerivedStateFromProps(props, state) {
		return {
			hand: props.hand.map(card => (
				<img src={card.src} onClick={() => {
									axios.put('/selectedHandCard',
										{
											player: this.props.player.name,
											selectedCard: card.src,
										},
										{
											headers: { 'Content-Type': 'application/json' }
										})
									}
								}
				/>))
		};
	}

	render() {

		return (
            <div className="Hand" id="hand">
                <div id="bLeft"><img src="../media/img/leftArrow.png" className="arrow"></img></div>
                <div id="handCards">{this.state.hand}</div>
                <div id="bRight"><img src="../media/img/rightArrow.png" className="arrow"></img></div>
            </div> 
		);
	}
}


export default Hand;