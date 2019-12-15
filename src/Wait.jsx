import React from 'react';
import './style/connect.css';
import axios from 'axios';

class Wait extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nickname: props.nickname,
        }
    }

    onConnect = (event) => {
        event.preventDefault(); //so that it doesn't refresh
        axios.create({
            baseURL: 'http://localhost:3001', //server port
            })
            .post('/start')
            .then(res => {
                this.props.changeNicknameStart(this.state.nickname);
            })
            .catch(err => {
                alert("There are not enough players yet.");
            })
    }

    render() {
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
                    <div>Waiting for other palyers</div>
                    <form onSubmit={this.onConnect}>
                        <input type="submit">Start Game</input>
                    </form>
                </main>
            </div>
        );
    }
}


export default Wait;
