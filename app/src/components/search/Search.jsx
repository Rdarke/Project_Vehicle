import React, { useState } from 'react';
import Form from '../form/Form';
import displayBrands from '../../helpers/displayBrands';
import brandData from '../../mockData/brandData.json';

function Search(props) {
  const [ state, setState] = useState({
    make: "",
    model: "",
    year: ""
  });

  const saveSelection = (selection, key) => {

    setState({...state, "make":selection})
  };

  return (
    <div className="search">
      <p>Search Section</p>
      <Form
      options={displayBrands(brandData)}
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