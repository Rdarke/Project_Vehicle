// Takes in vehicle data - returns array of models available based on brand
const displayModels = (data, key) => {
  let output = [];

  for (let val of data) {
    if (val.brand === key) {
      output.push(...val.models)
    }
  }
  return output
}

export default displayModels;