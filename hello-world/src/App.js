import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: '',
      outputText: ''
    }
    this.textChanged = this.textChanged.bind(this)
  }

  textChanged(event){
    var name = event.target.value
    this.setState({outputText: name})
    this.setState({inputText: name})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dojo React</h2>
        </div>
        <br/>
        <input type="text" onChange={this.textChanged} value={this.state.inputText}/>
        <br/>
        <a>Hola {this.state.outputText}, cómo estás?</a>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
