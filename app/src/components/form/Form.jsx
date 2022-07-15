import { useState } from "react";

function Form(props) {
  const [myOption, setMyOption] = useState("");
  const { options, saveSelection } = props;

  const handleChange = (event) => {
    event.preventDefault();
    setMyOption(event.target.value);
    share();
  };

  const share = () => {
    saveSelection(myOption)
  };

  return (
    <form>
      <select value={myOption} onChange={handleChange}>
        {options.map((element) => (
          <option value={element}>{element}</option>
        ))}
      </select>
    </form>
  );
}

export default Form;