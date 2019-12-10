import React from 'react';
import './style/connect.css';

class Connect extends React.Component {

    render() {
        return (
            <div className="connect-container">
                <div id="sidenav">
                    <div className="container">
                        <div>Homepage</div>
                        <div>Info</div>
                        <div>Play</div>
                    </div>
                </div>

                <main>
                    <form>
                        <div className="divisor">
                            Nickname:
                            <input type="text" name="name" />
                        </div>
                        <br />
                        <div className="divisor">
                            Room ID:
                            <input type="text" name="id" />
                        </div>
                        <br />
                        <button>Connect</button>
                    </form>
                </main>
            </div>
        );
    }
}


export default Connect;
