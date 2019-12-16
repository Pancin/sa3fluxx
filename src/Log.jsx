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
 		// this.socket = openSocket('http://localhost:3002');
 		this.socket = openSocket('http://10.62.163.212:3002');
        this.socket.on('turn', this.getLog);
	}

	getLog = async () => {
		try {
			const { data } = await Axios.get('/log');
			this.setState({log: data.log});
        } 
        catch(err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div className="actualLog">
			{this.state.log.map((log, i) => (<div key={i}>{log.nickname} played {log.cardname}</div>))}
      		</div>
		);
	}
}


export default Log;
