import React, {Component} from "react";
import Enlarge from "./Enlarge/Enlarge";
import Selector from "./Selector/Selector";
import "./Portfolio.css";
import arr from "./Pictures";


export default class Portfolio extends Component
{
  items = [];

  constructor()
  {
    super();
    this.state={rose:'',water_fall:'', IMG_6835:''};
    this.view=[];
    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);

  }

  showModal(image)
  {
    this.setState(()=>{
      var img = {};
      img[image]='flex';
      return img;
    });

  }

  closeModal(image)
  {
    this.setState(()=>{
      var img = {};
      img[image]='none';
      return img;
    });
  }

  render()
  {
    const pic = arr.map((img, i) =>
    {
      return(
        <div key={arr.id}>
          <Selector alt={img}  picture={img} open={this.showModal} />
          <Enlarge alt={img} picture={img} display={this.state[img]} close={this.closeModal}/>
        </div>
      );
    });

    return (
      <div>
        {pic}
      </div>
    );
  }
}
