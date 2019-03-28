import React from 'react' ;
import Pad from './Pad.js'

// A stateless functional component that returns a single Pad Component for every element in the soundbank array
const Pads = ({padBank, updateDisplay, volume}) => {

  const padList = padBank.map((pad, id) => 
    <Pad  id={pad.id} 
          src={pad.url} 
          key={id} 
          name={pad.description} 
          updateDisplay={updateDisplay} 
          keyValue={pad.key} 
          volume={volume} />
  );

  return (
    <div id ="drum-pads">{padList}</div>
  );
  
};

export default Pads;
  