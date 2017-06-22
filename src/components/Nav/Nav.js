import React from "react";
import {Link} from "react-router-dom"

import "./Nav.css"

export default function Nav( { items } ) {
  return (
    <div id="Nav__container">
      <div>
        <Link className="nav" to="#">
          <span>Home</span>
        </Link>
        <Link className="nav" to="#">
          <span>Portfolio</span>
        </Link>
        <Link className="nav" to="#">
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}
