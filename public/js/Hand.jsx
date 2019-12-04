import React from 'react';
import axios from 'axios';

class Hand extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hand: {},
		}
	}

	// event listener for cards that call function this.props.changeZoomCard(card)

	render() {

		return (
            <div className="Hand" id="hand">
                <div id="bLeft"><img src="../media/img/leftArrow.png" class="arrow"></img></div>
                <div id="handCards"></div>
                <div id="bRight"><img src="../media/img/rightArrow.png" class="arrow"></img></div>
            </div> 
		);
	}
}


export default Hand;
