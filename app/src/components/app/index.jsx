import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import Sidebar from '../sidebar';
import VehicleCard from '../vehicleCard';
// import Navbar from '../navbar';
// import Button from '../button'

function App() {
  const [ state, setState ] = useState({
    message: 'Click the button to load API data!'
  });

  const fetchData = () => {
    axios.get('/api/data')
    .then((res) => {
      const message = res.data.message;
      console.log(res.data)
      console.log(res.data.message)
      setState(prev => ({ ...prev, message}))
    })
  };

  return (
    <main className="layout">
    <Router>

    <Sidebar></Sidebar>
    <Routes>

    <Route path="/my-favorites" element={<p>I like these</p>}>
    </Route>

    <Route path="/my-garage" element={<p>This is the garage!</p>}>
    </Route>

    <Route path="/search" element={<p>This is the search!</p>}>
    </Route>

    <Route path="/home" element={<section className="content">
    <h3>This is the content section!</h3>
    
    
    <VehicleCard
      heroImage={"https:www.motortrend.com/uploads/sites/5/2019/10/SEMA-2019-Hellwig-Ford-Ranger.jpg"}
      title={"MotorTrend Masterpiece"}
      make={"Ford - Ranger - 2020"}
      description={"Something clever about this build. I like to go fast like Ricky Bobby and some more information to make this description long enough for testing screen widths...etc"}
      ></VehicleCard>
      <VehicleCard
      heroImage={"https:www.motortrend.com/uploads/sites/5/2019/10/SEMA-2019-Hellwig-Ford-Ranger.jpg"}
      title={"MotorTrend Masterpiece"}
      make={"Ford - Ranger - 2020"}
      description={"Something clever about this build. I like to go fast like Ricky Bobby and some more information to make this description long enough for testing screen widths...etc"}
      ></VehicleCard>
      <VehicleCard
      heroImage={"https:www.motortrend.com/uploads/sites/5/2019/10/SEMA-2019-Hellwig-Ford-Ranger.jpg"}
      title={"MotorTrend Masterpiece"}
      make={"Ford - Ranger - 2020"}
      description={"Something clever about this build. I like to go fast like Ricky Bobby and some more information to make this description long enough for testing screen widths...etc"}
      ></VehicleCard>
      <VehicleCard
      heroImage={""}
      title={"MotorTrend Masterpiece"}
      make={"Ford - Ranger - 2020"}
      description={"Something clever about this build. I like to go fast like Ricky Bobby and some more information to make this description long enough for testing screen widths...etc"}
      ></VehicleCard>

      
    </section>}>
    </Route>

    </Routes>

    </Router>
    </main>
  );
};

export default App;
