import React from 'react';
import axios from 'axios';

class OtherPlayerLeft extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Olofausto',
			id: 0,
		}
	}




	render() {

		return (
			<div id="gameLeft" className="playerLeft"> 
                <div id="leftName">Olofausto</div>
                <div id="leftCards">
                    <div id="leftCC">
                        <div id="leftCardsN">Cards: 0</div>
                        <div id="leftCreepers"></div>
                    </div>
                    <div id="leftKeepers"></div>
                </div>
            </div>
		);
	}
}


export default OtherPlayerLeft;
