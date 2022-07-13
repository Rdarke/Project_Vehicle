import React, { useState } from "react";
import classNames from 'classnames';
import "./MenuItem.scss";

function MenuItem (props) {
  const [style, setStyle] = useState(false)
  const { setMenuItem, name, selected } = props;
  const menuItemClass = classNames("menu-list__item", {
    "menu-list__item--selected": style,
  });

  // if (selected === name) {
  //   setStyle(true);
  // };

  const saveMenu = () => {
    setMenuItem(name)
  };

  return (
    <li className={menuItemClass} onClick={() => saveMenu()}>
    <h2>{name}</h2>
    </li>
  );
};

export default MenuItem;