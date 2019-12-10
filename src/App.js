import React from 'react';
import Center from './Center';
import GameChat from './GameChat';
import Connect from './Connect';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends React.Component {

    render() {
        console.log('sadsda')
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/game">
                            <div className="App" id="App" >
                                <div id="left">
                                    <div id="sidenav">
                                        <div>Homepage</div>
                                        <div>Info</div>
                                        <div>Play</div>
                                    </div>
                                    <div id="log"></div>
                                </div>
                                <Center />
                                <div id="right">
                                    <GameChat />
                                </div>
                            </div>
                        </Route>
                        <Route path="/connect">
                            <Connect />
                        </Route>
                        <Route path="/info">
                            <div />
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