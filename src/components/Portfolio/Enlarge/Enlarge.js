import React from "react";
import "./Enlarge.css";

const Enlarge=(props) =>
{
    return (
      <div className="modal" style={{"display": `${props.display}`}}>
      {console.log("bug1", props.display)}
        <div className="modal-content animate" action="/action_page.php">
        {console.log("bug2")}
          <div className="imgcontainer">
          <span onClick={() => props.close(props.picture)}>
            <img src={props.picture} alt={props.alt}/>
            {console.log("bug3")}
          </span>
          </div>
        </div>
      </div>
    )
}

export default Enlarge;
