import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
    };
  };

  // Upon clicking the submit button or pressing enter, check if the Message
  // is empty. If it isn't, post the message to the chat history.
  handleClick() {
    let message = document.getElementById("chat").value.trim();
    // Checks for blank inputs
    if (message !== "") {
      let temp = this.state.values.concat(<li className = "message">{message}</li>);
      // Adds the message to state
      this.setState({values: temp});
      // Makes the chatbox blank again
      document.getElementById("chat").value = "";

    } else {

      alert("Message cannot be empty");
    }
  }

  render() {
    const values = this.state.values;
    return (
    <div className="App">
      <header className="App-header">
        <h1>Messaging App</h1>
      </header>

        <Messages
        values = {values}
        onClick={() => this.handleClick()}
        />


    </div>
  );
}
}

class Messages extends React.Component {
  render() {

    return(
      <div>
        <div className = "Chat-history">
        <ul>
        {this.props.values}
        </ul>
        </div>
        <Chat
        onClick = {() => this.props.onClick()}
        />
      </div>
    );
  }
}

class Chat extends React.Component {
  render() {

    // This function checks if Enter is pressed
    const checkEnter = (e) => {
      if (e.keyCode == 13) {
        e.preventDefault();
        document.getElementById("submit").click();
      }
    }

    return(

    <div className = "Text-box">
      <input type = "text" name = "message" onKeyUp= {(e) => checkEnter(e)} placeholder = "Message" required = "required" id = "chat"/>
      <button type = "button" id = "submit" onClick = {() => {this.props.onClick()}}>Submit</button>
    </div>
  );
  }

}




export default App;
