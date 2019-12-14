import React from 'react';
import './style/connect.css';
import axios from 'axios'

class Connect extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
            roomId: '',
        }
    }

    onConnect = (event) => {
        event.preventDefault(); //so that it doesn't refresh
        axios.create({
            baseURL: 'http://localhost:3001' //server port
        })
            .post('/login',
                {
                    nickname: this.state.nickname,
                    roomId: this.state.roomId,
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                })
            .finally(response => {
                this.props.changeNickname(this.state.nickname, () => console.log(this.props.history))
            })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="connect-container">
                <div id="sidenav">
                    <div className="container">
                        <a href="/"><div class="nav">Homepage</div></a>
                        <a href="/info"><div class="nav">Info</div></a>
                        <a href="/connect" id="active"><div class="nav">Play</div></a>
                    </div>
                </div>

                <main>
                    <form onSubmit={this.onConnect}>
                        <div className="divisor">
                            Nickname:
                        <input type="text" name="nickname" value={this.state.nickname} onChange={this.handleChange} />
                        </div>
                        <br />
                        <div className="divisor">
                            Room ID:
                        <input type="text" name="roomId" value={this.state.roomId} onChange={this.handleChange} />
                        </div>
                        <br />
                        <input type="submit" />
                    </form>
                </main>
            </div>
        );
    }
}


export default Connect;
