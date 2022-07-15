import React, { useState } from 'react';
import Form from '../form/Form';

function Search(props) {
  const [ state, setState] = useState({
    make: "",
    model: "",
    year: ""
  })

  const saveSelection = (data) => {
    setState({...state, data})
  }

  return (
    <div className="search">
      <p>Search Section</p>
      <Form
      options={["Ford", "Fiat", "Chevy", "BMW", "Mercedes", "GMC", "Jeep"]}
      saveSelection={saveSelection}
      >
      </Form>
      <Form
      options={[""]}
      >
      </Form>
      <Form
      options={[""]}
      >
      </Form>
    </div>
  )
};

export default Search;