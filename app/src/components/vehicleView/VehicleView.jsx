import React from "react";
import { useParams } from 'react-router-dom';

function VehicleView() {
  const params = useParams(); // Provides URL param.id

  return (
    <div>Hello single view -</div>
  )
};

export default VehicleView;