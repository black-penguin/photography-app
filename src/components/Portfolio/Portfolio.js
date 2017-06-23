import React, {Component} from "react";
import Enlarge from "./Enlarge/Enlarge"
import "./Portfolio.css";
import rose from "./jpg/rose.jpg";




export default class Portfolio extends Component
{
  constructor()
  {
    super();

    this.state=
    {
      display:"none"
    }

    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
  }

  showModal()
  {
    this.setState({display:"flex"})
  }

  closeModal()
  {
    this.setState({display:"none"})
  }

  render()
  // onClick={<Enlarge picture={rose}} style={{"display", "block"}} />
  {
    console.log(this.state.display);
    return (
      <div>
        <div>

          <button className="enl"
            onClick={this.showModal}>
            <img className="tile" src={rose} />
          </button>
          <Enlarge picture={rose} display={this.state.display} close={this.closeModal}/>
        </div>
      </div>
    );
  }
}
