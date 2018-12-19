import React from 'react';
import "./UserOutput.css";

const useroutput  = (props) => {

  return (
    <div className="output">
      <p>{props.name}:  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum fugiat inventore dignissimos tenetur! Modi nihil dolores incidunt possimus, natus numquam non esse repellat soluta quam dignissimos rerum maiores sed.</p>
    </div>
  )
} 

export default useroutput; 