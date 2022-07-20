import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Sidebar from "../sidebar";
import VehicleCard from "../vehicleCard";
import Search from "../search/Search";
import mockVehicleData from "../../mockData/vehicleCardMock.json";
// import Navbar from '../navbar';
// import Button from '../button'

function App() {
  const [state, setState] = useState({
    message: "Click the button to load API data!",
    cards: mockVehicleData,
  });

  // Example fetch data for api connection ----
  // const fetchData = () => {
  //   axios.get('/api/data')
  //   .then((res) => {
  //     const message = res.data.message;
  //     console.log(res.data)
  //     console.log(res.data.message)
  //     setState(prev => ({ ...prev, message}))
  //   })
  // };

  const displayVehicleCards = state.cards.map((vehicle) => {
    return (
      <VehicleCard
        key={vehicle.id}
        heroImage={vehicle.heroImage}
        title={vehicle.title}
        make={vehicle.make}
        description={vehicle.description}
      ></VehicleCard>
    );
  });

  return (
    <main className="layout">
      <Router>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/my-favorites" element={<p>I like these</p>}></Route>

          <Route path="/my-garage" element={<p>This is the garage!</p>}></Route>

          <Route path="/search" element={<p>This is the search!</p>}></Route>

          <Route
            path="/home"
            element={
              <section className="content">
                <h3>This is the content section!</h3>
                <Search></Search>
                {displayVehicleCards}
              </section>
            }
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
