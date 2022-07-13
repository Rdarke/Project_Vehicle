import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import "./Sidebar.scss";

function Sidebar(props) {
  const [selected, setSelected] = useState("");

  const updateSelected = (name) => {
    setSelected(name);
  };

  return (
    <section className="sidebar">
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <MenuItem
          name={"Home"}
          selected={selected}
          setMenuItem={updateSelected}
          link={"home"}
        ></MenuItem>
        <MenuItem
          name={"My Garage"}
          selected={selected}
          setMenuItem={updateSelected}
          link={"my-garage"}
        ></MenuItem>
        <MenuItem
          name={"My Favorites"}
          selected={selected}
          setMenuItem={updateSelected}
          link={"my-favorites"}
        ></MenuItem>
        <MenuItem
          name={"Search"}
          selected={selected}
          setMenuItem={updateSelected}
          link={"search"}
        ></MenuItem>
      </nav>
    </section>
  );
}

export default Sidebar;
