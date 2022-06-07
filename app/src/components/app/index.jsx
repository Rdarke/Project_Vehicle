import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import Navbar from '../navbar';
import Button from '../button'

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
    <Router>
    <Navbar></Navbar>
        <h1>{ state.message }</h1>
        <Button onClick={console.log("Hi there")} >Click Me</Button>
    </Router>
    </div>
  );
};

export default App;
