import React from 'react';
import Center from './Center';
import GameChat from './GameChat';
import Connect from './Connect';
import Info from './Info';
import Home from './Home';
import Wait from './Wait';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nickname: '',
            toGame: false,
            toWait: false
        }
    }

    changeNicknameStart = (newNickname) => {
        this.setState({
            nickname: newNickname,
            toGame: true,
            toWait: false,
        });
    }

    changeNicknameWait = (newNickname) => {
        this.setState({
            nickname: newNickname,
            toWait: true,
        });
    }

    render() {
        return (
            <Router>
                {
                    this.state.toGame ? <Redirect to='/game' /> : <React.Fragment /> //if true, redirect, else return a void fragment
                }
                {
                    this.state.toWait ? <Redirect to='/wait' /> : <React.Fragment /> //if true, redirect, else return a void fragment
                }
                <div>
                    <Switch>
                        <Route path="/game">
                            <div className="App" id="App" >
                                <div id="left">
                                    <div id="sidenavGame">
                                        <a href="/"><div className="nav">Homepage</div></a>
                                        <a href="/info"><div className="nav">Info</div></a>
                                        <a href="/connect" id="active"><div className="nav">Play</div></a>
                                    </div>
                                    <div id="log"></div>
                                </div>
                                <Center nickname={this.state.nickname} />
                                <div id="right">
                                    <GameChat nickname={this.state.nickname} />
                                </div>
                            </div>
                        </Route>

                        <Route path="/connect" >
                            <Connect
                                nickname={this.state.nickname}
                                changeNicknameStart={this.changeNicknameStart}
                                changeNicknameWait={this.changeNicknameWait}
                            />
                        </Route>

                        <Route path="/wait" >
                            <Wait 
                                nickname={this.state.nickname}
                                changeNicknameStart={this.changeNicknameStart}
                            />
                        </Route>

                        <Route path="/info">
                            <Info />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;
