import classNames from 'classnames';

function MenuItem (props) {
  const { setMenuItem, name, selected } = props;

  const menuItemClass = classNames("menu-list__item", {
    "menu-list__item--selected": selected,
  });

  return (
    <h1>Hello!</h1>
  );
};

export default MenuItem;