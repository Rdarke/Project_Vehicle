import React, { useState } from 'react';
import Form from '../form/Form';

function Search(props) {
  const [ state, setState] = useState({
    make: "",
    model: "",
    year: ""
  })

  // currently one step behind user input...! (Bug fix)
  const saveSelection = (data) => {
    setState(prev => ({...prev, make:data}))
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