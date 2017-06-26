import React, {Component} from "react";
import Enlarge from "./Enlarge/Enlarge";
import Selector from "./Selector/Selector";
import "./Portfolio.css";
import arr from "./Pictures";
import rose from "./jpg/rose.jpg";
import water_fall from "./jpg/water_fall.jpg"


export default class Portfolio extends Component
{
  items = [];

  constructor()
  {
    super();
    this.state={rose:'',water_fall:'', IMG_6835:''};
    this.view=[];
    // {
    //   display:"none"
    // }
    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);

  }

  showModal(image)
  {
    // this.setstate({[image]:'flex'})
    //this.state="flex";
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
    // <Selector alt={img}  picture={{img}.img} open={this.showModal} />
    // <Enlarge alt={img} picture={img} display={this.views.display} close={this.closeModal}/>

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
