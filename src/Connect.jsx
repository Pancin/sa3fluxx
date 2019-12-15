import React from 'react';
import './style/connect.css';
import axios from 'axios';

class Connect extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nickname: '',
        }
    }

    onConnect = (event) => {
        event.preventDefault(); //so that it doesn't refresh
        axios.post('http://localhost:3001/login',
                {
                    nickname: this.state.nickname,
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                })
            .then(res => {
                if (res.is){
                    this.props.changeNicknameStart(this.state.nickname);
                }
                else {
                    this.props.changeNicknameWait(this.state.nickname);
                }
            })
            .catch(err => {
                alert("Gno. You cagnnot enter.");
            })
    }

    handleChange = (event) => {
        this.setState({ nickname: event.target.value });
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
                    <form onSubmit={this.onConnect}>
                        <div className="divisor">
                            Nickname:
                        <input type="text" name="nickname" value={this.state.nickname} onChange={this.handleChange} />
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
