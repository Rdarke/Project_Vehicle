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
    <main className="layout">
    <Router>

    <section className="sidebar">

    <hr className="sidebar__separator sidebar--centered" />
    <nav className="sidebar__menu" >
    
    <h2>Home</h2>
    <h2>My Collection</h2>
    <h2>Project +</h2>
    <h2>Project Search</h2>

    </nav>
    </section>

    <section className="content">
    <h3>This is the content section!</h3>
    </section>

    </Router>
    </main>
  );
};

export default App;
