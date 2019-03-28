import React from 'react' ;
import Select from 'react-select';
import { padBanks } from '../data/data';

// Options array used by React-Select to switch between sound banks
const options = [
  { value : 'heater', label: 'Heater', bank: padBanks['heater']},
  { value : 'chord', label: 'Chord', bank: padBanks['chord']}
];
  
// A stateless functional component that returns the display, volume and soundbank controls
const Settings = ({ display, volume, updateVolume, changeBank }) => {
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
                max="100" 
                value={volume} 
                id="volume-range" 
                onChange={updateVolume} />
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
  );
};

export default Settings;