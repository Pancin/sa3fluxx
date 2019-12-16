import React from 'react';
import Axios from "./Axios";
import './style/connect.css';

class Win extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            winner: props.winner,
        }
        console.log("qui")
        console.log(props);
        //
    }

    static getDerivedStateFromProps(props, state) {
		return {winner: props.winner};
	}

    render() {
        console.log(this.state.winner)
        return (
            <div className="connect-container">
                <div id="sidenav">
                    <div className="container">
                        <a href="/"><div className="nav">Homepage</div></a>
                        <a href="/info"><div className="nav">Info</div></a>
                        <a href="/connect" id="active"><div className="nav">Play</div></a>
                    </div>
                </div>

                <main>
                    <div className="bigWin">Player {this.state.winner} won</div>
                </main>
            </div>
        );
    }
}


export default Win;