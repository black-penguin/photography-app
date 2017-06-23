import React, {Component} from "react";
import "./Enlarge.css";



const Enlarge=(props) =>
{
//   <span className="close" title="Close Modal" onClick={props.close}>&times;</span>
//  </div>
//  <div className="container">
//   <img src={props.picture}/>

    return (
      <div className="modal" style={{"display": `${props.display}`}}>
        <div className="modal-content animate" action="/action_page.php">
          <div className="imgcontainer">
          <span onClick={props.close}>
            <img src={props.picture} />
          </span>
          </div>
        </div>
      </div>
    )
}

export default Enlarge;
