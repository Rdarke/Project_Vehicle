import React from "react";
import { useParams } from "react-router-dom";
import "./VehicleView.scss";

function VehicleView() {
  const params = useParams(); // Provides URL param.id
  console.log("This is the params", params);

  return (
      <div className={"vehicleView"}>
        <h2 className={"vehicleView__title"}>
          Title Goes Here! & Here & Here & Here & Here &........
        </h2>
        <div className={"vehicleView__hero"}>
        <img className={"vehicleView__image"}
        src="https://img.freepik.com/premium-vector/different-type-cars-illustration-set-car-symbol-collection-car-icon-pack_7450-493.jpg?w=2000"/>
        <ul className={"vehicleView__details"}>
        <li>Make: Ford</li>
        <li>Model: Ranger</li>
        <li>Year: 2020</li>
        <li>Years Owned: 2</li>
        </ul>
        </div>
        <div className={"vehicleView__description"}>
          <p>Something clever about this build. I like to go fast like Ricky Bobby and some more information to make this description long enough for testing screen widths...etc</p>
        </div>
      </div>
  );
}

export default VehicleView;
