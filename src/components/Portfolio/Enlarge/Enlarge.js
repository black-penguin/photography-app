import React from "react";
import "./Enlarge.css";

const Enlarge=(props) =>
{
    return (
      <div className="modal" style={{"display": `${props.display}`}}>
        <div className="modal-content animate" action="/action_page.php">
          <div className="imgcontainer">
          <span onClick={() => props.close(props.picture)}>
            <img src={props.picture} alt={props.alt}/>
          </span>
          </div>
        </div>
      </div>
    )
}

export default Enlarge;
