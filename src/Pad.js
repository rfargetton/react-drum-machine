import React, { Component } from 'react' ;

// CSS Styles for active Pad
const activePad = {
    backgroundColor: '#6272a4',
    color: '#f1fa8c'
};
  
// CSS Style for inactive Pad
const inactivePad = {
    backgroundColor: '#44475a',
    color: '#8be9fd'
};

//  Pad Component
export default class Pad extends Component {

  constructor(props){
    super(props);
    this.state = {
      padStyle : inactivePad
    }
    this.playClip = this.playClip.bind(this);
    this.handleKeyDown =  this.handleKeyDown.bind(this);
  }
  
  // Initializing listener for 'keydown' event after the component has been rendered
  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  // Tearing down the listener 
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown, false)
  }
  
  // Handles keydown 
  handleKeyDown(e){
    // Checks if the corresponding key has been pressed
    if(e.keyCode === this.props.keyValue){
      this.playClip();
    }
  }
  
  playClip() {
    // Plays clip
    const clip = document.getElementById(this.props.id);
    clip.currentTime = 0;
    clip.volume = this.props.volume/100;
    clip.play(); 
    // Updates display
    this.props.updateDisplay(this.props.name);
    // Set the Pad's style to active for 200ms and back to inactive
    this.setState({ padStyle: activePad });
    setTimeout(() => (
      this.setState({
          padStyle: inactivePad 
      })
    ), 200);
  }
  
  render(){
    return (
      <div  className="drum-pad" 
            style={this.state.padStyle} 
            id={this.props.name} 
            onClick={this.playClip}
            >
          {this.props.id}
          <audio className="clip" id={this.props.id} src={this.props.src}></audio>
      </div>
    );    
  }
  
} 