import React, {Component} from "react";
import Enlarge from "./Enlarge/Enlarge";
import Selector from "./Selector/Selector";
import "./Portfolio.css";
import rose from "./jpg/rose.jpg";
import water_fall from "./jpg/water_fall.jpg"




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
  {
    return (
      <div>
        <Selector picture={rose} open={this.showModal}/>
        <Enlarge picture={rose} display={this.state.display} close={this.closeModal}/>
      </div>
    );
  }
}
