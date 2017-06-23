import React from "react";
import {Link} from "react-router-dom"

import "./Nav.css"

export default function Nav()
{
  return (
    <div id="Nav__container">
      <div>
        <Link className="nav" to="/home">
          <span>Home</span>
        </Link>
        <Link className="nav" to="/portfolio">
          <span>Portfolio</span>
        </Link>
        <Link className="nav" to="/contact">
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}
