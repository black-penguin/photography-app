import React, {Component} from "react";
import "./Enlarge.css";
import rose from "../jpg/rose.jpg";



const Enlarge=(props) =>
{
    return (
      <div className="modal" style={{"display": `${props.display}`}}>
        <div className="modal-content animate" action="/action_page.php">
          <div className="imgcontainer">
            <span className="close" title="Close Modal" onClick={props.close}>&times;</span>
          </div>
          <div className="container">
            <img src={props.picture} />
          </div>
        </div>
      </div>
    )
}

export default Enlarge;
