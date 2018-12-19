import React from 'react';
import './UserInput.css';

const userinput  = (props) => {

  return (
    <div className="input">
      <input onChange={props.changed}/>
    </div>
  )
} 

export default userinput; 