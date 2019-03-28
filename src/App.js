import React, { Component } from 'react';
import './styles/App.sass';
import { padBanks } from './data/data';
import Settings from './components/Settings';
import Pads from './components/Pads'

// Project Title
const projectTitle = "Drum Machine";

// Main App Component
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      padBank : padBanks["heater"] ,
      display : " ",
      volume : 50
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.changeBank = this.changeBank.bind(this);
  }
  
  updateDisplay(name) {
    this.setState({ display : name });
  }
  
  updateVolume(e){
    this.setState({ volume : e.target.value });
  }
  
  changeBank(val){
    this.setState({ padBank : val.bank });
  }
  
  render(){
    return (
      <div>

        <div className="container">
          <div id="title">{projectTitle}</div>
          <Settings display={this.state.display} 
                    volume={this.state.volume} 
                    updateVolume={this.updateVolume} 
                    changeBank={this.changeBank}/>
          <Pads padBank={this.state.padBank} 
                updateDisplay={this.updateDisplay} 
                volume={this.state.volume}/>
        </div>
        
        <footer>
          Designed and Built by Romaric Fargetton using <a href="https://reactjs.org/">React</a> and <a href="https://draculatheme.com/">Dracula</a>
        </footer>

      </div>
    );
  }
}

