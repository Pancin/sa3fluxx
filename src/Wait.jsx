import React from 'react';
import './style/connect.css';
import Axios from "./Axios";

class Wait extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nickname: props.nickname,
        }
    }

    onConnect = async (event) => {
        try {
            event.preventDefault(); //so that it doesn't refresh
            const { data } = await Axios.post('/start');
            if (data.is) {
                this.props.changeNicknameStart(this.state.nickname);
            }
            else {
                alert("There are gnot egnough players yet.");
            }
        } 
        catch (err) {
            alert("Ugnown error.");
        }
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
                    <br/>
                    <form onSubmit={this.onConnect}>
                        <input type="submit" value="Start Game"/>
                    </form>
                </main>
            </div>
        );
    }
}


export default Wait;