import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

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
          <h2>API NASA</h2>
        </div>
        <br/>
      </div>
    );
  }
}

class NASA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgURL: ''
    }
    this.getImage = this.getImage.bind(this);
  }

  getImage(event){
    var self = this;
    axios.get(URL)
    .then(function(response){
      console.log('Img url', response.data.url);
      self.setState({imgURL: response.data.url})
    })
    .catch(function(error){

    });

  }

  render(){
    return(
      <div>
        <img src={this.state.imgURL} />
        <br/>
        <button onClick={this.getImage}>Push Me Please</button>
      </div>
    );
  }
}

export { App, NASA };
