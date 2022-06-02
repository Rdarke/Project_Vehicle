import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button";

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
    <div className="App">
        <h1>{ state.message }</h1>
        <Button onClick={fetchData} variant="contained" color="primary">
          Fetch Data
        </Button>
        <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
  );
};

export default App;
