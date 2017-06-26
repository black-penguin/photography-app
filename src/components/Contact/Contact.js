import React, {Component} from "react";
import "./Contact.css";



export default class Contact extends Component
{
  render()
  {
    return (
      <div className="form text-left">
        <form autoComplete="on">
          <input type="text" placeholder="Name" name="uname" required /><br />
          <input type="text" id="number" name="number" placeholder="(385)225-5273" /><br />
          <input type="text" id="email" name="email" placeholder="Email@domain.com" /><br />
          <textarea id="conent" name="content" placeholder="Message"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
