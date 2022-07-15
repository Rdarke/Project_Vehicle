import { useState } from "react";

function Form(props) {
  const [myOption, setMyOption] = useState("Make");
  const { options, saveSelection } = props;

  const handleChange = (event) => {
    setMyOption(event.target.value);
  };

  const share = () => {
    saveSelection(myOption)
  };

  return (
    <form>
      <select value={myOption} onChange={handleChange, share}>
        {options.map((element) => (
          <option value={element}>{element}</option>
        ))}
      </select>
    </form>
  );
}

export default Form;