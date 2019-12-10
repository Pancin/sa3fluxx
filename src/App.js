import React from 'react';
import Center from './Center';
import GameChat from './GameChat';

class App extends React.Component {

    render() {
        return (
            <div className="App" id="App">
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
        );
    }
}


export default App;
