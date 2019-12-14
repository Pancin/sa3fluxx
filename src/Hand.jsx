import React from 'react';

class Hand extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hand: [],
		}
	}

	static getDerivedStateFromProps(props, state) {
		return {hand: props.hand.map(card => <img src={card.src}/>)};
	}

	render() {

		return (
            <div className="Hand" id="hand">
                <div id="bLeft"><img src="../media/img/leftArrow.png" class="arrow"></img></div>
                <div id="handCards">{this.state.hand}</div>
                <div id="bRight"><img src="../media/img/rightArrow.png" class="arrow"></img></div>
            </div> 
		);
	}
}


export default Hand;