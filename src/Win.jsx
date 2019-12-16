import React from 'react';
import './style/connect.css';
import Axios from "./Axios";

class Win extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            winner: props.winner,
        }
        console.log("qui")
        console.log(props);
        //
    }

    render() {
        console.log("ciaoooooo")
        return (
            <div className="bigWin">
                {this.state.winner} WON!!
            </div>
        );
    }
}


export default Win;