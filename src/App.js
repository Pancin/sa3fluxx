import React from 'react';
import Center from './Center';
import GameChat from './GameChat';
import Connect from './Connect';
import Info from './Info';
import Home from './Home';
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
            nickname: ''
        }
    }

    changeNickname = (newNickname) => {
        this.setState({
            nickname: newNickname,
            toGame: true,
        });
    }

    render() {
        return (
            <Router>
                {
                    this.state.toGame ? <Redirect to='/game' /> : <React.Fragment /> //if true, redirect, else return a void fragment
                }
                <div>
                    <Switch>
                        <Route path="/game">
                            <div className="App" id="App" >
                                <div id="left">
                                    <div id="sidenavGame">
                                        <div>Homepage</div>
                                        <div>Info</div>
                                        <div>Play</div>
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
                                changeNickname={this.changeNickname}
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
