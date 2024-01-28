import React from "react";
import "./fruit.css";

function Fruit(props) {
    return(
  <div className="main">
    <div className="rasm">
        <img src={props.data.img} width="100%" height= "100%"></img>
    </div>
    <div className="details">
      <div className="top">
        <h1>{props.data.title}</h1>
        <button className="button">Add</button>
      </div>
      <div className="bottom">
        <div className="data">
            <p className="title">UOM</p>
            <p className="value">{props.data.uom}</p>
        </div>
        <div className="data">
        <p className="title">pack size</p>
            <p className="value">{props.data.size}</p>
        </div>
        <div className="data">
        <p className="title">per unit</p>
            <p className="value">{props.data.unit}</p>
        </div>
        <div className="data">
        <p className="title">total</p>
            <p className="value">{props.data.total}</p>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Fruit;
