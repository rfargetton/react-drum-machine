import React, { Component } from 'react' ;

const activePad = {
    backgroundColor: '#6272a4',
    color: '#f1fa8c'
}
  
const inactivePad = {
    backgroundColor: '#44475a',
    color: '#8be9fd'
}

export default class Pad extends Component {

    constructor(props){
      super(props);
      this.state = {
        padStyle : inactivePad
      }
      this.playClip = this.playClip.bind(this);
      this.handleKeyDown =  this.handleKeyDown.bind(this);
    }
    
    componentDidMount(){
      document.addEventListener("keydown", this.handleKeyDown, false);
    }
    
    handleKeyDown(e){
      if(e.keyCode === this.props.keyValue){
        this.playClip();
      }
    }
    
    playClip() {
        const clip = document.getElementById(this.props.id);
        clip.currentTime = 0;
        clip.volume = this.props.volume/100;
        clip.play(); 
        this.props.updateDisplay(this.props.name);
        this.setState({padStyle: activePad });
        setTimeout(() => (
        this.setState({
            padStyle: inactivePad 
        })
        ), 200)
    }
    
    render(){
        return (
        <div className="drum-pad" style={this.state.padStyle} id={this.props.name} onClick={this.playClip}>
            {this.props.id}
            <audio className="clip" id={this.props.id} src={this.props.src}></audio>
        </div>
        );    
    }
  
} 