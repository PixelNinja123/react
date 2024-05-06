import React from 'react';

function Block(props) {
  return (
    <div className="blocks">
      <img src={props.img} alt="pic" />
      <h3>{props.title}</h3>
      <p className="predl">{props.text}</p>
    </div>
  );
}

export default Block;
