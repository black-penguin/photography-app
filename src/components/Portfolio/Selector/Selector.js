import React from "react";
import "./Selector.css";

const Selector=(props) =>
{
    return (
      <div>
        <span className="enl" onClick={() => props.open(props.picture)}>
          <img className="tile" src={props.picture} alt={props.alt}/>
        </span>
      </div>
    )
}

export default Selector;
