import React from "react";
import { useParams } from 'react-router-dom';
import './VehicleView.scss';

function VehicleView() {
  const params = useParams(); // Provides URL param.id
console.log("This is the params", params)
  return (
    <div className={'vehicleView__wrapper'}>
    <h1 className={'vehicleView__title'}> Title Goes Here!</h1>
    <div className={'vehicleView__hero'}>
      <p>Hero Image Here</p>
    </div>
    <div className={'vehicleView__overview'}>
      <p>Overview!</p>
    </div>

    </div>
  )
};

export default VehicleView;