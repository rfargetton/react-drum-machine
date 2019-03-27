import React, { Component } from 'react';
import Pad from './Pad';
import './App.sass';
import { padBanks } from './data';
import Select from 'react-select';

// Project Title
const projectTitle = "Drum Machine"

// Options array used by React-Select to switch between sound banks
const options = [
  { value : 'heater', label: 'Heater', bank: padBanks['heater']},
  { value : 'chord', label: 'Chord', bank: padBanks['chord']}
]

// Main App Component
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      padBank : padBanks["heater"] ,
      display : " ",
      volume : 50
    }
    this.updateDisplay = this.updateDisplay.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.changeBank = this.changeBank.bind(this);
  }
  
  updateDisplay(name) {
    this.setState({ display : name });
  }
  
  updateVolume(e){
    this.setState({ volume : e.target.value })
  }
  
  changeBank(val){
    this.setState({ padBank : val.bank })
  }
  
  render(){
    return (
      <div>
        <div className="container">
          <div id="title">{projectTitle}</div>
          <Settings display={this.state.display} 
                    volume={this.state.volume} 
                    updateVolume={this.updateVolume} 
                    changeBank={this.changeBank}
                    />
          <Pads padBank={this.state.padBank} 
                updateDisplay={this.updateDisplay} 
                volume={this.state.volume}
                />
        </div>
        <footer>
          Designed and Built by Romaric Fargetton using <a href="https://reactjs.org/">React</a> and <a href="https://draculatheme.com/">Dracula</a>
        </footer>
      </div>
    )
  }
}

// A stateless functional component that returns a single Pad Component for every element in the soundbank array
const Pads = ({padBank, updateDisplay, volume}) => {

  const padList = padBank.map((pad, id) => 
    <Pad  id={pad.id} 
          src={pad.url} 
          key={id} 
          name={pad.description} 
          updateDisplay={updateDisplay} 
          keyValue={pad.key} 
          volume={volume}
          />
  )

  return (
    <div id="drum-pads">{padList}</div>
  )

}

// A stateless functional component that returns the display, volume and soundbank controls
const Settings = ({display, volume, updateVolume, changeBank}) => {
  return (
    <div id="settings">
      
      <div id="display" className="setting">
        <header>Sound/Clip</header>
        <div id="current">{display}</div>               
      </div>
      
      <div id="volume" className="setting">
        <header>Volume</header>
        <input  type="range" 
                min="1" 
                max="100" value={volume} 
                id="volume-range" 
                onChange={updateVolume} 
                />
      </div>
        
      <div id="library" className="setting">
        <header>Bank</header>
        <Select options={options}
                className='react-select-container'
                classNamePrefix='react-select'
                defaultValue={options[0]}
                isSearchable={false} 
                onChange={changeBank} />
      </div>

    </div>
  )
}

