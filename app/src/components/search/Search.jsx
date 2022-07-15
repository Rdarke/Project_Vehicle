import React, { useState } from 'react';
import Form from '../form/Form';

function Search(props) {

  return (
    <div>
      <p>Search Section</p>
      <Form
      options={["Ford", "Fiat", "Chevy", "BMW", "Mercedes", "GMC", "Jeep"]}
      >
      </Form>
    </div>
  )
};

export default Search;