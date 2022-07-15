import React from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import "./MenuItem.scss";

function MenuItem(props) {
  const { setMenuItem, name, selected, link } = props;
  const menuItemClass = classNames("menu-list__item", {
    "menu-list__item--selected": selected === name,
  });

  const saveMenu = () => {
    setMenuItem(name);
  };

  return (
    <Link to={`/${link}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <li className={menuItemClass} onClick={() => saveMenu()}>
      <h2>{name}</h2>
    </li>
    </Link>
  );
};

export default MenuItem;
