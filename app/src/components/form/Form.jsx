import { useState } from "react";

function Form(props) {
  const [myOption, setMyOption] = useState("Alpha");
  const { options, saveSelection } = props;

  const handleChange = (event) => {
    setMyOption(event.target.value)
  }

  const displayOptions = () => {
    options.forEach(element => {
      return (
        <option value={element}>{element}</option>
      )
    });
  }

  return (
    <form>
      <select value={myOption} onChange={handleChange}>
      {displayOptions}
      </select>
    </form>
  )
}

export default Form;