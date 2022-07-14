import React from "react";
import "./vehicleCard.scss";
import Button from '../button';


function VehicleCard(props) {

  return (
    <div className="card">
      <div className="card__body">
        <img src="https://www.motortrend.com/uploads/sites/5/2019/10/SEMA-2019-Hellwig-Ford-Ranger.jpg" className="card__image"/>
        <h2 className="card__title">MotorTrend Magic</h2>
        <p className="card__description">Some random text about my build start and end date etc...</p>
      </div>
      {/* <button className="card__btn">View More</button> */}
      <Button title={"Explore"}></Button>
    </div>
  )
};

export default VehicleCard;