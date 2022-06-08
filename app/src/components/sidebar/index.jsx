import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

function Sidebar (props) {

  return (
    <section className="sidebar">

    <hr className="sidebar__separator sidebar--centered" />
    <nav className="sidebar__menu" >
    
    <h2>Home</h2>
    <h2>My Collection</h2>
    <h2>Project +</h2>
    <h2>Project Search</h2>

    </nav>
    </section>
  )
};

export default Sidebar
