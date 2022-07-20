import React from "react";
import { useParams } from 'react-router-dom';

function VehicleView() {
  const params = useParams(); // Provides URL param.id
console.log("This is the params", params)
  return (
    <div>Hello single view - {`${params.id}`}</div>
  )
};

export default VehicleView;