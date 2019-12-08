import React, { Component } from "react";
import "../style/game.css";
import Login from "./Login.js";
import MessagingPanel from "./MessagingPanel";

class GameChat extends Component {
  state = {
    username: null
  };

  setUsername = username => {
    this.setState({ username });
  };
  render() {
    return (
      <div className="chat">
        {!this.state.username ? (
          <Login setUsername={this.setUsername} />
        ) : (
          <MessagingPanel username={this.state.username} />
        )}
      </div>
    );
  }
}

export default GameChat;

// -App
// -Login
// -MessagingPanel
//   -DisplayConveration
//   -MessagingBox
