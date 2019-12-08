import React, {Component} from 'react';

class DisplayConversation extends Component {
    displayMessage = () => {
        console.log(this.props.messages);

        return this.props.messages.map(message => <div>{message.username}: {message.message}</div>)
    }
  render() {
    return (
      <div id="displayConversation">
         {this.displayMessage() }
      </div>
    )
  }
}

export default DisplayConversation;