import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';


class App extends Component {

  state = {
    username: "user100"
  }

  nameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.nameChange}/>
        <UserOutput
          name={this.state.username}/>
        <UserOutput />
      </div>
    );
  }
}

export default App;
