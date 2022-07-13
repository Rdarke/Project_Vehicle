import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import classNames from "classnames";
import "./Sidebar.scss";

function Sidebar(props) {
  const [selected, setSelected] = useState("");

  const updateSelected = (name) => {
    setSelected(name)
  };

  return (
    <section className="sidebar">
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <MenuItem
          name={"Home"}
          selected={selected}
          setMenuItem={updateSelected}
        ></MenuItem>
        <MenuItem
          name={"My Garage"}
          selected={selected}
          setMenuItem={updateSelected}
        ></MenuItem>
        <MenuItem
          name={"Search"}
          selected={selected}
          setMenuItem={updateSelected}
        ></MenuItem>
      </nav>
    </section>
  );
}

export default Sidebar;
