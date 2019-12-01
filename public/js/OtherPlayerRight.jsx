import React from 'react';
import axios from 'axios';

class OtherPlayerRight extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Piertucano',
			hand: {},
			creepers: {},
			keepers: {},
		}
	}

	//axios require

	render() {

		return (
			<div id="gameRight" className="playerRight">
                <div id="rightName">Piertucano</div>
                <div id="rightCards">
                    <div id="rightKeepers"></div>
                    <div id="rightCC">
                        <div id="rightCardsN">Cards: 0</div>
                        <div id="rightCreepers"></div>
                    </div>
                </div>
            </div>
		);
	}
}


export default OtherPlayerRight;
