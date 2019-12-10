import React from 'react';
import './style/index.css';

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="bg">
                <div className="firstBackground">
                    <div className="indexBoxOne">
                        <div className="indexBoxOneText"><span>Scroll to start ↓</span></div>
                    </div>
                </div>

                <div className="secondBackground">
                    <div className="indexBoxTwo">
                        <a href="./info">Info</a>
                        <a href="./connect">Play</a>
                    </div>
                </div>
                </div>

            </React.Fragment>
        )

    }
}

export default Home;