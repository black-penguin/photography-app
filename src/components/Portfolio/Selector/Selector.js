import React, {Component} from "react";
import "./Selector.css";

const Selector=(props) =>
{
    return (
      <div>
        <span className="enl" onClick={props.open}>
          <img className="tile" src={props.picture} />
        </span>
      </div>
    )
}

export default Selector;
