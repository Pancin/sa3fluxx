import React from 'react';
import "./style/game.css";
import Axios from "./Axios";
import { changeTurn } from "./utils";
import openSocket from 'socket.io-client';

class Log extends React.Component {

	constructor(props) {
		super(props) ;
		this.state = {
			log: [],
		}
		this.getLog();
		changeTurn(this.getLog);
		this.socket = openSocket('http://localhost:3002');
		this.socket.on('turn', this.getLog);
	}

	getLog = async () => {
		try {
			const { data } = await Axios.get('/log');
			this.setState({log: data.log.map(log => (<div>{log.nickname} played {log.cardname}</div>))});
        } 
        catch(err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div className="actualLog">
				{this.state.log}
      		</div>
		);
	}
}


export default Log;
