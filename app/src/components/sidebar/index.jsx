import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import classNames from 'classnames';
import './Sidebar.scss';

function Sidebar (props) {

  return (
    <section className="sidebar">

    <hr className="sidebar__separator sidebar--centered" />
    <nav className="sidebar__menu" >
    
    <MenuItem
    name={"Home"}
    selected={false}
    setMenuItem={props.setMenuItem}
    ></MenuItem>

    </nav>
    </section>
  )
};

export default Sidebar;
