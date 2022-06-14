import classNames from 'classnames';
import "./MenuItem.scss";

function MenuItem (props) {
  const { setMenuItem, name, selected } = props;

  const menuItemClass = classNames("menu-list__item", {
    "menu-list__item--selected": selected,
  });

  return (
    <li className={menuItemClass} onClick={() => setMenuItem(name)}>
    <h2>{name}</h2>
    </li>
  );
};

export default MenuItem;