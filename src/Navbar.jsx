import React from 'react';

class Navbar extends React.Compontent {

    render() {
        return (
            <div id="sidenav">
                <div className="container">
                    <div>Homepage</div>
                    <div>Info</div>
                    <div>Play</div>
                </div>
            </div>
        );
    }
}

export default Navbar;