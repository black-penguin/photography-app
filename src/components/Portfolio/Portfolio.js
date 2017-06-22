import React from "react";
import {Link} from "react-router-dom"

import "./Portfolio.css"

export default function ()
{
  return (
    <div>
      <section>
        <div>
          <button onclick="document.getElementById('id03').style.display='block'">
            <img  class="tile" src="./jpg/20150711_200453-1.jpg" alt="mountain" />
          </button>
          <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">
            <img  class="tile" src="./jpg/one.jpg" alt="water fall"/>
          </button>

          <button onclick="document.getElementById('id02').style.display='block'">
            <img  class="tile" src="./jpg/rose.jpg" alt="rose" />
          </button>
        </div>

      </section>

      <div id="id01" class="modal">
        <div class="modal-content animate" action="/action_page.php">
          <div class="imgcontainer">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
          </div>
          <div class="container">
            <img src="./jpg/one.jpg" alt="water fall"/>
          </div>
        </div>
      </div>

      <div id="id02" class="modal">
        <div class="modal-content animate" action="/action_page.php">
          <div class="imgcontainer">
            <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
          </div>
          <div class="container">
            <img src="./jpg/rose.jpg" alt="rose" />
          </div>
        </div>
      </div>

      <div id="id03" class="modal">
        <div class="modal-content animate" action="/action_page.php">
          <div class="imgcontainer">
            <span onclick="document.getElementById('id03').style.display='none'" class="close" title="Close Modal">&times;</span>
          </div>
          <div class="container">
            <img src="./jpg/20150711_200453-1.jpg" alt="mountain" />
          </div>
        </div>
      </div>
    </div>
  );
}
