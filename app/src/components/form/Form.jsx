import { useState } from "react";

function Form(props) {
  const [myOption, setMyOption] = useState();
  const { options, saveSelection } = props;

  const handleChange = (event) => {
    event.preventDefault();
    setMyOption(event.target.value);
    saveSelection(event.target.value);
  };

  return (
    <form className="form">
      <select classname="form__selection" value={myOption} onChange={handleChange}>
        {options.map((element) => (
          <option className="form__option" value={element} key={element}>{element}</option>
        ))}
      </select>
    </form>
  );
}

export default Form;