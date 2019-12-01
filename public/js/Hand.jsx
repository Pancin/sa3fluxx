import React from 'react';
import axios from 'axios';

class OtherPlayer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Stronzolo',
			id: 0,
		}
	}




	render() {

		return (
			<React.Fragment>
				<div className="OtherPlayer">
					<div />
					<div />
					<div />
					<div />
				</div>
				<div className="OtherPlayer">
					<div />
					<div />
					<div />
					<div />
				</div>
			</React.Fragment>

		);
	}
}


export default OtherPlayer;
