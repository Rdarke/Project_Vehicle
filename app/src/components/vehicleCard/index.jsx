import React from "react";
import "./vehicleCard.scss";
import Button from '../button';


function VehicleCard(props) {
  const {heroImage, title, make, description} = props;

  return (
    <div className="wrapper">
    <div className="card">
      <div className="card__body">
        <img 
        src={heroImage ? heroImage : "https://img.freepik.com/premium-vector/different-type-cars-illustration-set-car-symbol-collection-car-icon-pack_7450-493.jpg?w=2000"} className="card__image"/>
        <h2 className="card__title">{title}</h2>
        <h3 className="card__make">{make}</h3>
        <p className="card__description">{description}</p>
      </div>
      <Button title={"Explore"}></Button>
    </div>
    </div>
  )
};

export default VehicleCard;

// https://www.motortrend.com/uploads/sites/5/2019/10/SEMA-2019-Hellwig-Ford-Ranger.jpg
