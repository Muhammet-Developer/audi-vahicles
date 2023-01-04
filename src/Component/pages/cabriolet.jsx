import React from 'react'
import CabrioletData from '../helper/cabriolet'
import "./sedan.css";
function Cabriolet() {
  return(
    <div className="card-container">
    {CabrioletData.map(person =>{
        const{id,desc,title,image}=person
        return(
            <div className="cards" key={id}>
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <img src={image} className="magnification" alt="" />
                    <div className="card-over">
                       <a href={desc} > <button class="button-85" role="button">Discovery</button></a>
                    </div>
                </div>
            )
    })
}
    </div>
)
}

export default Cabriolet;