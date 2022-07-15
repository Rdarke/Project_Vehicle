import { useState } from "react";

function Form(props) {
  const [myOption, setMyOption] = useState();
  const { options, saveSelection } = props;

  const handleChange = (event) => {
    setMyOption(event.target.value)
    console.log("Handling the change! state is now", myOption)
    share();
  };

  const share = () => {
    console.log("My selection is currently", myOption)
    saveSelection(myOption)
  };

  return (
    <form className="form">
      <select classname="form__selection" value={myOption} onChange={handleChange}>
        {options.map((element) => (
          <option classname="form__option" value={element}>{element}</option>
        ))}
      </select>
    </form>
  );
}

export default Form;